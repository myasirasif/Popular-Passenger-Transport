"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Star } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  const { rating } = siteConfig;
  return (
    <section className="relative">
      <div className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-brand-deep pt-28 pb-24">
        <Image
          src="/images/hero-coach.jpg"
          alt="Sheikh Zayed Road traffic at night, Dubai"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-deep via-brand-deep/85 to-brand-blue/30" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-brand-deep/80 to-transparent" />

        <div className="container-x">
          <div className="max-w-3xl">
            <motion.p {...rise(0)} className="eyebrow text-sky-200! before:bg-signal!">
              Bus rental Dubai &middot; Since over 7 years
            </motion.p>
            <motion.h1
              {...rise(0.08)}
              className="mt-6 text-5xl leading-[1.02] font-extrabold text-white! sm:text-6xl lg:text-7xl"
            >
              Moving Dubai,
              <br />
              <span className="bg-gradient-to-r from-white to-sky-300 bg-clip-text text-transparent">
                Every Single Day
              </span>
            </motion.h1>
            <motion.p {...rise(0.16)} className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
              {siteConfig.subline}. Staff transportation, school transport and van rental with driver, run
              from our office in Karama.
            </motion.p>
            <motion.div {...rise(0.24)} className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact#booking" className="btn btn-signal px-7 py-3.5 text-base">
                Get a Quote <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <a href={`tel:${siteConfig.phone.tel}`} className="btn btn-ghost px-7 py-3.5 text-base">
                <Phone className="h-4 w-4" aria-hidden /> Call Now
              </a>
            </motion.div>

            <motion.ul {...rise(0.32)} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-white/80">
              <li className="flex items-center gap-3">
                <span className="flex" aria-hidden>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < 4 ? "fill-signal text-signal" : "fill-signal/50 text-signal"}`}
                    />
                  ))}
                </span>
                <span>
                  <strong className="text-white">{rating.value}</strong> from {rating.count} Google reviews
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="hidden h-5 w-px bg-white/25 sm:block" aria-hidden />
                <span>
                  <strong className="text-white">7+ years</strong> in Dubai
                </span>
              </li>
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
