import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Sparkles, Hand, Brush, Leaf, Footprints, Wrench, Instagram, MapPin, Menu, X } from "lucide-react";
import heroImg from "@/assets/hero-header.png";
import aboutImg from "@/assets/about-mateja.jpg";
import g2 from "@/assets/gallery-1.jpg";
import g3 from "@/assets/gallery-2.jpg";
import g4 from "@/assets/gallery-3.jpg";
import g5 from "@/assets/gallery-4.jpg";
import g6 from "@/assets/gallery-5.jpg";
import g7 from "@/assets/hero-nails.jpg";

function DiamondDivider() {
  return (
    <div className="bg-white" style={{ paddingTop: "40px", paddingBottom: "40px" }}>
      <div className="diamond-divider mx-auto" style={{ maxWidth: "1200px" }}>
        <span aria-hidden />
      </div>
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nail Atelier – Nagelstudio by Sofia | Wien" },
      {
        name: "description",
        content:
          "Nail Atelier in Wien – Nagelstudio by Sofia. Maniküre, Nagelverlängerung, Nail Art und mehr in der Herrengasse 1.",
      },
      { property: "og:title", content: "Nail Atelier – Nagelstudio by Sofia" },
      {
        property: "og:description",
        content: "Luxuriöse Nagelpflege im Herzen von Wien.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Hand, name: "Maniküre", desc: "Klassische Maniküre für gepflegte Hände mit pflegendem Detail." },
  {
    icon: Sparkles,
    name: "Nagelverlängerung",
    desc: "Maßgeschneiderte Verlängerung in Ihrer perfekten Form und Länge.",
  },
  { icon: Brush, name: "Nail Art", desc: "Individuelle Designs – von dezent bis kunstvoll-elegant." },
  {
    icon: Leaf,
    name: "Naturnagelverstärkung",
    desc: "Sanfte Stärkung Ihrer eigenen Nägel für langfristige Schönheit.",
  },
  { icon: Footprints, name: "Russische Pediküre", desc: "Präzise, trockene Fußpflege auf höchstem Niveau." },
  { icon: Wrench, name: "Nagelprothetik", desc: "Ästhetische Rekonstruktion einzelner Nägel mit Fingerspitzengefühl." },
];

const navLinks = [
  { href: "#services", label: "Leistungen" },
  { href: "#gallery", label: "Galerie" },
  { href: "#about", label: "Über mich" },
  { to: "/preise", label: "Preise" },
  { href: "#booking", label: "Termin" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="sticky top-0 z-50 bg-white"
      style={{ borderBottom: "0.5px solid var(--rose-light)", boxShadow: "0 1px 8px rgba(0,0,0,0.04)" }}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-12 h-16 md:h-24 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span
            className="font-display italic text-text leading-none"
            style={{ fontSize: "clamp(24px, 3vw, 34px)", letterSpacing: "0.01em" }}
          >
            Nail Atelier
          </span>
        </a>
        <nav className="hidden md:block">
          <ul className="flex gap-10">
            {navLinks.map((l) => (
              <li key={l.label}>
                {"to" in l ? (
                  <Link
                    to={l.to}
                    className="text-[11px] uppercase font-light text-text hover:text-magenta"
                    style={{ letterSpacing: "0.18em" }}
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    href={l.href}
                    className="text-[11px] uppercase font-light text-text hover:text-magenta"
                    style={{ letterSpacing: "0.18em" }}
                  >
                    {l.label}
                  </a>
                )}
              </li>
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
        <div className="md:hidden bg-white" style={{ borderTop: "0.5px solid var(--rose-light)" }}>
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((l) => (
              <li key={l.label}>
                {"to" in l ? (
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block text-[11px] uppercase font-light text-text hover:text-magenta py-2"
                    style={{ letterSpacing: "0.18em" }}
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block text-[11px] uppercase font-light text-text hover:text-magenta py-2"
                    style={{ letterSpacing: "0.18em" }}
                  >
                    {l.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" style={{ backgroundColor: "#fdf6f0" }}>
      {/* decorative circles */}
      <div
        aria-hidden
        className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ border: "0.5px solid rgba(201, 160, 160, 0.07)" }}
      />
      <div
        aria-hidden
        className="absolute -top-10 left-40 w-[260px] h-[260px] rounded-full pointer-events-none"
        style={{ border: "0.5px solid rgba(201, 160, 160, 0.07)" }}
      />

      <div
        className="relative mx-auto grid md:grid-cols-[55%_45%] items-stretch min-h-[520px] md:min-h-[640px]"
        style={{ maxWidth: "1200px" }}
      >
        <div className="flex items-center px-6 md:pl-20 md:pr-8 py-14 md:py-28 fade-up text-center md:text-left">
          <div className="max-w-xl mx-auto md:mx-0">
            <p
              className="text-[10px] md:text-[11px] uppercase font-light text-mauve-dark mb-5 md:mb-8"
              style={{ letterSpacing: "0.28em" }}
            >
              Nagelstudio by Sofia · Wien
            </p>
            <h1
              className="font-display font-light text-text leading-[1.05]"
              style={{ fontSize: "clamp(2.2rem, 8vw, 4.6rem)" }}
            >
              Deine Nägel,
              <br />
              <em className="text-mauve-dark">dein Statement.</em>
            </h1>
            <p className="mt-6 md:mt-8 max-w-lg mx-auto md:mx-0 text-text-muted font-light leading-relaxed text-sm md:text-base">
              Im Herzen von Wien verwandeln wir Pflege in Poesie. Eleganz, Präzision und feminine Schönheit — für Hände,
              die Geschichten erzählen.
            </p>
            <div className="mt-8 md:mt-10 flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
              <a
                href="#booking"
                className="inline-flex items-center justify-center px-7 md:px-9 py-3.5 md:py-4 text-[11px] uppercase font-normal text-white transition-all duration-500 hover:-translate-y-0.5"
                style={{
                  letterSpacing: "0.22em",
                  backgroundColor: "var(--magenta)",
                  border: "0.5px solid var(--magenta)",
                }}
              >
                Termin buchen
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-7 md:px-9 py-3.5 md:py-4 text-[11px] uppercase font-normal text-text transition-all duration-500 hover:-translate-y-0.5 hover:bg-mauve-dark hover:text-white"
                style={{
                  letterSpacing: "0.22em",
                  border: "0.5px solid var(--mauve-dark)",
                  backgroundColor: "transparent",
                }}
              >
                Leistungen
              </a>
            </div>
          </div>
        </div>
        <div className="relative min-h-[280px] md:min-h-full fade-up delay-2 order-first md:order-last">
          <img
            src={heroImg}
            alt="Nude rosa Mandelnägel mit weißen Rosenblättern"
            width={1728}
            height={972}
            className="absolute inset-0 w-full h-full object-cover hero-img-mask"
          />
        </div>
      </div>
    </section>
  );
}

function AnnouncementStrip() {
  const baseItems = [
    "MANIKÜRE",
    "NAIL ART",
    "NAGELVERLÄNGERUNG",
    "HAND SPA",
    "PEDIKÜRE",
    "NAGELPROTHETIK",
    "NATURNAGELVERSTÄRKUNG",
  ];
  const items = [...baseItems, ...baseItems, ...baseItems, ...baseItems];
  return (
    <div className="bg-mauve-dark py-5" style={{ overflow: "hidden" }}>
      <div className="flex items-center whitespace-nowrap animate-marquee">
        {items.map((it, i) => (
          <span key={`${it}-${i}`} className="flex items-center shrink-0">
            <span
              className="text-white text-[11px] uppercase font-light"
              style={{ letterSpacing: "0.28em", marginRight: "60px", marginLeft: "60px" }}
            >
              {it}
            </span>
            <span className="text-rose-light text-sm shrink-0" style={{ marginRight: "24px", marginLeft: "24px" }}>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto px-6 md:px-12" style={{ maxWidth: "1200px" }}>
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <p className="text-[11px] uppercase font-light text-mauve-dark mb-6" style={{ letterSpacing: "0.28em" }}>
            Leistungen
          </p>
          <h2
            className="font-display font-light text-text leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Handwerk mit <em className="text-mauve-dark">Hingabe</em>
          </h2>
          <p className="mt-6 text-text-muted font-light leading-relaxed">
            Jede Behandlung ist auf Sie zugeschnitten — mit Zeit, Sorgfalt und feinsten Materialien.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {services.map(({ icon: Icon, name, desc }) => (
            <article
              key={name}
              className="card-lift bg-white p-7 md:p-10 group"
              style={{ border: "0.5px solid #f5ddd8" }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center mb-6 md:mb-8"
                style={{ border: "0.5px solid var(--mauve)" }}
              >
                <Icon size={20} className="text-mauve-dark" strokeWidth={1} />
              </div>
              <h3 className="font-display text-2xl font-light text-text mb-3">{name}</h3>
              <p className="text-sm text-text-muted font-light leading-relaxed">{desc}</p>
              <a
                href="#booking"
                className="inline-block mt-5 font-jost font-medium hover:opacity-70 transition-opacity"
                style={{ color: "#9e6b7a", fontSize: "13px", letterSpacing: "0.08em" }}
              >
                → Jetzt anfragen
              </a>
            </article>
          ))}
        </div>

        <div className="mt-14 md:mt-20 text-center mx-auto max-w-3xl" style={{ backgroundColor: "#fdf6f0" }}>
          <div className="px-6 py-10 md:p-10">
            <p className="font-display italic font-light text-text" style={{ fontSize: "clamp(20px, 5vw, 24px)" }}>
              Bereit für deine Verwöhnzeit?
            </p>
            <a
              href="#booking"
              className="inline-flex items-center justify-center mt-6 px-9 py-4 text-[11px] uppercase font-normal text-white transition-all duration-500 hover:-translate-y-0.5"
              style={{
                letterSpacing: "0.22em",
                backgroundColor: "#9e6b7a",
                border: "0.5px solid #9e6b7a",
              }}
            >
              Jetzt anfragen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: "#fdf6f0" }}>
      <div
        className="mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-10 md:gap-12 items-center"
        style={{ maxWidth: "1200px" }}
      >
        <div className="md:col-span-5">
          <div className="relative mx-2 md:mx-0">
            <div
              className="absolute -inset-3 md:-inset-4 pointer-events-none"
              style={{ border: "0.5px solid var(--mauve)" }}
            />
            <img
              src={aboutImg}
              alt="Sofia bei der Arbeit im Nail Atelier"
              width={1000}
              height={1200}
              loading="lazy"
              className="relative w-full aspect-[4/5] object-cover"
            />
          </div>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="text-[11px] uppercase font-light text-mauve-dark mb-6" style={{ letterSpacing: "0.28em" }}>
            Über mich
          </p>
          <h2
            className="font-display font-light text-text leading-[1.1]"
            style={{ fontSize: "clamp(1.8rem, 7vw, 3.4rem)" }}
          >
            Mit Leidenschaft für <em className="text-mauve-dark">Schönheit</em>
          </h2>
          <div className="my-8" style={{ height: "0.5px", width: "5rem", backgroundColor: "var(--mauve)" }} />
          <p className="text-text-muted font-light leading-relaxed mb-4">
            Mein Name ist Sofia, und das Nail Atelier ist mein Herzensprojekt. Seit vielen Jahren lebe ich für die Kunst
            rund um den Nagel — mit unermüdlicher Liebe zum Detail und einem Auge für stille Eleganz.
          </p>
          <p className="text-text-muted font-light leading-relaxed mb-10">
            In meinem Studio in der Herrengasse 1 schaffe ich einen Raum, in dem jede Frau sich gesehen, gepflegt und
            schön fühlen darf. Hier ist Zeit kein Faktor — sondern ein Geschenk.
          </p>
          <a
            href="#booking"
            className="inline-flex items-center justify-center px-9 py-4 text-[11px] uppercase font-normal text-white transition-all duration-500 hover:-translate-y-0.5"
            style={{
              letterSpacing: "0.22em",
              backgroundColor: "var(--magenta)",
              border: "0.5px solid var(--magenta)",
            }}
          >
            Termin vereinbaren
          </a>
        </div>
      </div>
    </section>
  );
}

const galleryImages = [
  { src: g2, label: "Nail Art" },
  { src: g3, label: "French" },
  { src: g4, label: "Glitter" },
  { src: g5, label: "Nude & Gold" },
  { src: g6, label: "Winter Art" },
  { src: g7, label: "Classic French" },
];

function Gallery() {
  return (
    <section id="gallery" className="bg-white py-20">
      <div className="mx-auto px-6 md:px-12" style={{ maxWidth: "1200px" }}>
        <p
          className="text-center text-[11px] uppercase font-light mb-6"
          style={{ letterSpacing: "0.2em", color: "#b08080" }}
        >
          INSTAGRAM · @nail.atelier.wien
        </p>
        <h2
          className="font-display font-light text-center leading-tight mb-8 px-4"
          style={{ fontSize: "clamp(28px, 7vw, 36px)", color: "#2a1f1f" }}
        >
          Meine <em className="text-mauve-dark">Arbeiten</em>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3">
          {galleryImages.map((item, i) => (
            <div key={i} className="relative aspect-square overflow-hidden group bg-cream cursor-pointer">
              <img
                src={item.src}
                alt={`Nail Atelier Galerie ${i + 1}`}
                width={800}
                height={800}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundColor: "rgba(201, 160, 160, 0.35)" }}
              >
                <span className="font-display text-white text-2xl italic font-light tracking-wide">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center pt-10 md:pt-14 pb-6 gap-5 md:gap-6 px-6">
          <p
            className="font-display italic font-light text-text text-center"
            style={{ fontSize: "clamp(18px, 5vw, 22px)" }}
          >
            Gefällt dir was du siehst?
          </p>
          <a
            href="#booking"
            className="inline-flex items-center justify-center px-9 py-4 text-[11px] uppercase font-normal text-white transition-all duration-500 hover:-translate-y-0.5"
            style={{
              letterSpacing: "0.22em",
              backgroundColor: "#9e6b7a",
              border: "0.5px solid #9e6b7a",
            }}
          >
            Termin anfragen →
          </a>
        </div>
        <div className="flex justify-center pb-14">
          <a
            href="https://www.instagram.com/nail.atelier.wien"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-9 py-4 text-[11px] uppercase font-normal text-mauve-dark transition-all duration-500 hover:-translate-y-0.5 hover:bg-mauve hover:text-white"
            style={{
              letterSpacing: "0.12em",
              border: "0.5px solid var(--mauve)",
              backgroundColor: "transparent",
            }}
          >
            Mehr auf Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const inputStyle: React.CSSProperties = {
    border: "0.5px solid var(--mauve)",
    backgroundColor: "var(--cream)",
  };
  const labelStyle: React.CSSProperties = { letterSpacing: "0.22em" };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="mx-auto max-w-2xl px-6 md:px-12 text-center">
        <p
          className="text-[11px] uppercase font-light text-mauve-dark mb-5 md:mb-6"
          style={{ letterSpacing: "0.28em" }}
        >
          Termin
        </p>
        <h2
          className="font-display font-light text-text leading-tight"
          style={{ fontSize: "clamp(1.8rem, 7vw, 3.2rem)" }}
        >
          Vereinbare deinen <em className="text-mauve-dark">Moment</em>
        </h2>
        <p
          className="mt-5 md:mt-6 text-sm md:text-base font-light leading-relaxed font-jost"
          style={{ color: "#7a5f5f" }}
        >
          Schreib mir auf Instagram — ich melde mich persönlich und wir finden gemeinsam deinen Wunschtermin.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 md:mt-14 text-left grid md:grid-cols-2 gap-5 md:gap-6"
        >
          <div>
            <label className="block text-[10px] uppercase font-light text-text-muted mb-3" style={labelStyle}>
              Vorname
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 text-sm font-light text-text outline-none focus:border-magenta transition-colors"
              style={inputStyle}
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase font-light text-text-muted mb-3" style={labelStyle}>
              Nachname
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 text-sm font-light text-text outline-none focus:border-magenta transition-colors"
              style={inputStyle}
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase font-light text-text-muted mb-3" style={labelStyle}>
              Telefonnummer
            </label>
            <input
              type="tel"
              placeholder="Telefonnummer"
              className="w-full px-4 py-3 text-sm font-light text-text outline-none focus:border-magenta transition-colors placeholder:text-text-muted/50"
              style={inputStyle}
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase font-light text-text-muted mb-3" style={labelStyle}>
              Leistung
            </label>
            <select
              required
              className="w-full px-4 py-3 text-sm font-light text-text outline-none focus:border-magenta transition-colors"
              style={inputStyle}
              defaultValue=""
            >
              <option value="" disabled>
                Bitte wählen
              </option>
              {services.map((s) => (
                <option key={s.name} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-[10px] uppercase font-light text-text-muted mb-3" style={labelStyle}>
              Datum
            </label>
            <input
              type="date"
              required
              className="w-full px-4 py-3 text-sm font-light text-text outline-none focus:border-magenta transition-colors"
              style={inputStyle}
            />
          </div>
          <div className="md:col-span-2 mt-4">
            <a
              href="https://ig.me/m/nail.atelier.wien"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center px-12 py-4 text-[11px] uppercase font-normal text-white transition-all duration-500 hover:-translate-y-0.5"
              style={{
                letterSpacing: "0.22em",
                backgroundColor: "#9e6b7a",
                border: "0.5px solid #9e6b7a",
              }}
            >
              Auf Instagram anfragen →
            </a>
            <p className="text-center font-jost mt-[10px]" style={{ fontSize: "12px", color: "#c9a0a0" }}>
              Ich antworte persönlich so schnell wie möglich 🤍
            </p>
            <a
              href="https://wa.me/43XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full items-center justify-center px-12 py-4 text-[11px] uppercase font-normal text-white mt-4 transition-all duration-500 hover:-translate-y-0.5"
              style={{
                display: "none",
                letterSpacing: "0.22em",
                backgroundColor: "#25D366",
                border: "0.5px solid #25D366",
              }}
            >
              Auf WhatsApp schreiben →
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: "#4a2f2f" }} className="py-14 md:py-20 text-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-12 grid md:grid-cols-3 gap-10 md:gap-12">
        <div>
          <p className="font-display italic text-2xl md:text-3xl" style={{ color: "var(--rose-light)" }}>
            Nail Atelier
          </p>
          <p className="mt-3 md:mt-4 text-sm font-light text-mauve">Nagelstudio by Sofia</p>
        </div>
        <div>
          <p className="text-[10px] uppercase font-light mb-4 text-mauve" style={{ letterSpacing: "0.28em" }}>
            Studio
          </p>
          <p className="flex items-start gap-2 text-sm font-light text-cream/90">
            <MapPin size={14} strokeWidth={1} className="mt-1 text-rose-light" />
            <span>
              Herrengasse 1
              <br />
              1010 Wien, Österreich
            </span>
          </p>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps?q=Herrengasse+1,+1010+Wien&output=embed"
            width="100%"
            height="160"
            style={{ border: "0.5px solid #c9a0a0", filter: "grayscale(30%) sepia(20%)" }}
            allowFullScreen
            loading="lazy"
            title="Nail Atelier Location"
          />
        </div>
      </div>
      <div
        className="mx-auto max-w-7xl px-6 md:px-12 mt-16 pt-8 flex flex-col md:flex-row justify-between gap-4"
        style={{ borderTop: "0.5px solid rgba(201,160,160,0.2)" }}
      >
        <p className="text-[10px] uppercase font-light text-mauve" style={{ letterSpacing: "0.28em" }}>
          © {new Date().getFullYear()} Nail Atelier
        </p>
        <p className="text-[10px] uppercase font-light text-mauve" style={{ letterSpacing: "0.28em" }}>
          Made with care · Wien
        </p>
      </div>
    </footer>
  );
}

function Quote() {
  return (
    <section className="text-center" style={{ backgroundColor: "#2a1f1f", padding: "60px 40px" }}>
      <p
        className="font-display italic font-light leading-relaxed max-w-4xl mx-auto"
        style={{
          color: "#f5ddd8",
          fontSize: "clamp(24px, 4vw, 36px)",
        }}
      >
        Refined beauty, down to your fingertips.
      </p>
    </section>
  );
}

function FloatingCta() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY > 300;
      const booking = document.getElementById("booking");
      let inBooking = false;
      if (booking) {
        const rect = booking.getBoundingClientRect();
        inBooking = rect.top < window.innerHeight && rect.bottom > 0;
      }
      setVisible(scrolled && !inBooking);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      href="#booking"
      aria-label="Termin sichern"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 font-jost text-white uppercase shadow-lg transition-opacity duration-300"
      style={{
        backgroundColor: "#9e6b7a",
        padding: "12px 20px",
        fontSize: "11px",
        letterSpacing: "0.18em",
        borderRadius: 0,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      Termin sichern
    </a>
  );
}

function Index() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AnnouncementStrip />
      <Services />
      <DiamondDivider />
      <About />
      <DiamondDivider />
      <Gallery />
      <DiamondDivider />
      <Quote />
      <DiamondDivider />
      <Booking />
      <Footer />
      <FloatingCta />
    </main>
  );
}
