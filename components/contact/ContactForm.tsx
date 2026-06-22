"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/translations";

export default function ContactForm() {
  const router = useRouter();
  const { lang } = useLanguage();
  const tx = t[lang].form;
  const [form, setForm] = useState({ name: "", email: "", phone: "", projectType: "", location: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

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
    if (res.ok) { router.push("/thank-you"); return; }
    else setStatus("error");
  };

  const inputStyle = {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    color: "var(--fg)",
  };

  const labelClass = "block text-xs text-fg-faint tracking-widest uppercase mb-2";
  const inputClass = "w-full px-4 py-3 text-sm focus:outline-none transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClass}>{tx.nameLabel}</label>
          <input id="name" name="name" type="text" required autoComplete="name" value={form.name} onChange={handleChange}
            className={inputClass} style={inputStyle} placeholder="Juan dela Cruz"
            onFocus={(e) => (e.target.style.borderColor = "#FF3B30")}
            onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>{tx.emailLabel}</label>
          <input id="email" name="email" type="email" required autoComplete="email" value={form.email} onChange={handleChange}
            className={inputClass} style={inputStyle} placeholder="juan@email.com"
            onFocus={(e) => (e.target.style.borderColor = "#FF3B30")}
            onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className={labelClass}>{tx.phoneLabel}</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={handleChange}
            className={inputClass} style={inputStyle} placeholder="09XX XXX XXXX"
            onFocus={(e) => (e.target.style.borderColor = "#FF3B30")}
            onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
          />
        </div>
        <div>
          <label htmlFor="projectType" className={labelClass}>{tx.typeLabel}</label>
          <select id="projectType" name="projectType" required value={form.projectType} onChange={handleChange}
            className={`${inputClass} appearance-none`} style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#FF3B30")}
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
          onFocus={(e) => (e.target.style.borderColor = "#FF3B30")}
          onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>{tx.messageLabel}</label>
        <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange}
          className={`${inputClass} resize-none`} style={inputStyle}
          placeholder={tx.messagePlaceholder}
          onFocus={(e) => (e.target.style.borderColor = "#FF3B30")}
          onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
        />
      </div>

      <p className="text-fg-dim text-xs text-center">
        We typically respond within 24 business hours.
      </p>

      <button
        type="submit" disabled={status === "sending"}
        className="w-full py-4 bg-[#FF3B30] text-white text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#E0352B] transition-colors duration-200 disabled:opacity-60"
      >
        {status === "sending" ? tx.sending : tx.submit}
      </button>

      {status === "error" && (
        <p className="text-[#FF3B30] text-sm text-center">
          {tx.errorMsg}
        </p>
      )}
      <p className="text-fg-faint text-xs text-center">
        {tx.note}
      </p>
    </form>
  );
}
