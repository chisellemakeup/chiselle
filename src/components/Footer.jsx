import { publicAssetUrl, srcAssetUrl } from "../config/assets";

const footerLogo = srcAssetUrl("footer-logo.png");

const PRIMARY_LINKS = [
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "PRICING", href: "/services" },
  { label: "GALLERY", href: "/gallery" },
  { label: "ACADEMY", href: "/academy" },
  { label: "FAQS", href: "/faqs" },
  { label: "BLOG", href: "/blogs" },
  { label: "CONTACT", href: "/contact" },
];

const SECONDARY_LINKS = [
  { label: "HD/AIR BRUSH MAKEUP", href: "/services#hd-air-brush-makeup" },
  { label: "CHRISTIAN WEDDINGS", href: "/services#christian-weddings" },
  { label: "OUTSTATION WEDDINGS", href: "/services#outstation-weddings" },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: publicAssetUrl("Instagram.svg"),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: publicAssetUrl("Facebook.svg"),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: publicAssetUrl("YouTube.svg"),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: publicAssetUrl("LinkedIn.svg"),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me",
    icon: publicAssetUrl("WhatsApp.svg"),
  },
];

export default function Footer() {
  return (
    <footer className="py-10 md:py-14 bg-brand-primary">
      <div className="container text-center">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img
            src={footerLogo}
            alt="Chiselle Makeup & Hair"
            className="w-[300px] h-auto"
          />
        </div>

        {/* Primary nav row */}
        <nav className="flex flex-wrap gap-y-6 gap-x-10 justify-center mb-10 lg:gap-x-20">
          {PRIMARY_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base tracking-[0.7px] text-white uppercase font-primary hover:text-brand-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Secondary nav row */}
        <nav className="flex flex-wrap gap-y-6 gap-x-10 justify-center mb-14">
          {SECONDARY_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base tracking-[0.7px] text-white uppercase font-primary hover:text-brand-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex gap-8 justify-center items-center mb-14 lg:gap-9">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center w-auto h-auto rounded-full text-brand-primary"
            >
              <span className="sr-only">{s.label}</span>
              <img
                src={s.icon}
                alt=""
                aria-hidden="true"
                className="object-contain w-auto h-auto"
              />
            </a>
          ))}
        </div>

        {/* Bottom text */}
        <div className="flex flex-col gap-6 justify-center items-center md:flex-row md:gap-10">
          <p className="text-sm text-white font-primary sm:text-center">
            ©{new Date().getFullYear()} chiselle makeup and hair
          </p>
          <span className="hidden mx-2">·</span>
          <p className="text-sm text-white font-primary sm:text-center">
            Onceadev made an another one
          </p>
        </div>
      </div>
    </footer>
  );
}
