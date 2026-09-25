"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CircleCheck, LoaderCircle, Send } from "lucide-react";
import { services } from "@/lib/site-config";

export type BookingPrefill = Partial<Record<"service" | "passengers" | "date", string>>;

export const PREFILL_EVENT = "booking:prefill";

const empty = {
  name: "",
  company: "",
  phone: "",
  email: "",
  service: "",
  passengers: "",
  date: "",
  pickup: "",
  dropoff: "",
  message: "",
};
type Fields = typeof empty;
type Errors = Partial<Record<keyof Fields, string>>;

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^\+?[\d\s()-]{7,}$/.test(f.phone.trim())) e.phone = "Please enter a valid phone number.";
  if (!/^\S+@\S+\.\S+$/.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (!f.service) e.service = "Please choose a service.";
  if (f.passengers && (Number(f.passengers) < 1 || Number(f.passengers) > 500))
    e.passengers = "Enter a number between 1 and 500.";
  return e;
}

// Accepts either a service slug or a title and returns the slug.
const toSlug = (v?: string) =>
  services.find((s) => s.slug === v || s.title === v)?.slug ?? "";

export function BookingForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const apply = (p: BookingPrefill) =>
      setFields((f) => ({
        ...f,
        service: toSlug(p.service) || f.service,
        passengers: p.passengers ?? f.passengers,
        date: p.date ?? f.date,
      }));

    const q = new URLSearchParams(window.location.search);
    apply({
      service: q.get("service") ?? undefined,
      passengers: q.get("passengers") ?? undefined,
      date: q.get("date") ?? undefined,
    });

    const onPrefill = (e: Event) => apply((e as CustomEvent<BookingPrefill>).detail);
    window.addEventListener(PREFILL_EVENT, onPrefill);
    return () => window.removeEventListener(PREFILL_EVENT, onPrefill);
  }, []);

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFields((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate(fields);
    setErrors(found);
    if (Object.keys(found).length) {
      document.getElementById(`bf-${Object.keys(found)[0]}`)?.focus();
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setFields(empty);
    } catch {
      setStatus("error");
    }
  }

  const field = (k: keyof Fields, label: string, props: React.InputHTMLAttributes<HTMLInputElement> = {}, optional = false) => (
    <div>
      <label htmlFor={`bf-${k}`} className="mb-1.5 block text-sm font-semibold text-ink">
        {label} {optional && <span className="font-normal text-slate">(optional)</span>}
      </label>
      <input
        id={`bf-${k}`}
        name={k}
        value={fields[k]}
        onChange={set(k)}
        aria-invalid={!!errors[k]}
        aria-describedby={errors[k] ? `bf-${k}-err` : undefined}
        className={`field ${errors[k] ? "border-red-500" : ""}`}
        {...props}
      />
      {errors[k] && (
        <p id={`bf-${k}-err`} className="mt-1 text-xs text-red-600">
          {errors[k]}
        </p>
      )}
    </div>
  );

  return (
    <div className="relative rounded-3xl bg-white p-6 shadow-lift ring-1 ring-slate/10 sm:p-8">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="ok"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex min-h-96 flex-col items-start justify-center"
            role="status"
          >
            <span className="grid h-14 w-14 place-items-center rounded-full bg-emerald-50 text-emerald-600">
              <CircleCheck className="h-8 w-8" aria-hidden />
            </span>
            <h3 className="mt-6 text-2xl font-bold">Thank you, your enquiry is in.</h3>
            <p className="mt-3 max-w-md">
              Our bookings team will call you back shortly with availability and a fixed quote.
            </p>
            <button type="button" onClick={() => setStatus("idle")} className="btn btn-outline mt-8">
              Send another enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" noValidate onSubmit={onSubmit} exit={{ opacity: 0 }} className="grid gap-5 sm:grid-cols-2">
            {field("name", "Full name", { autoComplete: "name", required: true })}
            {field("company", "Company", { autoComplete: "organization" }, true)}
            {field("phone", "Phone", { type: "tel", autoComplete: "tel", required: true, inputMode: "tel" })}
            {field("email", "Email", { type: "email", autoComplete: "email", required: true })}

            <div>
              <label htmlFor="bf-service" className="mb-1.5 block text-sm font-semibold text-ink">
                Service
              </label>
              <select
                id="bf-service"
                name="service"
                value={fields.service}
                onChange={set("service")}
                aria-invalid={!!errors.service}
                aria-describedby={errors.service ? "bf-service-err" : undefined}
                className={`field ${errors.service ? "border-red-500" : ""}`}
              >
                <option value="">Choose a service</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.title}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p id="bf-service-err" className="mt-1 text-xs text-red-600">
                  {errors.service}
                </p>
              )}
            </div>
            {field("passengers", "Number of passengers", { type: "number", min: 1, max: 500, inputMode: "numeric" })}
            {field("date", "Trip date", { type: "date" })}
            {field("pickup", "Pickup location", { placeholder: "e.g. Karama, Dubai" })}
            <div className="sm:col-span-2">{field("dropoff", "Drop-off location", { placeholder: "e.g. DXB Terminal 3" })}</div>

            <div className="sm:col-span-2">
              <label htmlFor="bf-message" className="mb-1.5 block text-sm font-semibold text-ink">
                Message <span className="font-normal text-slate">(optional)</span>
              </label>
              <textarea
                id="bf-message"
                name="message"
                rows={4}
                value={fields.message}
                onChange={set("message")}
                placeholder="Timings, return trip, luggage or anything else we should know"
                className="field resize-y"
              />
            </div>

            <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-slate" aria-live="polite">
                {status === "error"
                  ? "Something went wrong. Please call us or try again."
                  : "We reply within working hours. No spam, ever."}
              </p>
              <button type="submit" className="btn btn-primary px-8" disabled={status === "loading"}>
                {status === "loading" ? (
                  <>
                    <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden /> Sending
                  </>
                ) : (
                  <>
                    Send enquiry <Send className="h-4 w-4" aria-hidden />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
