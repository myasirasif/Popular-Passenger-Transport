import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, IdCard, MapPin, ShieldCheck, Snowflake, Wrench } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "About Us, Karama Bus Hire Since Over 7 Years",
  description:
    "Popular Passenger Transport is a Karama-based bus rental and staff transportation company serving Dubai for over 7 years.",
  path: "/about",
  image: "/images/about-karama.jpg",
});

const steps = [
  { title: "Listen", text: "We take your passenger numbers, timings and route, and suggest the right vehicle." },
  { title: "Quote", text: "You receive a fixed price in writing. What we quote is what you pay." },
  { title: "Plan", text: "Drivers are briefed on the route, pickup points and contact person." },
  { title: "Move", text: "Vehicles arrive early, clean and cooled, and our office stays reachable throughout." },
];

// Milestones are deliberately general: no dates or figures beyond what the company has confirmed.
const milestones = [
  { when: "The start", title: "Opened in Karama", text: "Began operating from Al Makati Building, opposite Karama Centre, Bur Dubai." },
  { when: "Core work", title: "Staff transport contracts", text: "Daily pick and drop routes for offices, factories and labour accommodation." },
  { when: "Fleet", title: "Vans, coasters and coaches", text: "Toyota Hiace vans, 26 to 35 seater coasters and 50 seater coaches, all air-conditioned." },
  { when: "Today", title: "7+ years in Dubai", text: "Serving corporates, schools and private groups, rated 4.6 on Google." },
];

const safety = [
  { icon: IdCard, title: "RTA-licensed drivers", text: "Every driver holds a valid UAE licence for the vehicle class they operate." },
  { icon: Wrench, title: "Regular maintenance", text: "Vehicles are serviced on a set schedule and checked before long trips." },
  { icon: Snowflake, title: "Working air conditioning", text: "AC is checked as part of routine inspections, essential in the UAE summer." },
  { icon: ClipboardCheck, title: "Clear accountability", text: "One point of contact for every booking, from quote to drop-off." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A Karama transport company that shows up."
        intro="For over seven years Popular Passenger Transport has moved staff, students and private groups across Dubai and the UAE, from one office in Bur Dubai."
        image="/images/about-karama.jpg"
        imageAlt="Street in Al Karama, Dubai"
      />

      <section className="container-x grid gap-14 py-24 sm:py-28 lg:grid-cols-12 lg:items-center" aria-labelledby="who">
        <div className="lg:col-span-6">
          <SectionHeading eyebrow="Who we are" title={<span id="who">Local, dependable and easy to reach</span>} />
          <div className="mt-6 space-y-5 text-lg leading-relaxed">
            <p>
              We are a Dubai passenger transport company working from Karama. Our customers are companies that need
              staff transportation in Dubai, schools that need safe daily routes, and families and organisers who need a
              bus for a day.
            </p>
            <p>
              Our fleet covers Toyota Hiace passenger vans, 26 to 35 seater coasters and 50 seater coaches. All are
              air-conditioned and driven by professional, licensed drivers.
            </p>
          </div>
          <p className="mt-8 flex items-start gap-3 text-sm">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" aria-hidden />
            {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.city}
          </p>
        </div>
        <Reveal className="relative lg:col-span-5 lg:col-start-8">
          <div className="relative aspect-[6/7] overflow-hidden rounded-[2rem] shadow-lift">
            <Image
              src="/images/about-operations.jpg"
              alt="White full-size coach for corporate transport"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="bg-mist py-24 sm:py-28" aria-labelledby="how">
        <div className="container-x">
          <SectionHeading
            eyebrow="How we operate"
            title={<span id="how">Four steps, every booking</span>}
            intro="Whether it is one airport transfer or a year-long staff contract, the process stays the same."
          />
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.07} className="list-none rounded-3xl bg-white p-7 shadow-soft">
                <span className="font-heading text-sm font-extrabold text-sky">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 leading-relaxed">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-x grid gap-14 py-24 sm:py-28 lg:grid-cols-12" aria-labelledby="milestones">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="Milestones" title={<span id="milestones">Seven years on the road</span>} />
        </div>
        <ol className="relative border-l-2 border-brand-blue/15 lg:col-span-7 lg:col-start-6">
          {milestones.map((m, i) => (
            <Reveal as="li" key={m.title} delay={i * 0.06} className="relative list-none pb-12 pl-8 last:pb-0">
              <span className="absolute top-1 -left-[9px] h-4 w-4 rounded-full border-4 border-white bg-brand-blue ring-2 ring-brand-blue/20" aria-hidden />
              <p className="text-xs font-bold tracking-widest text-sky uppercase">{m.when}</p>
              <h3 className="mt-2 text-xl font-bold">{m.title}</h3>
              <p className="mt-2 leading-relaxed">{m.text}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="bg-brand-deep py-24 text-white sm:py-28" aria-labelledby="safety">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-signal">
              <ShieldCheck className="h-7 w-7" aria-hidden />
            </span>
            <SectionHeading
              light
              className="mt-6"
              eyebrow="Safety and compliance"
              title={<span id="safety">Safe by routine, not by chance</span>}
              intro="School transport in Dubai and daily staff routes demand consistency. These are the basics we never skip."
            />
            <Link href="/contact#booking" className="btn btn-signal mt-10">
              Discuss a contract <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {safety.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.06} className="list-none rounded-3xl bg-white/[0.06] p-7 ring-1 ring-white/10">
                <s.icon className="h-6 w-6 text-sky-300" aria-hidden />
                <h3 className="mt-5 text-lg font-bold text-white!">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
