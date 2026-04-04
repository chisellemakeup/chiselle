const SERVICES = [
  "Bridal Makeup",
  "Reception / Cocktail Bridal",
  "Christian Bridal",
  "Engagement / Pre-wedding",
  "Party / Event Makeup",
  "Bridal Lessons & Academy",
  "Other",
];

export default function ContactPageSection() {
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
                <a href="tel:+917308076661">+91 7308076661</a>
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
          <form className="space-y-8">
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
                className="w-full text-sm bg-transparent text-brand-dark focus:outline-none font-primary"
              />
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
                className="w-full text-sm bg-transparent text-brand-dark focus:outline-none font-primary"
              />
            </div>

            <div className="border-b border-[#00020133] pb-3">
              <label
                htmlFor="service"
                className="block mb-2 text-sm tracking-[0.02em] text-brand-secondary font-primary"
              >
                The service you looking for
              </label>
              <select
                id="service"
                className="w-full text-sm bg-transparent text-brand-dark focus:outline-none font-primary"
                defaultValue=""
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
                className="w-full text-sm bg-transparent resize-none text-brand-dark focus:outline-none font-primary"
              />
            </div>

            <button type="submit" className="btn-primary">
              Send a request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
