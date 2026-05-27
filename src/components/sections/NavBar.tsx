"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Výcvik B", href: "/vycvik-b" },
  { label: "Exclusive", href: "/exclusive" },
  { label: "Ceník", href: "/cenik" },
  { label: "O nás", href: "/o-nas" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-200",
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-[#e5e7eb] shadow-sm"
          : "bg-white"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857] rounded-md"
            aria-label="Autoškola Jízda — domovská stránka"
          >
            <span
              className="w-8 h-8 flex items-center justify-center rounded bg-[#047857] text-white text-sm font-black leading-none select-none shrink-0 group-hover:bg-[#065f46] transition-colors"
              aria-hidden="true"
            >
              L
            </span>
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
          <nav className="hidden md:flex items-center gap-6" aria-label="Hlavní navigace">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-[#047857]"
                    : "text-[#374151] hover:text-[#047857]"
                )}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
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
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-[#e5e7eb] bg-white">
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
        </div>
      )}
    </header>
  );
}
