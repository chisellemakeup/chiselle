import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICES = [
  "Bridal Makeup",
  "Reception / Cocktail Bridal",
  "Christian Bridal",
  "Engagement / Pre-wedding",
  "Party / Event Makeup",
  "Bridal Lessons & Academy",
  "Other",
];
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const RATE_LIMIT_MS = 60 * 1000;
const MIN_FILL_MS = 2500;
const LAST_SUBMIT_KEY = "contact_page_form_last_submit_at";

function isPlaceholder(value = "") {
  return value.includes("xxxxxxx") || value.includes("xxxxxxxxxxxxxxx");
}

export default function ContactPageSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [formStartedAt] = useState(() => Date.now());

  function validate(values) {
    const nextErrors = {};

    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!EMAIL_REGEX.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.service.trim()) nextErrors.service = "Please select a service.";
    if (!values.message.trim()) nextErrors.message = "Please enter your message.";

    return nextErrors;
  }

  function handleChange(e) {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => {
      if (!prev[id]) return prev;
      const next = { ...prev };
      delete next[id];
      return next;
    });
    setSubmitError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (form.website.trim()) {
      setSent(true);
      return;
    }

    const trimmedForm = {
      name: form.name.trim(),
      email: form.email.trim(),
      service: form.service.trim(),
      message: form.message.trim(),
    };
    const formattedMessage = [
      `Name: ${trimmedForm.name}`,
      `Email: ${trimmedForm.email}`,
      `The service you are looking for: \n${trimmedForm.service}`,
      "",
      "Message:",
      trimmedForm.message,
    ].join("\n");

    const nextErrors = validate(trimmedForm);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    if (
      !EMAILJS_SERVICE_ID ||
      !EMAILJS_TEMPLATE_ID ||
      !EMAILJS_PUBLIC_KEY ||
      isPlaceholder(EMAILJS_SERVICE_ID) ||
      isPlaceholder(EMAILJS_TEMPLATE_ID) ||
      isPlaceholder(EMAILJS_PUBLIC_KEY)
    ) {
      setSubmitError(
        "Email service is not configured correctly. Please set valid EmailJS service, template, and public key values."
      );
      return;
    }

    if (Date.now() - formStartedAt < MIN_FILL_MS) {
      setSubmitError("Please wait a moment before sending your request.");
      return;
    }

    const lastSubmitAt = Number(localStorage.getItem(LAST_SUBMIT_KEY) || 0);
    const msUntilAllowed = RATE_LIMIT_MS - (Date.now() - lastSubmitAt);
    if (msUntilAllowed > 0) {
      const waitSeconds = Math.ceil(msUntilAllowed / 1000);
      setSubmitError(`Please wait ${waitSeconds}s before sending another request.`);
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitError("");

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: trimmedForm.name,
          email: trimmedForm.email,
          service: trimmedForm.service,
          from_name: trimmedForm.name,
          from_email: trimmedForm.email,
          the_service_you_are_looking_for: trimmedForm.service,
          message: formattedMessage,
          raw_message: trimmedForm.message,
          reply_to: trimmedForm.email,
          submitted_at: new Date().toLocaleString(),
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setSent(true);
      localStorage.setItem(LAST_SUBMIT_KEY, String(Date.now()));
      setForm({
        name: "",
        email: "",
        service: "",
        message: "",
        website: "",
      });
      setErrors({});
    } catch (error) {
      setSubmitError(
        error?.text ||
          error?.message ||
          "Unable to send your request right now."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-16 bg-white lg:py-24">
      <div className="container grid gap-12 px-4 mx-auto lg:grid-cols-2 lg:px-16">
        {/* Left: booking details */}
        <div>
          <h2 className="mb-10 font-secondary text-[26px] md:text-[32px] lg:text-[36px] leading-tight tracking-[0.08em] text-brand-primary uppercase">
            For bookings
          </h2>

          <div className="space-y-6 text-sm font-primary text-brand-secondary">
            <div>
              <p className="mb-1 text-base uppercase text-brand-primary">
                Email
              </p>
              <p className="text-base text-brand-secondary">
                <a href="mailto:hello@chisellemakeupandhair.com">
                  hello@chisellemakeupandhair.com
                </a>
              </p>
            </div>

            <div>
              <p className="mb-1 text-base uppercase text-brand-primary">
                Phone number
              </p>
              <p className="text-base text-brand-secondary">
                <a href="tel:+917708076661">+91 7708076661</a>
              </p>
            </div>

            <div>
              <p className="mb-1 text-base uppercase text-brand-primary">
                Office location
              </p>
              <p className="text-base text-brand-secondary">
                Gopalapuram, Chennai
                <br />
                Tamil Nadu 600086
              </p>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div>
          <form className="space-y-8" onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              id="website"
              value={form.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <div className="border-b border-[#00020133] pb-3">
              <label
                htmlFor="name"
                className="block mb-2 text-sm tracking-[0.02em] text-brand-secondary font-primary"
              >
                Your name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                className="w-full text-sm bg-transparent text-brand-dark focus:outline-none font-primary"
              />
              {errors.name ? (
                <p className="pt-2 text-xs text-red-600 font-primary">{errors.name}</p>
              ) : null}
            </div>

            <div className="border-b border-[#00020133] pb-3">
              <label
                htmlFor="email"
                className="block mb-2 text-sm tracking-[0.02em] text-brand-secondary font-primary"
              >
                Your email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                className="w-full text-sm bg-transparent text-brand-dark focus:outline-none font-primary"
              />
              {errors.email ? (
                <p className="pt-2 text-xs text-red-600 font-primary">{errors.email}</p>
              ) : null}
            </div>

            <div className="border-b border-[#00020133] pb-3">
              <label
                htmlFor="service"
                className="block mb-2 text-sm tracking-[0.02em] text-brand-secondary font-primary"
              >
                The service you’re looking for
              </label>
              <select
                id="service"
                className="w-full text-sm bg-transparent text-brand-dark focus:outline-none font-primary"
                value={form.service}
                onChange={handleChange}
                aria-invalid={Boolean(errors.service)}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {SERVICES.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service ? (
                <p className="pt-2 text-xs text-red-600 font-primary">{errors.service}</p>
              ) : null}
            </div>

            <div className="border-b border-[#00020133] pb-3">
              <label
                htmlFor="message"
                className="block mb-2 text-sm tracking-[0.02em] text-brand-secondary font-primary"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={3}
                value={form.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                className="w-full text-sm bg-transparent resize-none text-brand-dark focus:outline-none font-primary"
              />
              {errors.message ? (
                <p className="pt-2 text-xs text-red-600 font-primary">{errors.message}</p>
              ) : null}
            </div>

            {submitError ? (
              <p className="text-sm text-red-600 font-primary">{submitError}</p>
            ) : null}
            {sent ? (
              <p className="text-sm leading-relaxed text-green-700 font-primary">
                Thank you for your message. We&apos;ll get back to you shortly.
              </p>
            ) : null}

            <button type="submit" className="btn-primary" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send a Request"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
