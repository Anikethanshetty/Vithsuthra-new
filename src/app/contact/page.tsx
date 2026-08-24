"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  type LucideIcon,
} from "lucide-react";
import Footer from "@/components/site/Footer";
import Logo from "@/components/site/Logo";

type FormState = { name: string; email: string; phone: string; message: string };
type Status = { loading: boolean; ok: boolean; error: string };

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<Status>({ loading: false, ok: false, error: "" });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message || !emailValid) {
      setStatus({ loading: false, ok: false, error: "Please fill all fields with a valid email." });
      return;
    }
    setStatus({ loading: true, ok: false, error: "" });
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.detail || "Something went wrong. Please try again.");
      }
      setStatus({ loading: false, ok: true, error: "" });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Submission failed.";
      setStatus({ loading: false, ok: false, error: msg });
    }
  };

  return (
    <div className="min-h-screen bg-white text-navy flex flex-col">
      <div className="bg-navy text-white px-6 md:px-10 lg:px-14 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo />
          <span className="text-lg font-medium tracking-wide">Vithsutra</span>
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase hover:text-brand-light transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
      </div>

      <section className="px-6 md:px-10 lg:px-14 py-20 md:py-24 border-b border-slate-100">
        <div className="max-w-3xl">
          <div className="text-[11px] tracking-[0.28em] uppercase text-brand mb-4">
            Get in touch
          </div>
          <h1 className="serif-display text-4xl md:text-6xl leading-[1.05] mb-6">
            Let&apos;s build something remarkable.
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Tell us about your project or idea. Our team will review your inquiry and get back to
            you within one business day.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-14 py-16 grid grid-cols-1 lg:grid-cols-3 gap-14 flex-1">
        <div className="lg:col-span-2">
          {status.ok ? (
            <div className="border border-brand/25 bg-brand/5 p-8 flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-brand mt-0.5" />
              <div>
                <div className="text-lg font-medium mb-1">
                  Thank you — your inquiry has been received.
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  A member of our team will reach out to you shortly.
                </p>
                <button
                  onClick={() => setStatus({ loading: false, ok: false, error: "" })}
                  className="text-[12px] tracking-[0.22em] uppercase font-medium text-brand link-underline inline-flex items-center gap-2"
                >
                  Send another <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-8" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Field
                  label="Name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your full name"
                />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@company.com"
                />
                <Field
                  label="Phone"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-[11px] tracking-[0.24em] uppercase text-slate-500 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={6}
                  placeholder="Tell us about your project, timelines and requirements…"
                  className="w-full border-b border-slate-300 focus:border-brand outline-none bg-transparent py-3 text-base placeholder:text-slate-400 transition-colors resize-none"
                />
              </div>

              {status.error && <div className="text-sm text-red-600">{status.error}</div>}

              <button
                type="submit"
                disabled={status.loading}
                className="inline-flex items-center gap-2 bg-brand hover:bg-brand-hover disabled:opacity-60 transition-colors text-white px-8 py-4 text-[12px] tracking-[0.22em] uppercase font-medium"
              >
                {status.loading ? "Sending…" : "Send inquiry"} <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>

        <aside className="lg:pl-6">
          <div className="text-[11px] tracking-[0.24em] uppercase text-slate-500 mb-6">
            Reach us at
          </div>
          <div className="space-y-8">
            <InfoRow icon={Mail} label="Email" value="hello@vithsutra.com" />
            <InfoRow icon={Phone} label="Phone" value="+91 80 4567 8900" />
            <InfoRow icon={MapPin} label="Studio" value="R&D Lab, HSR Layout, Bengaluru, India" />
          </div>

          <div className="mt-12 border-t border-slate-200 pt-8">
            <div className="text-[11px] tracking-[0.24em] uppercase text-slate-500 mb-3">
              Working hours
            </div>
            <div className="text-sm text-slate-600 leading-relaxed">
              Monday – Friday
              <br />
              9:30 AM – 6:30 PM IST
            </div>
          </div>
        </aside>
      </section>

      <Footer />
    </div>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-[11px] tracking-[0.24em] uppercase text-slate-500 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border-b border-slate-300 focus:border-brand outline-none bg-transparent py-3 text-base placeholder:text-slate-400 transition-colors"
      />
    </div>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="h-10 w-10 rounded-full border border-brand/30 flex items-center justify-center text-brand shrink-0">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-[11px] tracking-[0.22em] uppercase text-slate-500 mb-1">{label}</div>
        <div className="text-base text-navy">{value}</div>
      </div>
    </div>
  );
}
