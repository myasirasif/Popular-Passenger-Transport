import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeDollarSign,
  Briefcase,
  CalendarHeart,
  FileText,
  GraduationCap,
  Map as MapIcon,
  Quote,
  ShieldCheck,
  Snowflake,
  Star,
  Users,
} from "lucide-react";
import { fleetSummary, services, siteConfig } from "@/lib/site-config";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesGrid() {
  return (
    <section className="container-x py-24 sm:py-28" aria-labelledby="services-title">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <SectionHeading
          className="lg:col-span-7"
          eyebrow="What we do"
          title={<span id="services-title">Bus rental and passenger transport across Dubai</span>}
        />
        <p className="text-lg leading-relaxed lg:col-span-5">
          From daily staff transportation in Dubai to a single airport run, every trip gets a clean, air-conditioned
          vehicle and a licensed driver.
        </p>
      </div>

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal as="li" key={s.slug} delay={(i % 3) * 0.08} className={`list-none h-full`}>
<div className="h-full">
              <Link
                href={`/services#${s.slug}`}
                className="group flex h-full flex-col rounded-3xl bg-white p-7 shadow-soft ring-1 ring-slate/10 transition duration-300 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-blue/8 text-brand-blue transition duration-300 group-hover:translate-x-1 group-hover:-rotate-6 group-hover:bg-brand-blue group-hover:text-white">
                  <s.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed">{s.short}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

const reasons = [
  { icon: ShieldCheck, title: "Licensed and experienced drivers", text: "RTA-licensed drivers who know Dubai routes, traffic patterns and timings." },
  { icon: Snowflake, title: "Air-conditioned, well-maintained fleet", text: "Every van, coaster and coach is cleaned and serviced on a regular schedule." },
  { icon: BadgeDollarSign, title: "Fixed, transparent pricing", text: "A clear quote up front with no hidden charges added after the trip." },
  { icon: FileText, title: "From a single trip to a full year", text: "One-off hires, monthly rentals or annual staff transport contracts." },
];

export function WhyUs() {
  return (
    <section className="bg-mist py-24 sm:py-28" aria-labelledby="why-title">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12">
        <Reveal className="relative lg:col-span-5">
          <div className="relative aspect-[6/7] overflow-hidden rounded-[2rem] shadow-lift">
            <Image
              src="/images/why-us.jpg"
              alt="Air-conditioned coaster bus ready for a staff transport route"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -right-4 -bottom-6 rounded-2xl bg-white p-5 shadow-lift sm:-right-8">
            <p className="font-heading text-3xl font-extrabold text-brand-blue">7+</p>
            <p className="text-sm font-medium">years moving Dubai</p>
          </div>
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <SectionHeading
            eyebrow="Why choose us"
            title={<span id="why-title">Transport your team can set a watch by</span>}
            intro="Operating from Karama for over seven years, we keep things simple: turn up on time, keep vehicles spotless and quote honestly."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal as="li" key={r.title} delay={i * 0.07} className={`list-none `}>
<div className="">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-brand-blue shadow-soft">
                    <r.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed">{r.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function FleetPreview() {
  return (
    <section className="container-x py-24 sm:py-28" aria-labelledby="fleet-title">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Our fleet"
          title={<span id="fleet-title">The right vehicle for every group size</span>}
        />
        <Link href="/fleet" className="btn btn-outline shrink-0">
          View full fleet <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
      <ul className="mt-14 grid gap-6 md:grid-cols-3">
        {fleetSummary.map((v, i) => (
          <Reveal as="li" key={v.title} delay={i * 0.08} className={`list-none ${i === 1 ? "md:translate-y-8" : ""}`}>
<div className="group  overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-slate/10">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={v.image}
                  alt={`${v.model} ${v.title.toLowerCase()}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-brand-blue backdrop-blur">
                  {v.seats}
                </span>
              </div>
              <div className="flex items-center justify-between p-6">
                <div>
                  <h3 className="text-xl font-bold">{v.title}</h3>
                  <p className="mt-1 text-sm">{v.model}</p>
                </div>
                <Link
                  href={`/fleet?type=${v.category}`}
                  aria-label={`See ${v.title} options`}
                  className="grid h-11 w-11 place-items-center rounded-full bg-mist text-brand-blue transition group-hover:bg-brand-blue group-hover:text-white"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

const useCases = [
  { icon: Briefcase, title: "Corporates", text: "Staff shuttles and shift transport" },
  { icon: GraduationCap, title: "Schools", text: "Supervised daily routes and trips" },
  { icon: CalendarHeart, title: "Events", text: "Weddings, conferences and exhibitions" },
  { icon: MapIcon, title: "Tourists", text: "Airport pickups and city tours" },
];

export function UseCases() {
  return (
    <section className="pt-8 pb-24" aria-labelledby="usecases-title">
      <div className="container-x">
        <h2 id="usecases-title" className="sr-only">
          Who we move
        </h2>
        <ul className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {useCases.map((u) => (
            <li
              key={u.title}
              className="flex items-center gap-4 rounded-2xl border border-slate/10 bg-gradient-to-br from-mist to-white p-5"
            >
              <u.icon className="h-6 w-6 shrink-0 text-sky" aria-hidden />
              <div>
                <p className="font-heading font-bold text-ink">{u.title}</p>
                <p className="hidden text-sm sm:block">{u.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const reviews = [
  { theme: "Punctual", text: "Pickups were on time every single morning. Our staff have not missed a shift start since we switched." },
  { theme: "Clean vehicles", text: "The buses are always clean and the air conditioning works properly, even in the middle of summer." },
  { theme: "Courteous drivers", text: "Polite, professional drivers who know the roads. Booking was quick and the price was exactly as quoted." },
];

export function Testimonials() {
  const { rating } = siteConfig;
  return (
    <section className="relative overflow-hidden bg-brand-deep py-24 text-white sm:py-28" aria-labelledby="reviews-title">
      <div className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-sky/20 blur-3xl" aria-hidden />
      <div className="container-x relative grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading light eyebrow="What customers say" title={<span id="reviews-title">Rated {rating.value} on Google</span>} />
          <div className="mt-8 flex items-center gap-4">
            <span className="flex" aria-hidden>
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className={`h-6 w-6 ${i < 4 ? "fill-signal text-signal" : "fill-signal/50 text-signal"}`} />
              ))}
            </span>
            <span className="text-white/75">{rating.count} Google reviews</span>
          </div>
          <p className="mt-6 max-w-sm text-sm text-white/60">
            Summaries of recurring themes from our public Google reviews.
          </p>
        </div>
        <ul className="grid gap-5 md:grid-cols-3 lg:col-span-8">
          {reviews.map((r, i) => (
            <Reveal as="li" key={r.theme} delay={i * 0.08} className={`list-none ${i === 1 ? "md:mt-10" : ""}`}>
<div className="flex h-full  flex-col rounded-3xl bg-white/[0.06] p-7 ring-1 ring-white/10 backdrop-blur">
                <Quote className="h-7 w-7 text-signal" aria-hidden />
                <p className="mt-2 text-xs font-bold tracking-widest text-sky-300 uppercase">{r.theme}</p>
                <blockquote className="mt-4 flex-1 leading-relaxed text-white/85">{r.text}</blockquote>
                <p className="mt-6 flex items-center gap-2 text-sm text-white/60">
                  <Users className="h-4 w-4" aria-hidden /> Google Review, Dubai
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
