import { Clock, Phone } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { BookingForm } from "./BookingForm";

// Brand-blue CTA band that flows into the enquiry form (used on Home).
export function BookingSection() {
  return (
    <section id="booking" aria-labelledby="booking-title" className="relative overflow-hidden bg-brand-blue">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_30rem_at_110%_-10%,rgba(46,143,216,0.55),transparent)]" aria-hidden />
      <div className="container-x relative grid gap-12 py-24 sm:py-28 lg:grid-cols-12">
        <div className="text-white lg:col-span-5">
          <p className="eyebrow text-sky-200! before:bg-signal!">Book a bus</p>
          <h2 id="booking-title" className="mt-4 text-4xl leading-tight font-extrabold text-white! sm:text-5xl">
            Tell us where, when and how many.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/80">
            Send a quick enquiry and we will come back with availability and a fixed price. Prefer to talk? Call or
            WhatsApp the Karama office.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <a href={`tel:${siteConfig.phone.tel}`} className="btn bg-white text-brand-deep hover:bg-mist">
              <Phone className="h-4 w-4" aria-hidden /> {siteConfig.phone.display}
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp us
            </a>
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm text-white/70">
            <Clock className="h-4 w-4" aria-hidden /> {siteConfig.operatingNote}
          </p>
        </div>
        <div className="lg:col-span-7">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
