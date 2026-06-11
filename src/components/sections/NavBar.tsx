"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Kurzy", href: "/kurzy" },
  { label: "Exclusive", href: "/exclusive" },
  { label: "Ceník", href: "/cenik" },
  { label: "O nás", href: "/o-nas" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (y / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-[#e5e7eb] shadow-sm"
          : "bg-white"
      )}
    >
      {/* Scroll progress bar (plain div — value-driven, no animation needed) */}
      <div
        className="absolute top-0 left-0 h-[2px] bg-[#047857] origin-left"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
            className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857] rounded-md"
            aria-label="Autoškola Jízda, domovská stránka"
          >
            <m.div
              whileHover={{ rotate: [0, -6, 6, -3, 3, 0] }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="shrink-0"
            >
              <Image
                src="/images/jizdalogo.svg"
                alt=""
                width={36}
                height={36}
                priority
                aria-hidden="true"
              />
            </m.div>
            <span className="flex flex-col leading-none text-left">
              <span className="text-[15px] font-bold tracking-tight text-[#111827] group-hover:text-[#047857] transition-colors">
                Autoškola Jízda
              </span>
              <span className="text-[11px] text-[#6b7280] font-normal tracking-wide">
                Rakovník
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Hlavní navigace">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                    active ? "text-[#047857]" : "text-[#374151] hover:text-[#047857]"
                  )}
                >
                  {active && (
                    <span
                      className="absolute inset-0 rounded-md bg-[#f0fdf4]"
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Kontakt CTA */}
          <Link
            href="/kontakt"
            className={cn(
              "hidden md:inline-flex text-sm font-semibold px-4 py-2 rounded-md border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857] focus-visible:ring-offset-2",
              pathname === "/kontakt"
                ? "bg-[#065f46] text-white border-[#065f46]"
                : "bg-[#047857] text-white border-[#047857] hover:bg-[#065f46]"
            )}
            aria-current={pathname === "/kontakt" ? "page" : undefined}
          >
            Kontakt
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-md text-[#374151] hover:bg-[#f3f4f6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857]"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <m.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  <X size={22} aria-hidden="true" />
                </m.span>
              ) : (
                <m.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="block"
                >
                  <Menu size={22} aria-hidden="true" />
                </m.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="md:hidden border-t border-[#e5e7eb] bg-white"
          >
            <nav
              className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1"
              aria-label="Mobilní navigace"
            >
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={cn(
                  "text-[17px] font-semibold py-3 px-2 rounded hover:bg-[#f9fafb] transition-colors",
                  pathname === "/" ? "text-[#047857]" : "text-[#111827] hover:text-[#047857]"
                )}
              >
                Domů
              </Link>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-[17px] font-medium py-3 px-2 rounded hover:bg-[#f9fafb] transition-colors",
                    pathname === link.href
                      ? "text-[#047857]"
                      : "text-[#111827] hover:text-[#047857]"
                  )}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/kontakt"
                onClick={() => setOpen(false)}
                className="mt-3 flex items-center justify-center bg-[#047857] text-white text-[17px] font-semibold py-3 rounded-md hover:bg-[#065f46] transition-colors"
              >
                Kontakt
              </Link>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
