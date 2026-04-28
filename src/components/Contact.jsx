import { useState } from "react";
import emailjs from "@emailjs/browser";
import { srcAssetUrl } from "../config/assets";
import FadeUpInView from "./common/FadeUpInView";

const bgTexture = srcAssetUrl("bg-texture-2.svg");
const contactImg1 = srcAssetUrl("home/home-contact-img1.png");
const contactImg2 = srcAssetUrl("home/home-contact-img2.png");
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const RATE_LIMIT_MS = 60 * 1000;
const MIN_FILL_MS = 2500;
const LAST_SUBMIT_KEY = "contact_form_last_submit_at";
const SERVICES = [
  "Bridal Makeup",
  "Reception / Cocktail Bridal",
  "Christian Bridal",
  "Engagement / Pre-wedding",
  "Party / Event Makeup",
  "Bridal Lessons & Academy",
  "Other",
];

const FIELDS = [
  { id: "name", label: "Your name", type: "text" },
  { id: "email", label: "Your email", type: "email" },
];

export default function Contact() {
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
    if (!values.service.trim()) nextErrors.service = "Please enter the service you need.";
    if (!values.message.trim()) nextErrors.message = "Please enter your message.";

    return nextErrors;
  }

  function handleChange(e) {
    const { id, value } = e.target;
    setForm((f) => ({ ...f, [id]: value }));
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

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setSubmitError("Email service is not configured. Please set EmailJS environment values.");
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
      setSubmitError(error.message || "Unable to send your request right now.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="overflow-hidden relative py-10 lg:py-32">
      <div className="relative container grid items-center gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        {/* Left: layered images */}
        <div className="flex relative justify-center">
          <div className="relative md:block w-full max-w-md">
            {/* Main image card */}
            <div className="overflow-hidden ">
              <img
                src={contactImg1}
                alt="Chiselle bride close-up"
                className="object-cover w-4/5 md:w-full h-full float-right"
              />
            </div>

            {/* Small overlapping image */}
            <div className=" absolute bottom-28 -left-0 md:-left-16 w-40 sm:block">
              <img
                src={contactImg2}
                alt="Chiselle bride"
                className="object-cover w-4/6 md:w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Right: heading + form */}
        <div className="md:mx-auto md:max-w-xl lg:mx-0">
          <FadeUpInView as="p" delay={0.02} className="mb-5 text-sm uppercase text-brand-secondary font-primary">
            Get in touch
          </FadeUpInView>
          <FadeUpInView as="h2" delay={0.1} className="mb-6 font-secondary text-[2.1rem] md:text-[2.4rem] lg:text-[42px] leading-snug tracking-[0.02em] text-brand-primary uppercase">
            LET ME TRANSFORM
            <br />
            YOUR LOOK
          </FadeUpInView>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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

              {FIELDS.map((field) => (
                <div key={field.id} className="border-b border-[#00020133]">
                  <label
                    htmlFor={field.id}
                    className="block mb-2 text-sm tracking-[0.02em] text-brand-secondary font-primary"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    value={form[field.id]}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors[field.id])}
                    className="pb-2 w-full text-sm bg-transparent text-brand-dark focus:outline-none font-primary"
                  />
                  {errors[field.id] ? (
                    <p className="pt-2 text-xs text-red-600 font-primary">{errors[field.id]}</p>
                  ) : null}
                </div>
              ))}

              <div className="border-b border-[#00020133]">
                <label
                  htmlFor="service"
                  className="block mb-2 text-sm tracking-[0.02em] text-brand-secondary font-primary"
                >
                  The service you are looking for
                </label>
                <select
                  id="service"
                  value={form.service}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.service)}
                  className="pb-2 w-full text-sm bg-transparent text-brand-dark focus:outline-none font-primary"
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

              <div className="border-b border-[#00020133]">
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
                  className="pb-2 w-full text-sm bg-transparent resize-none text-brand-dark focus:outline-none font-primary"
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

              <FadeUpInView as="div" variant="button" delay={0.18}>
                <button type="submit" className="inline-block btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? "SENDING..." : "SEND A REQUEST"}
                </button>
              </FadeUpInView>
          </form>
        </div>
      </div>
    </section>
  );
}
