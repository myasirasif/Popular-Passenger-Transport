import Link from "next/link";
import { ArrowUpRight, Heart, Mail, MapPin, Phone, Inbox } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { nav, services, siteConfig } from "@/lib/site-config";

export function Footer() {
  const { address, phone } = siteConfig;
  return (
    <footer className="bg-brand-deep pb-20 text-white/70 md:pb-0">
      <div className="container-x grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo className="h-10" inverted />
          <p className="mt-6 max-w-xs text-sm leading-relaxed">
            Bus rental, staff transportation and school transport from our Karama office.{" "}
            {siteConfig.experience}.
          </p>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-sm font-bold tracking-wider text-white! uppercase">Services</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-sm font-bold tracking-wider text-white! uppercase">Company</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-sm font-bold tracking-wider text-white! uppercase">Visit or call</h2>
          <address className="mt-5 space-y-4 text-sm not-italic">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden />
              <span>
                {address.line1},<br />
                {address.line2}, {address.city}, {address.country}
              </span>
            </p>
            <p className="flex gap-3">
              <Inbox className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden />
              P.O. Box {address.poBox}
            </p>
            <p className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden />
              <a href={`tel:${phone.tel}`} className="hover:text-white">
                {phone.display}
              </a>
            </p>
            <p className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sky" aria-hidden />
              <a href={`mailto:${siteConfig.email}`} className="break-all hover:text-white">
                {siteConfig.email}
              </a>
            </p>
          </address>
          <a
            href={siteConfig.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-white hover:text-signal"
          >
            Open in Google Maps <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs sm:flex-row sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved. &middot;{" "}
            <Link href="/credits" className="hover:text-white">
              Photo credits
            </Link>
          </p>
          <p className="flex items-center gap-1">
            Design and developed with
            <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" aria-label="love" />
            by
            <a
              href="https://yasirafridi.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-signal"
            >
              Yasir
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
