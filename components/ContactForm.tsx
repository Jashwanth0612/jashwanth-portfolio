"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto text-left flex flex-col gap-4 mb-14"
    >
      <input
        required
        type="text"
        placeholder="Your name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="bg-transparent border border-bronze/60 focus:border-bronzelight outline-none px-4 py-3 text-parchment placeholder:text-stone/70 font-body"
      />
      <input
        required
        type="email"
        placeholder="Your email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="bg-transparent border border-bronze/60 focus:border-bronzelight outline-none px-4 py-3 text-parchment placeholder:text-stone/70 font-body"
      />
      <textarea
        required
        placeholder="What would you like to build or discuss?"
        rows={4}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="bg-transparent border border-bronze/60 focus:border-bronzelight outline-none px-4 py-3 text-parchment placeholder:text-stone/70 font-body resize-none"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="font-label tracking-[0.14em] uppercase text-sm border border-bronze text-bronzelight px-6 py-3 hover:bg-bronze hover:text-ink transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
      {status === "sent" && (
        <p className="text-verdigris text-sm font-label tracking-wide">
          Message received — I'll reply soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-oxblood text-sm font-label tracking-wide">
          Something went wrong — please try the email link below instead.
        </p>
      )}
    </form>
  );
}
