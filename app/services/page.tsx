import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { pageMetadata } from "@/lib/seo";
import { services } from "@/lib/site-config";

export const metadata = pageMetadata({
  title: "Services: Staff Transportation, School Transport and Bus Rental Dubai",
  description:
    "Staff transportation Dubai, school transport Dubai, van rental with driver, airport transfers, event charter and intercity GCC trips.",
  path: "/services",
  image: "/images/service-staff.jpg",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Six ways we move people across the UAE."
        intro="Staff transportation, school transport and van rental with driver in Dubai, plus airport, event and intercity trips. One team, one number, fixed quotes."
        image="/images/service-staff.jpg"
        imageAlt="Sheikh Zayed Road and Dubai Marina at dusk"
      >
        <nav aria-label="Jump to service" className="flex flex-wrap gap-2">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/85 hover:bg-white/10"
            >
              {s.title}
            </a>
          ))}
        </nav>
      </PageHero>

      <div className="container-x space-y-24 py-24 sm:space-y-32 sm:py-28">
        {services.map((s, i) => {
          const flip = i % 2 === 1;
          return (
            <section key={s.slug} id={s.slug} aria-labelledby={`${s.slug}-title`} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
              <Reveal className={`lg:col-span-6 ${flip ? "lg:order-2 lg:col-start-7" : ""}`}>
                <div className="relative aspect-[7/5] overflow-hidden rounded-[2rem] shadow-lift">
                  <Image src={s.image} alt={s.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                </div>
              </Reveal>
              <div className={`lg:col-span-5 ${flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-8"}`}>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-blue/8 text-brand-blue">
                  <s.icon className="h-6 w-6" aria-hidden />
                </span>
                <p className="mt-6 font-heading text-sm font-extrabold text-sky">0{i + 1} / 06</p>
                <h2 id={`${s.slug}-title`} className="mt-2 text-3xl font-extrabold sm:text-4xl">
                  {s.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed">{s.short}</p>
                <ul className="mt-7 space-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sky/15 text-brand-blue">
                        <Check className="h-3.5 w-3.5" aria-hidden />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link href={`/contact?service=${s.slug}#booking`} className="btn btn-primary mt-9">
                  Request a quote for this service <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
