"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { SITE } from "@/lib/data";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", contact: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Zpráva z webu — ${form.name}`);
    const body = encodeURIComponent(
      `Jméno: ${form.name}\nKontakt: ${form.contact}\n\nZpráva:\n${form.message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="w-14 h-14 rounded-full bg-[#f0fdf4] flex items-center justify-center mb-4">
          <Send size={24} className="text-[#047857]" aria-hidden="true" />
        </div>
        <h3 className="text-lg font-bold text-[#111827] mb-2">
          Otvírá se váš e-mailový klient
        </h3>
        <p className="text-[#6b7280] text-sm">
          Nebo nás zavolejte přímo:{" "}
          <a
            href={`tel:${SITE.phonePlain}`}
            className="text-[#047857] font-semibold"
          >
            {SITE.phone}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-[#374151] mb-1.5"
        >
          Vaše jméno
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e5e7eb] bg-white px-4 py-2.5 text-[#111827] text-sm placeholder-[#9ca3af] focus:border-[#047857] focus:outline-none focus:ring-2 focus:ring-[#047857]/20 transition-colors"
          placeholder="Jan Novák"
        />
      </div>
      <div>
        <label
          htmlFor="contact"
          className="block text-sm font-medium text-[#374151] mb-1.5"
        >
          Telefon nebo e-mail
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          required
          value={form.contact}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e5e7eb] bg-white px-4 py-2.5 text-[#111827] text-sm placeholder-[#9ca3af] focus:border-[#047857] focus:outline-none focus:ring-2 focus:ring-[#047857]/20 transition-colors"
          placeholder="+420 000 000 000"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-[#374151] mb-1.5"
        >
          Zpráva{" "}
          <span className="text-[#9ca3af] font-normal">(volitelné)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full rounded-md border border-[#e5e7eb] bg-white px-4 py-2.5 text-[#111827] text-sm placeholder-[#9ca3af] focus:border-[#047857] focus:outline-none focus:ring-2 focus:ring-[#047857]/20 transition-colors resize-none"
          placeholder="Chci se zapsat do kurzu skupiny B. Kdy je nejbližší termín?"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 bg-[#047857] text-white text-sm font-semibold px-6 py-3 rounded-md hover:bg-[#065f46] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#047857] focus-visible:ring-offset-2"
      >
        <Send size={15} aria-hidden="true" />
        Odeslat zprávu
      </button>
    </form>
  );
}
