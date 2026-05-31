import { createFileRoute } from "@tanstack/react-router";
import { Navbar, Footer } from "@/components/site-nav";
import g4 from "@/assets/gallery-3.jpg";

export const Route = createFileRoute("/preise")({
  head: () => ({
    meta: [
      { title: "Preise – Nail Atelier Wien | Nagelstudio by Sofia" },
      {
        name: "description",
        content:
          "Transparente Preisübersicht für Maniküre, Nagelverlängerung, Nail Art, Pediküre und Spa-Behandlungen im Nail Atelier Wien.",
      },
      { property: "og:title", content: "Preise – Nail Atelier Wien" },
      {
        property: "og:description",
        content:
          "Alle Leistungen und Richtpreise im Nail Atelier by Sofia in Wien.",
      },
    ],
  }),
  component: PreisePage,
});

type PriceItem = { name: string; price: string };
type Category = { title: string; items: PriceItem[] };

const categories: Category[] = [
  {
    title: "Maniküre",
    items: [
      { name: "Klassische Maniküre", price: "€25" },
      { name: "Naturnagelverstärkung", price: "€45" },
      { name: "Gel Overlay", price: "€55" },
    ],
  },
  {
    title: "Nagelverlängerung",
    items: [
      { name: "Acryl Verlängerung", price: "€65" },
      { name: "Gel Verlängerung", price: "€65" },
      { name: "Infill / Auffüllung", price: "€45" },
    ],
  },
  {
    title: "Nail Art",
    items: [
      { name: "French / Babyboomer", price: "€15" },
      { name: "Einfaches Design", price: "€10" },
      { name: "Aufwendiges Design", price: "€20" },
      { name: "Glitter / Chrome", price: "€10" },
    ],
  },
  {
    title: "Pediküre",
    items: [
      { name: "Russische Pediküre", price: "€55" },
      { name: "Klassische Pediküre", price: "€35" },
    ],
  },
  {
    title: "Extras & Spa",
    items: [
      { name: "Hand Spa Mini", price: "€15" },
      { name: "Hand Spa Luxury", price: "€30" },
      { name: "Nagelprothetik", price: "auf Anfrage" },
    ],
  },
];

function PriceCategory({ category, index }: { category: Category; index: number }) {
  return (
    <div className="mb-12 md:mb-16">
      <h2
        className="font-display italic font-light mb-6 md:mb-8"
        style={{ fontSize: "22px", color: "#b08080" }}
      >
        {category.title}
      </h2>
      <ul>
        {category.items.map((item, i) => (
          <li
            key={item.name}
            className="flex items-baseline gap-4 px-4 md:px-6 py-4"
            style={{
              backgroundColor: (i + index) % 2 === 0 ? "#ffffff" : "#fdf6f0",
              borderBottom: "0.5px solid #f5ddd8",
            }}
          >
            <span className="font-jost font-light text-text text-sm md:text-base">
              {item.name}
            </span>
            <span
              className="flex-1 mx-2 md:mx-3"
              style={{
                borderBottom: "1px dotted #f5ddd8",
                transform: "translateY(-4px)",
              }}
              aria-hidden
            />
            <span className="font-jost font-light text-text text-sm md:text-base whitespace-nowrap">
              {item.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PreisePage() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section style={{ backgroundColor: "#fdf6f0" }}>
        <div
          className="mx-auto grid md:grid-cols-[55%_45%] items-stretch"
          style={{ maxWidth: "1200px", maxHeight: "300px" }}
        >
          <div className="flex items-center px-6 md:pl-20 md:pr-8 py-10 md:py-14 text-center md:text-left">
            <div className="max-w-xl mx-auto md:mx-0">
              <p
                className="text-[10px] md:text-[11px] uppercase font-light text-mauve-dark mb-4 md:mb-5"
                style={{ letterSpacing: "0.28em" }}
              >
                Leistungen & Preise
              </p>
              <h1
                className="font-display font-light text-text leading-[1.05]"
                style={{ fontSize: "clamp(1.6rem, 5vw, 2.8rem)" }}
              >
                Schönheit <em className="text-mauve-dark">bis in die Fingerspitzen</em>
              </h1>
              <p className="mt-4 md:mt-5 max-w-lg mx-auto md:mx-0 text-text-muted font-light leading-relaxed text-sm">
                Hochwertiges Nageldesign in moderner Wohlfühlatmosphäre.
              </p>
            </div>
          </div>
          <div className="relative min-h-[200px] md:min-h-0 order-first md:order-last">
            <img
              src={g4}
              alt="Nude rosa Mandelnägel"
              width={800}
              height={800}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ maxHeight: "300px" }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* PRICE TABLES */}
      <section className="py-16 md:py-24 bg-white">
        <div
          className="mx-auto px-6 md:px-12"
          style={{ maxWidth: "880px" }}
        >
          {categories.map((cat, i) => (
            <PriceCategory key={cat.title} category={cat} index={i} />
          ))}

          <p
            className="font-jost italic text-center mt-8 md:mt-12 text-text-muted"
            style={{ fontSize: "12px", lineHeight: 1.6 }}
          >
            * Alle Preise sind Richtwerte und können je nach Aufwand variieren.
            Genaue Preise auf Anfrage.
          </p>

          <div className="flex justify-center mt-12 md:mt-16">
            <a
              href="https://ig.me/m/nail.atelier.wien"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-9 py-4 text-[11px] uppercase font-normal text-white transition-all duration-500 hover:-translate-y-0.5"
              style={{
                letterSpacing: "0.22em",
                backgroundColor: "#e8189c",
                border: "0.5px solid #e8189c",
              }}
            >
              Jetzt auf Instagram anfragen →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
