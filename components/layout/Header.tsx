"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { LogoMark } from "@/components/brand/LogoMark";
import { nav, siteConfig } from "@/lib/site-config";

export function Header() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-slate/10 bg-white/85 shadow-soft backdrop-blur-xl"
          : "bg-gradient-to-b from-brand-deep/50 to-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <div className="container-x flex h-18 items-center justify-between gap-6">
        <Link href="/" aria-label="Popular Passenger Transport, home" className="shrink-0">
          <span className="hidden sm:block">
            <Logo className="h-11" inverted={!solid} />
          </span>
          <LogoMark className="h-10 w-10 sm:hidden" inverted={!solid} />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = pathname === item.href;
              const tone = solid
                ? active ? "text-brand-blue" : "text-ink/75 hover:text-brand-blue"
                : active ? "text-white" : "text-white/80 hover:text-white";
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${tone}`}
                  >
                    {item.label}
                    {active && (
                      <span
                        className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full ${solid ? "bg-brand-blue" : "bg-signal"}`}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${siteConfig.phone.tel}`}
            className={`mr-2 hidden items-center gap-2 text-sm font-semibold xl:flex ${solid ? "text-ink" : "text-white"}`}
          >
            <Phone className="h-4 w-4" aria-hidden /> {siteConfig.phone.display}
          </a>
          <Link
            href="/contact#booking"
            className={`btn hidden sm:inline-flex ${solid ? "btn-primary" : "bg-white text-brand-blue hover:bg-mist"}`}
          >
            Book a Bus
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className={`grid h-11 w-11 place-items-center rounded-full lg:hidden ${solid ? "text-ink hover:bg-mist" : "text-white hover:bg-white/10"}`}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex h-dvh flex-col bg-brand-deep text-white lg:hidden"
          >
            <div className="container-x flex h-18 items-center justify-between">
              <Logo className="h-10" inverted />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-full hover:bg-white/10"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav aria-label="Mobile" className="container-x mt-6 flex-1 overflow-y-auto">
              <ul>
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className={`block border-b border-white/10 py-4 font-heading text-3xl font-bold ${
                        pathname === item.href ? "text-signal" : "text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <Link href="/contact#booking" className="btn btn-signal mt-8 w-full">
                Book a Bus
              </Link>
            </nav>
            <div className="container-x pt-4 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
              <a
                href={`tel:${siteConfig.phone.tel}`}
                className="btn w-full bg-white py-4 text-base text-brand-deep"
              >
                <Phone className="h-5 w-5" aria-hidden /> Call {siteConfig.phone.display}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
