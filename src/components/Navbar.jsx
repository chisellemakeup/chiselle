import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../data/content";
import { srcAssetUrl } from "../config/assets";

const logo = srcAssetUrl("logo.png");
const MenuArrow = srcAssetUrl("arrow-down-icon.svg");

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [hideTopRow, setHideTopRow] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setMobileServicesOpen(false);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Desktop underline is rendered via ::after (more reliable than border when the
  // navbar itself also has a bottom border).
  const baseLinkClass =
    "relative inline-flex items-center py-[15px] text-sm uppercase text-brand-secondary hover:text-brand-primary font-primary after:content-[''] after:absolute after:left-0 after:-bottom-[1px] after:h-[2px] after:w-full after:bg-brand-primary after:origin-left after:scale-x-0";
  const activeLinkClass = "!text-brand-primary after:scale-x-100";

  const normalizePath = (p) => {
    if (!p) return "/";
    const trimmed = p.replace(/\/+$/, "");
    return trimmed === "" ? "/" : trimmed;
  };
  const currentPath = normalizePath(location.pathname);
  const isRouteActive = (href) => {
    const route = normalizePath(href);
    if (route === "/") return currentPath === "/";
    return currentPath === route || currentPath.startsWith(`${route}/`);
  };

  useEffect(() => {
    if (!open) return;
    if (
      currentPath === "/makeup-by-nowshiba" ||
      currentPath === "/chiselle-crew"
    ) {
      setMobileServicesOpen(true);
    }
  }, [open, currentPath]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const isDesktop = window.innerWidth >= 768;
      if (!isDesktop) {
        setHideTopRow(false);
        lastScrollY = window.scrollY;
        return;
      }

      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;
      const movedEnough = Math.abs(currentScrollY - lastScrollY) > 4;

      if (!movedEnough) return;
      if (currentScrollY <= 8) {
        setHideTopRow(false);
      } else {
        setHideTopRow(isScrollingDown);
      }
      lastScrollY = currentScrollY;
    };

    const handleResize = () => {
      if (window.innerWidth < 768) setHideTopRow(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isHashActive = (href) => {
    if (!href || !href.startsWith("#")) return false;
    if (location.pathname !== "/") return false;
    if (href === "#home")
      return location.hash === "" || location.hash === "#home";
    return location.hash === href;
  };

  const hashHrefForAnyPage = (href) => {
    // Keep hash navigation working from inner pages by routing to "/#section"
    if (!href?.startsWith("#")) return href;
    return location.pathname === "/" ? href : `/${href}`;
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white">
      <div
        className={`container flex justify-between items-center py-4 transition-all duration-300 md:justify-center ${
          hideTopRow ? "md:max-h-0 md:py-0 md:opacity-0 md:overflow-hidden" : "md:max-h-24 md:opacity-100"
        }`}
      >
        <Link to="/" className="flex justify-center md:mx-auto">
          <img
            src={logo}
            alt="Chiselle Makeup & Hair"
            className="object-contain w-auto h-14 md:h-16"
          />
        </Link>

        {/* Mobile hamburger */}
        <button
          className="p-1 ml-4 md:hidden text-brand-primary"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Menu</span>
          <div className="w-6 flex flex-col gap-[5px]">
            <span
              className={`block h-px bg-current ${open ? "rotate-45 translate-y-[6px]" : ""}`}
            />
            <span
              className={`block h-px bg-current ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px bg-current ${open ? "-rotate-45 -translate-y-[6px]" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Desktop nav bar – reddish-brown strip, links in a row */}
      <nav className="hidden gap-8 justify-center items-center border-b md:flex border-[#2B04051A]">
        {NAV_LINKS.map(({ label, href, dropdown }) =>
          dropdown ? (
            <div
              key={label}
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={`${baseLinkClass} gap-2 ${currentPath === "/makeup-by-nowshiba" || currentPath === "/chiselle-crew" ? activeLinkClass : ""}`}
              >
                {label}{" "}
                <span className="text-[8px] opacity-80">
                  <img className="w-auto" src={MenuArrow} alt="Chiselle" />
                </span>
              </button>
              {servicesOpen && (
                <div className="relative">
                  <div className="absolute top-full -left-9 text-center min-w-[220px] flex flex-col height-[400px] rounded-md overflow-hidden">
                    <Link
                      to="/makeup-by-nowshiba"
                      className={`block px-3 pt-5 mt-2 text-sm uppercase bg-white rounded-t-md font-primary border-t border-x border-[#2B04051A] ${
                        currentPath === "/makeup-by-nowshiba"
                          ? "text-brand-primary"
                          : "text-brand-secondary"
                      } hover:text-brand-primary`}
                    >
                      Makeup By Nowshiba
                    </Link>
                    <Link
                      to="/chiselle-crew"
                      className={`block px-3 py-5 text-sm uppercase bg-white font-primary border-b border-x border-[#2B04051A] ${
                        currentPath === "/chiselle-crew"
                          ? "text-brand-primary"
                          : "text-brand-secondary"
                      } hover:text-brand-primary`}
                    >
                      Chiselle Crew
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ) : href?.startsWith("/") ? (
            <Link
              key={label}
              to={href}
              className={`${baseLinkClass} ${isRouteActive(href) ? activeLinkClass : ""}`}
            >
              {label}
            </Link>
          ) : (
            <a
              key={label}
              href={hashHrefForAnyPage(href)}
              className={`${baseLinkClass} ${isHashActive(href) ? activeLinkClass : ""}`}
            >
              {label}
            </a>
          ),
        )}
      </nav>

      {/* Mobile menu: full viewport (below fixed header z-50) */}
      <div
        className={`md:hidden fixed inset-0 z-40 flex min-h-screen w-full flex-col overflow-y-auto bg-brand-primary ${
          open
            ? "opacity-100 pointer-events-auto"
            : "invisible opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className="flex absolute right-5 top-8 z-10 justify-center items-center w-11 h-11 text-2xl leading-none rounded-full border border-white/30 text-brand-bg md:hidden"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          <span className="sr-only">Close menu</span>
          <span aria-hidden="true" className="block -mt-[6px]">
            ×
          </span>
        </button>
        <div className="flex flex-col gap-8 px-6 pt-24 pb-12 w-full min-h-screen">
          {NAV_LINKS.map(({ label, href, dropdown }) =>
            dropdown ? (
              <div key={label} className="flex flex-col gap-0 w-full max-w-md">
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="flex gap-2 items-center py-2 w-full uppercase text-md font-primary text-brand-bg"
                  aria-expanded={mobileServicesOpen}
                  aria-controls="mobile-services-submenu"
                >
                  <span>{label}</span>
                  <span
                    className={`text-[10px] ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  >
                    ▼
                  </span>
                </button>
                <div
                  id="mobile-services-submenu"
                  className={`flex w-full flex-col gap-4 overflow-hidden ${
                    mobileServicesOpen
                      ? "py-3 max-h-40 opacity-100"
                      : "py-0 max-h-0 opacity-0"
                  }`}
                >
                  <Link
                    to="/makeup-by-nowshiba"
                    onClick={() => setOpen(false)}
                    className={`text-sm uppercase font-primary [text-shadow:0_0_12px_rgba(255,255,255,0.45)] ${
                      currentPath === "/makeup-by-nowshiba"
                        ? "text-brand-light"
                        : "text-white"
                    } hover:text-brand-light`}
                  >
                    Makeup By Nowshiba
                  </Link>
                  <Link
                    to="/chiselle-crew"
                    onClick={() => setOpen(false)}
                    className={`text-sm uppercase font-primary [text-shadow:0_0_12px_rgba(255,255,255,0.45)] ${
                      currentPath === "/chiselle-crew"
                        ? "text-brand-light"
                        : "text-white"
                    } hover:text-brand-light`}
                  >
                    Chiselle Crew
                  </Link>
                </div>
              </div>
            ) : href?.startsWith("/") ? (
              <Link
                key={label}
                to={href}
                onClick={() => setOpen(false)}
                className={`text-md uppercase font-primary ${
                  isRouteActive(href) ? "text-brand-light" : "text-brand-bg"
                } hover:text-brand-primary`}
              >
                {label}
              </Link>
            ) : (
              <a
                key={label}
                href={hashHrefForAnyPage(href)}
                onClick={() => setOpen(false)}
                className={`text-sm uppercase font-primary ${
                  isHashActive(href) ? "text-brand-light" : "text-brand-bg"
                } hover:text-brand-primary`}
              >
                {label}
              </a>
            ),
          )}
        </div>
      </div>
    </header>
  );
}
