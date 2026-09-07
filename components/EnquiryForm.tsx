"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

const INTENTS = [
  { value: "quote", label: "Request a quote" },
  { value: "sample", label: "Request a sample" },
  { value: "distributor", label: "Become a distributor" },
  { value: "general", label: "General enquiry" },
];

const BUSINESS_TYPES = ["Distributor", "Manufacturer", "Other business", "Not sure yet"];

export default function EnquiryForm({ defaultIntent = "general" }: { defaultIntent?: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [businessType, setBusinessType] = useState(BUSINESS_TYPES[0]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start gap-4 border-t-4 border-gold bg-white p-8 shadow-xl shadow-ink/5">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest/10 text-forest">
          <CheckCircle2 size={26} strokeWidth={1.75} aria-hidden="true" />
        </span>
        <div>
          <h3 className="font-display text-xl font-bold text-ink">Enquiry received</h3>
          <p className="mt-2 text-sm leading-relaxed text-stone">
            Thank you. A member of the Sefora commercial team will get back to you, usually
            within one business day. If your request is urgent, call{" "}
            <a href="tel:+254700000000" className="font-semibold text-forest underline">
              +254 700 000 000
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="intent" className="block text-sm font-medium text-ink">
          What can we help with?
        </label>
        <select
          id="intent"
          name="intent"
          defaultValue={defaultIntent}
          className="mt-1.5 w-full border border-line bg-white px-3.5 py-2.5 text-sm text-ink transition-shadow focus:border-forest focus:outline-none focus:ring-2 focus:ring-gold/40"
        >
          {INTENTS.map((i) => (
            <option key={i.value} value={i.value}>
              {i.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required autoComplete="name" />
        <Field label="Company name" name="company" autoComplete="organization" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email address" name="email" type="email" required autoComplete="email" />
        <Field label="Phone number" name="phone" type="tel" autoComplete="tel" />
      </div>

      <div>
        <span className="block text-sm font-medium text-ink">Business type</span>
        <input type="hidden" name="businessType" value={businessType} />
        <div className="mt-2.5 flex flex-wrap gap-2">
          {BUSINESS_TYPES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setBusinessType(t)}
              aria-pressed={businessType === t}
              className={`px-3.5 py-1.5 text-sm font-medium transition-all duration-150 ${
                businessType === t
                  ? "bg-gold text-ink shadow-md shadow-gold/30"
                  : "border border-line bg-white text-ink hover:border-gold-dark"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <Field label="Location / county" name="location" placeholder="e.g. Kisumu, Kakamega" />

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Tell us what you need
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Product, estimated volumes, timeline, and anything else useful."
          className="mt-1.5 w-full border border-line bg-white px-3.5 py-2.5 text-sm text-ink transition-shadow focus:border-forest focus:outline-none focus:ring-2 focus:ring-gold/40"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center bg-forest px-6 py-3.5 text-[15px] font-semibold text-white transition-all duration-150 hover:-translate-y-0.5 hover:bg-forest-dark hover:shadow-lg hover:shadow-forest/30 disabled:translate-y-0 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-700">
          Something went wrong sending this. Please try again, or email{" "}
          <a href="mailto:trade@sefora.co.ke" className="underline">
            trade@sefora.co.ke
          </a>
          .
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="mt-1.5 w-full border border-line bg-white px-3.5 py-2.5 text-sm text-ink transition-shadow focus:border-forest focus:outline-none focus:ring-2 focus:ring-gold/40"
      />
    </div>
  );
}
