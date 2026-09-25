"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { ArrowRight, Luggage, Snowflake, UserRoundCheck, Users } from "lucide-react";
import { fleet, type FleetCategory } from "@/lib/site-config";

const filters = ["All", "Vans", "Coasters", "Coaches"] as const;
type Filter = (typeof filters)[number];

const featureIcon = (f: string) =>
  f.toLowerCase().includes("air") ? Snowflake : f.toLowerCase().includes("driver") ? UserRoundCheck : Luggage;

const serviceFor: Record<FleetCategory, string> = {
  Vans: "bus-van-rental",
  Coasters: "staff-transportation",
  Coaches: "event-group-charter",
};

export function FleetGallery() {
  const [active, setActive] = useState<Filter>("All");

  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("type");
    if (t && (filters as readonly string[]).includes(t)) setActive(t as Filter);
  }, []);

  const items = active === "All" ? fleet : fleet.filter((v) => v.category === active);

  return (
    <LayoutGroup>
      <div role="tablist" aria-label="Filter vehicles" className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={active === f}
            onClick={() => setActive(f)}
            className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
              active === f ? "text-white" : "text-ink hover:text-brand-blue"
            }`}
          >
            {active === f && (
              <motion.span layoutId="fleet-pill" className="absolute inset-0 -z-0 rounded-full bg-brand-blue" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
            )}
            <span className="relative">{f}</span>
          </button>
        ))}
      </div>

      <motion.ul layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
        <AnimatePresence mode="popLayout">
          {items.map((v) => (
            <motion.li
              key={v.id}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-slate/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={v.image}
                  alt={v.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-brand-blue backdrop-blur">
                  {v.category.replace(/s$/, "")}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-xl font-bold">{v.name}</h2>
                <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-brand-blue">
                  <Users className="h-4 w-4" aria-hidden /> {v.seats}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {v.features.map((f) => {
                    const Icon = featureIcon(f);
                    return (
                      <li key={f} className="flex items-center gap-1.5 rounded-full bg-mist px-3 py-1.5 text-xs font-medium">
                        <Icon className="h-3.5 w-3.5 text-sky" aria-hidden /> {f}
                      </li>
                    );
                  })}
                </ul>
                <Link
                  href={`/contact?service=${serviceFor[v.category]}#booking`}
                  className="btn btn-outline mt-7 w-full group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white"
                  aria-label={`Book this vehicle: ${v.name}, ${v.seats}`}
                >
                  Book This Vehicle <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </LayoutGroup>
  );
}
