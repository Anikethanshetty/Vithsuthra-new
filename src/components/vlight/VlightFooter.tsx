"use client";

import { ArrowUpRight, Mail, Phone, Globe } from "lucide-react";
import {
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/site/social-icons";

const columns = [
  { h: "Products", l: ["Domestic Segment", "Decorative Segment", "Outdoor Segment"] },
  { h: "Company", l: ["Overview", "Manufacturing", "Careers", "Contact"] },
  { h: "Support", l: ["Warranty", "Enquire Now", "Vithsutra Technologies"] },
];

const socials = [LinkedinIcon, TwitterIcon, YoutubeIcon, InstagramIcon];

export default function VlightFooter() {
  return (
    <footer id="contact" className="bg-[#1a1a1a] text-white px-6 md:px-10 lg:px-14 pt-20 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start pb-14 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2.5 mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/vlight-logo.png" alt="vlight" className="h-8 w-auto" />
          </div>
          <p className="text-white/70 max-w-sm text-sm leading-relaxed mb-8">
            vlight is Vithsutra&apos;s dedicated lighting brand — reliable, energy-efficient
            luminaires engineered for homes, businesses, and public infrastructure across every
            sector.
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3 text-white/85">
              <Phone className="h-4 w-4 text-[#E51826]" /> +91 8277479799
            </div>
            <div className="flex items-center gap-3 text-white/85">
              <Mail className="h-4 w-4 text-[#E51826]" /> info@vithsutra.com
            </div>
            <div className="flex items-center gap-3 text-white/85">
              <Globe className="h-4 w-4 text-[#E51826]" /> www.vithsutra.com
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
          {columns.map((c) => (
            <div key={c.h}>
              <div className="text-[11px] tracking-[0.24em] uppercase text-white/60 mb-4">
                {c.h}
              </div>
              <ul className="space-y-2.5">
                {c.l.map((x) => (
                  <li key={x}>
                    <a href="#" className="text-white/85 hover:text-[#E51826] transition-colors">
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <div className="text-[11px] tracking-[0.24em] uppercase text-white/60 mb-4">
            Stay in the loop
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed!");
            }}
            className="flex items-center border border-white/20 focus-within:border-white/60 transition-colors"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-white/50"
            />
            <button
              type="submit"
              className="px-4 py-3 bg-[#E51826] hover:bg-[#c91320] transition-colors"
              aria-label="Subscribe"
            >
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>
          <div className="flex items-center gap-4 mt-6 text-white/70">
            {socials.map((Ic, idx) => (
              <a
                key={idx}
                href="#"
                className="h-9 w-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white hover:text-white transition-colors"
              >
                <Ic className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div className="flex flex-wrap items-center gap-8">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/alvas-icon.png" alt="Alva's Education Foundation" className="h-10 w-auto" />
            <div className="text-xs">
              <div className="text-white/50">Powered By</div>
              <div className="text-white/90 font-medium">Alva&apos;s Education Foundation®</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/vithsutra-cloud-icon.png"
              alt="Vithsutra Technologies"
              className="h-8 w-auto"
            />
            <div className="text-xs">
              <div className="text-white/50">Manufactured &amp; Marketed By</div>
              <div className="text-white/90 font-medium">Vithsutra Technologies Private Limited</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-[12px] text-white/60">
        <div>&copy; {new Date().getFullYear()} vlight — a Vithsutra Technologies brand. All rights reserved.</div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white">
            Privacy
          </a>
          <a href="#" className="hover:text-white">
            Terms
          </a>
          <a href="#" className="hover:text-white">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}
