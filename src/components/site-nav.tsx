import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MapPin } from "lucide-react";
import logoImg from "@/assets/logo.jpg";

export const navLinks = [
  { href: "/#services", label: "Leistungen" },
  { href: "/#gallery", label: "Galerie" },
  { href: "/#about", label: "Über mich" },
  { to: "/preise", label: "Preise" },
  { href: "/#booking", label: "Termin" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  const renderLink = (
    l: (typeof navLinks)[number],
    onClick?: () => void,
    className?: string,
  ) => {
    const cls =
      className ??
      "text-[11px] uppercase font-light text-text hover:text-magenta";
    const style = { letterSpacing: "0.18em" };
    if ("to" in l) {
      return (
        <Link to={l.to} onClick={onClick} className={cls} style={style}>
          {l.label}
        </Link>
      );
    }
    return (
      <a href={l.href} onClick={onClick} className={cls} style={style}>
        {l.label}
      </a>
    );
  };

  return (
    <header
      className="sticky top-0 z-50 bg-white"
      style={{
        borderBottom: "0.5px solid var(--rose-light)",
        boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-12 h-16 md:h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="Beauty RooM Logo"
            width={168}
            height={84}
            className="h-[52px] md:h-[84px] w-auto object-contain"
          />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-10">
            {navLinks.map((l) => (
              <li key={l.label}>{renderLink(l)}</li>
            ))}
          </ul>
        </nav>
        <button
          aria-label="Menü öffnen"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-text hover:text-magenta"
        >
          {open ? <X size={22} strokeWidth={1.25} /> : <Menu size={22} strokeWidth={1.25} />}
        </button>
      </div>
      {open && (
        <div
          className="md:hidden bg-white"
          style={{ borderTop: "0.5px solid var(--rose-light)" }}
        >
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((l) => (
              <li key={l.label}>
                {renderLink(
                  l,
                  () => setOpen(false),
                  "block text-[11px] uppercase font-light text-text hover:text-magenta py-2",
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#4a2f2f" }} className="py-14 md:py-20 text-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-12 grid md:grid-cols-3 gap-10 md:gap-12">
        <div>
          <p className="font-display italic text-2xl md:text-3xl" style={{ color: "var(--rose-light)" }}>
            Beauty RooM
          </p>
          <p className="mt-3 md:mt-4 text-sm font-light text-mauve">
            Nagelstudio by Mateja
          </p>
        </div>
        <div>
          <p
            className="text-[10px] uppercase font-light mb-4 text-mauve"
            style={{ letterSpacing: "0.28em" }}
          >
            Studio
          </p>
          <p className="flex items-start gap-2 text-sm font-light text-cream/90">
            <MapPin size={14} strokeWidth={1} className="mt-1 text-rose-light" />
            <span>
              Stadtplatz 31<br />
              4400 Steyr, Österreich
            </span>
          </p>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.1!2d14.4197!3d48.0433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sStadtplatz+31%2C+4400+Steyr!5e0!3m2!1sde!2sat!4v1"
            width="100%"
            height="160"
            style={{ border: "0.5px solid #c9a0a0", filter: "grayscale(30%) sepia(20%)" }}
            allowFullScreen
            loading="lazy"
            title="Beauty RooM Location"
          />
        </div>
      </div>
      <div
        className="mx-auto max-w-7xl px-6 md:px-12 mt-16 pt-8 flex flex-col md:flex-row justify-between gap-4"
        style={{ borderTop: "0.5px solid rgba(201,160,160,0.2)" }}
      >
        <p
          className="text-[10px] uppercase font-light text-mauve"
          style={{ letterSpacing: "0.28em" }}
        >
          © {new Date().getFullYear()} Beauty RooM
        </p>
        <p
          className="text-[10px] uppercase font-light text-mauve"
          style={{ letterSpacing: "0.28em" }}
        >
          Made with care · Steyr
        </p>
      </div>
    </footer>
  );
}
