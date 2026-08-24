"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight, Menu, X } from "lucide-react";
import Logo from "./Logo";

const navItems = [
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Clients", href: "#clients" },
  { label: "Tranings", href: "#trainings" },
  {label:"Vlight",href:"/vlight"}
];

export default function Navbar({ dark = true }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled;
  const color = solid ? "text-navy" : dark ? "text-white" : "text-navy";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${color} ${
        solid ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100" : "bg-transparent"
      }`}
    >
      <div className="px-6 md:px-10 lg:px-14 py-5 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo />
          <span className="text-lg font-medium tracking-wide">Vithsutra</span>
        </a>

        <nav className="hidden lg:flex items-center gap-9 text-[13px] tracking-[0.14em] uppercase font-medium">
          {navItems.map((n) => (
            n.label === "Vlight" ? <a key={n.label} href={n.href} className="text-red-300 nav-link opacity-90 hover:opacity-100">
        <img src="vlight-logo.png" alt="Vithsutra" className={`h-18 w-18 object-contain`} />
            </a> :
            <a key={n.label} href={n.href} className="nav-link opacity-90 hover:opacity-100">
              {n.label} 
            </a>
          ))}
        </nav>

        <Link
          href="/contact"
          className={`hidden lg:inline-flex items-center gap-2 border px-5 py-2.5 text-[12px] tracking-[0.18em] uppercase font-medium transition-colors ${
            solid
              ? "border-navy/25 hover:bg-navy hover:text-white"
              : "border-white/70 hover:bg-white hover:text-navy"
          }`}
        >
          Get in touch <ChevronRight className="h-3.5 w-3.5" />
        </Link>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-navy text-white px-6 py-6 space-y-4">
          {navItems.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="block text-sm tracking-[0.14em] uppercase"
              onClick={() => setOpen(false)}
            >
              {n.label}
            </a>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-white/70 px-5 py-2.5 text-xs tracking-[0.18em] uppercase"
            onClick={() => setOpen(false)}
          >
            Get in touch <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}
    </header>
  );
}
