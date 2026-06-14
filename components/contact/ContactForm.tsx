"use client";

import { useState } from "react";

const projectTypes = [
  "Residential Design",
  "Commercial Design",
  "Interior Design",
  "Renovation",
  "Space Planning",
  "Building Permit",
  "3D Visualization",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    location: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
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

  if (status === "sent") {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-[#c41230]/10 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-[#c41230]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3
          className="text-stone-900 mb-3"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "1.75rem",
            fontWeight: 600,
          }}
        >
          Thank You, {form.name}!
        </h3>
        <p className="text-stone-500">
          We have received your message and will get back to you within 1–2
          business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-xs text-stone-500 tracking-widest uppercase mb-2"
          >
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border border-stone-200 px-4 py-3 text-stone-800 text-sm focus:outline-none focus:border-[#c41230] transition-colors bg-white"
            placeholder="Juan dela Cruz"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs text-stone-500 tracking-widest uppercase mb-2"
          >
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border border-stone-200 px-4 py-3 text-stone-800 text-sm focus:outline-none focus:border-[#c41230] transition-colors bg-white"
            placeholder="juan@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-xs text-stone-500 tracking-widest uppercase mb-2"
          >
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="w-full border border-stone-200 px-4 py-3 text-stone-800 text-sm focus:outline-none focus:border-[#c41230] transition-colors bg-white"
            placeholder="09XX XXX XXXX"
          />
        </div>
        <div>
          <label
            htmlFor="projectType"
            className="block text-xs text-stone-500 tracking-widest uppercase mb-2"
          >
            Project Type *
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            value={form.projectType}
            onChange={handleChange}
            className="w-full border border-stone-200 px-4 py-3 text-stone-800 text-sm focus:outline-none focus:border-[#c41230] transition-colors bg-white appearance-none"
          >
            <option value="">Select a service...</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="location"
          className="block text-xs text-stone-500 tracking-widest uppercase mb-2"
        >
          Project Location
        </label>
        <input
          id="location"
          name="location"
          type="text"
          value={form.location}
          onChange={handleChange}
          className="w-full border border-stone-200 px-4 py-3 text-stone-800 text-sm focus:outline-none focus:border-[#c41230] transition-colors bg-white"
          placeholder="City / Municipality / Province"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs text-stone-500 tracking-widest uppercase mb-2"
        >
          Project Description *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full border border-stone-200 px-4 py-3 text-stone-800 text-sm focus:outline-none focus:border-[#c41230] transition-colors bg-white resize-none"
          placeholder="Tell us about your project — type, size, budget range, timeline, and any specific requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-4 bg-[#c41230] text-white text-sm font-semibold tracking-widest uppercase hover:bg-[#8b0000] transition-colors duration-200 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "error" && (
        <p className="text-[#c41230] text-sm text-center">
          Something went wrong. Please try again or email us directly at fpadesignconsultancy@gmail.com.
        </p>
      )}
      <p className="text-stone-400 text-xs text-center">
        We respond to all inquiries within 1–2 business days.
      </p>
    </form>
  );
}
