"use client";

import { ArrowUpRight } from "lucide-react";
import { InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "./social-icons";
import Logo from "./Logo";

const columns = [
  { h: "Company", l: ["About", "Careers", "Newsroom", "Contact"] },
  { h: "Products", l: ["AIOTA360", "Vithnet", "Robotics Kit", "Industrial IoT"] },
  { h: "Industries", l: ["Manufacturing", "Agriculture", "Healthcare", "Energy"] },
];

const socials = [LinkedinIcon, TwitterIcon, YoutubeIcon, InstagramIcon];

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy-dark text-white px-6 md:px-10 lg:px-14 pt-20 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start pb-14 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2.5 mb-6">
            <Logo />
            <span className="text-lg font-medium">Vithsutra</span>
          </div>
          <p className="text-white/70 max-w-sm text-sm leading-relaxed">
            Building the future of Industry 4.0 with IoT, robotics and automation. Precision
            engineered in India, deployed across the world.
          </p>
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
                    <a href="#" className="text-white/85 hover:text-brand-light transition-colors">
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
              className="px-4 py-3 bg-brand hover:bg-brand-hover transition-colors"
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

      <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-[12px] text-white/60">
        <div>&copy; {new Date().getFullYear()} Vithsutra Technologies. All rights reserved.</div>
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
