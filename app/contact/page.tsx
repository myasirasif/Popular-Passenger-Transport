import { ArrowUpRight, Clock, Inbox, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { BookingForm } from "@/components/sections/BookingForm";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { pageMetadata } from "@/lib/seo";
import { siteConfig, whatsappLink } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Contact and Booking, Karama Bus Hire",
  description:
    "Book a bus or van in Dubai. Call +971 4 397 7240 or send an enquiry to our Karama office for staff transport, school transport and bus rental quotes.",
  path: "/contact",
});

export default function ContactPage() {
  const { address, phone } = siteConfig;
  const row = "flex gap-4";
  const icon = "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-blue/8 text-brand-blue";

  return (
    <>
      <PageHero
        eyebrow="Contact and booking"
        title="Get a fixed quote for your trip."
        intro="Fill in the enquiry form or reach the Karama office directly by phone or WhatsApp."
        image="/images/service-rental.jpg"
        imageAlt="Passenger van ready for booking"
      />

      <section className="container-x grid gap-10 py-20 sm:py-24 lg:grid-cols-12" aria-label="Contact">
        <div id="booking" className="lg:col-span-7">
          <h2 className="mb-6 text-2xl font-extrabold sm:text-3xl">Booking enquiry</h2>
          <BookingForm />
        </div>

        <aside className="space-y-6 lg:col-span-5">
          <div className="rounded-3xl bg-mist p-7 sm:p-8">
            <h2 className="text-2xl font-extrabold">Karama office</h2>
            <address className="mt-6 space-y-5 not-italic">
              <p className={row}>
                <span className={icon}><MapPin className="h-5 w-5" aria-hidden /></span>
                <span>
                  {address.line1},<br />
                  {address.line2}, {address.city}, {address.country}
                </span>
              </p>
              <p className={row}>
                <span className={icon}><Inbox className="h-5 w-5" aria-hidden /></span>
                <span className="self-center">P.O. Box {address.poBox}</span>
              </p>
              <p className={row}>
                <span className={icon}><Phone className="h-5 w-5" aria-hidden /></span>
                <a href={`tel:${phone.tel}`} className="self-center font-semibold text-ink hover:text-brand-blue">
                  {phone.display}
                </a>
              </p>
              <p className={row}>
                <span className={icon}><Mail className="h-5 w-5" aria-hidden /></span>
                <a href={`mailto:${siteConfig.email}`} className="self-center font-semibold break-all text-ink hover:text-brand-blue">
                  {siteConfig.email}
                </a>
              </p>
              <div className={row}>
                <span className={icon}><Clock className="h-5 w-5" aria-hidden /></span>
                <dl className="text-sm">
                  {siteConfig.hours.map((h) => (
                    <div key={h.days} className="flex flex-wrap gap-x-2">
                      <dt className="font-semibold text-ink">{h.days}:</dt>
                      <dd>{h.time}</dd>
                    </div>
                  ))}
                  <p className="mt-1">{siteConfig.operatingNote}</p>
                </dl>
              </div>
            </address>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-8 w-full bg-[#25D366] text-white hover:brightness-95"
            >
              <WhatsAppIcon className="h-5 w-5" /> Message us on WhatsApp
            </a>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-soft ring-1 ring-slate/10">
            <iframe
              title="Map showing Al Makati Building, opposite Karama Centre, Bur Dubai"
              src={siteConfig.mapEmbed}
              className="block aspect-[4/3] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={siteConfig.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white px-5 py-4 text-sm font-semibold text-brand-blue hover:bg-mist"
            >
              Get directions in Google Maps <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
        </aside>
      </section>
    </>
  );
}
