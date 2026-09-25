"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarDays, Route, Search, Users } from "lucide-react";
import { services } from "@/lib/site-config";
import { PREFILL_EVENT, type BookingPrefill } from "./BookingForm";

export function QuickBooking() {
  const router = useRouter();
  const [service, setService] = useState(services[0].slug);
  const [passengers, setPassengers] = useState("");
  const [date, setDate] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const detail: BookingPrefill = { service, passengers, date };
    const form = document.getElementById("booking");
    if (form) {
      window.dispatchEvent(new CustomEvent(PREFILL_EVENT, { detail }));
      form.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => document.getElementById("bf-name")?.focus({ preventScroll: true }), 600);
    } else {
      const q = new URLSearchParams(Object.entries(detail).filter(([, v]) => v) as [string, string][]);
      router.push(`/contact?${q}#booking`);
    }
  }

  const label = "mb-1 flex items-center gap-1.5 text-xs font-bold tracking-wider text-slate uppercase";

  return (
    <form
      onSubmit={onSubmit}
      aria-label="Quick booking"
      className="grid gap-4 rounded-3xl bg-white p-5 shadow-lift ring-1 ring-slate/10 sm:grid-cols-2 sm:p-6 lg:grid-cols-[1.4fr_1fr_1fr_auto] lg:items-end"
    >
      <div>
        <label htmlFor="qb-type" className={label}>
          <Route className="h-3.5 w-3.5 text-brand-blue" aria-hidden /> Trip type
        </label>
        <select id="qb-type" value={service} onChange={(e) => setService(e.target.value)} className="field">
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {s.title}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="qb-pax" className={label}>
          <Users className="h-3.5 w-3.5 text-brand-blue" aria-hidden /> Passengers
        </label>
        <input
          id="qb-pax"
          type="number"
          min={1}
          max={500}
          inputMode="numeric"
          placeholder="e.g. 24"
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}
          className="field"
        />
      </div>
      <div>
        <label htmlFor="qb-date" className={label}>
          <CalendarDays className="h-3.5 w-3.5 text-brand-blue" aria-hidden /> Date
        </label>
        <input id="qb-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} className="field" />
      </div>
      <button type="submit" className="btn btn-primary h-[46px] px-7 sm:col-span-2 lg:col-span-1">
        <Search className="h-4 w-4" aria-hidden /> Check Availability
      </button>
    </form>
  );
}
