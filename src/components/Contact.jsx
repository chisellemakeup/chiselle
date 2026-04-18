import { useState } from "react";
import { srcAssetUrl } from "../config/assets";
import FadeUpInView from "./common/FadeUpInView";

const bgTexture = srcAssetUrl("bg-texture-2.svg");
const contactImg1 = srcAssetUrl("home/home-contact-img1.png");
const contactImg2 = srcAssetUrl("home/home-contact-img2.png");

const FIELDS = [
  { id: "name", label: "Your name", type: "text" },
  { id: "email", label: "Your email", type: "email" },
  { id: "service", label: "The service you are looking for", type: "text" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.id]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
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

          {sent ? (
            <p className="text-sm leading-relaxed text-brand-dark font-primary">
              Thank you for your message. We&apos;ll get back to you shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
                    className="pb-2 w-full text-sm bg-transparent text-brand-dark focus:outline-none font-primary"
                  />
                </div>
              ))}

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
                  className="pb-2 w-full text-sm bg-transparent resize-none text-brand-dark focus:outline-none font-primary"
                />
              </div>

              <FadeUpInView as="div" variant="button" delay={0.18}>
                <button type="submit" className="inline-block btn-primary">
                  SEND A REQUEST
                </button>
              </FadeUpInView>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
