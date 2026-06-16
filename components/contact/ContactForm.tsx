"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export default function ContactForm() {
  const { lang } = useLanguage();
  const tx = t[lang].form;
  const [form, setForm] = useState({ name: "", email: "", phone: "", projectType: "", location: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const res = await fetch("https://formspree.io/f/mdavyzrw", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) setStatus("sent");
    else setStatus("error");
  };

  const inputStyle = {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    color: "var(--fg)",
  };

  const labelClass = "block text-xs text-fg-faint tracking-widest uppercase mb-2";
  const inputClass = "w-full px-4 py-3 text-sm focus:outline-none transition-colors";

  if (status === "sent") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(196,18,48,0.1)", border: "1px solid rgba(196,18,48,0.2)" }}>
          <svg className="w-8 h-8 text-[#c41230]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="display-heading text-fg mb-3" style={{ fontSize: "1.75rem" }}>
          {tx.successTitle.replace('{name}', form.name)}
        </h3>
        <p className="text-fg-dim text-sm">
          {tx.successDesc}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClass}>{tx.nameLabel}</label>
          <input id="name" name="name" type="text" required value={form.name} onChange={handleChange}
            className={inputClass} style={inputStyle} placeholder="Juan dela Cruz"
            onFocus={(e) => (e.target.style.borderColor = "#c41230")}
            onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>{tx.emailLabel}</label>
          <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
            className={inputClass} style={inputStyle} placeholder="juan@email.com"
            onFocus={(e) => (e.target.style.borderColor = "#c41230")}
            onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className={labelClass}>{tx.phoneLabel}</label>
          <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
            className={inputClass} style={inputStyle} placeholder="09XX XXX XXXX"
            onFocus={(e) => (e.target.style.borderColor = "#c41230")}
            onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
          />
        </div>
        <div>
          <label htmlFor="projectType" className={labelClass}>{tx.typeLabel}</label>
          <select id="projectType" name="projectType" required value={form.projectType} onChange={handleChange}
            className={`${inputClass} appearance-none`} style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#c41230")}
            onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
          >
            <option value="">{tx.typePlaceholder}</option>
            {tx.projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="location" className={labelClass}>{tx.locationLabel}</label>
        <input id="location" name="location" type="text" value={form.location} onChange={handleChange}
          className={inputClass} style={inputStyle} placeholder="City / Municipality / Province"
          onFocus={(e) => (e.target.style.borderColor = "#c41230")}
          onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>{tx.messageLabel}</label>
        <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange}
          className={`${inputClass} resize-none`} style={inputStyle}
          placeholder={tx.messagePlaceholder}
          onFocus={(e) => (e.target.style.borderColor = "#c41230")}
          onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
        />
      </div>

      <button
        type="submit" disabled={status === "sending"}
        className="w-full py-4 bg-[#c41230] text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#8b0000] transition-colors duration-200 disabled:opacity-60"
      >
        {status === "sending" ? tx.sending : tx.submit}
      </button>

      {status === "error" && (
        <p className="text-[#c41230] text-sm text-center">
          {tx.errorMsg}
        </p>
      )}
      <p className="text-fg-faint text-xs text-center">
        {tx.note}
      </p>
    </form>
  );
}
