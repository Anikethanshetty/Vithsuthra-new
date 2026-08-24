"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Menu, X } from "lucide-react";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Product Range", href: "#products" },
  { label: "Manufacturing", href: "#manufacturing" },
  { label: "Contact", href: "#contact" },
];

export default function VlightHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5">
      <div className="px-6 md:px-10 lg:px-14 py-4 flex items-center justify-between">
        <a href="#overview" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/vlight-logo.png" alt="vlight" className="h-8 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-9 text-[13px] tracking-[0.14em] uppercase font-medium text-[#1a1a1a]">
          {navItems.map((n) => (
            <a key={n.label} href={n.href} className="vlight-nav-link opacity-80 hover:opacity-100">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase font-medium text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Vithsutra
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#E51826] hover:bg-[#c91320] transition-colors text-white px-5 py-2.5 text-[12px] tracking-[0.18em] uppercase font-medium"
          >
            Enquire Now
          </a>
        </div>

        <button
          className="lg:hidden text-[#1a1a1a]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#1a1a1a] text-white px-6 py-6 space-y-4">
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
            href="/"
            className="flex items-center gap-2 text-sm tracking-[0.14em] uppercase text-white/70"
            onClick={() => setOpen(false)}
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Vithsutra
          </Link>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#E51826] px-5 py-2.5 text-xs tracking-[0.18em] uppercase"
            onClick={() => setOpen(false)}
          >
            Enquire Now
          </a>
        </div>
      )}
    </header>
  );
}
