import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Star } from "lucide-react";
import platterAsset from "@/assets/image-7.png.asset.json";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Redfin Seafood & Grill Lounge" },
      {
        name: "description",
        content:
          "Seafood platters, sushi, dry-aged grill, pasta and signature cocktails including our espresso martini. Explore the Redfin menu.",
      },
      { property: "og:title", content: "Menu — Redfin Seafood & Grill Lounge" },
      {
        property: "og:description",
        content: "Seafood, sushi, dry-aged grill and craft cocktails at Redfin, Ulaanbaatar.",
      },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; desc: string; price: string; signature?: boolean };
type Section = { id: string; title: string; kind: "food" | "drinks"; items: Item[] };

const sections: Section[] = [
  {
    id: "starters",
    title: "Starters",
    kind: "food",
    items: [
      { name: "Oysters, Three Ways", desc: "Mignonette, yuzu ponzu, chili butter", price: "₮ 12,000 / pc" },
      { name: "Chawanmushi", desc: "Silken egg custard, prawn, shiitake", price: "₮ 28,000" },
      { name: "Tuna Tataki", desc: "Seared loin, ponzu, crisp shallot", price: "₮ 42,000" },
      { name: "Truffle Burrata", desc: "Heirloom tomato, basil oil, sourdough", price: "₮ 38,000" },
    ],
  },
  {
    id: "seafood",
    title: "Seafood",
    kind: "food",
    items: [
      {
        name: "Redfin Seafood Platter",
        desc: "Oysters, king crab, prawns, scallops on ice — for two",
        price: "₮ 195,000",
        signature: true,
      },
      { name: "Grilled Hokkaido Scallops", desc: "Brown butter, capers, lemon", price: "₮ 68,000" },
      { name: "Whole Sea Bass", desc: "Salt-baked, herb oil, charred fennel", price: "₮ 96,000" },
      { name: "King Crab Legs", desc: "Binchotan-grilled, garlic drawn butter", price: "₮ 145,000" },
    ],
  },
  {
    id: "grill",
    title: "Grill",
    kind: "food",
    items: [
      {
        name: "28-Day Dry-Aged Ribeye",
        desc: "Aged in-house, smoked over apple and cherry wood",
        price: "₮ 178,000",
        signature: true,
      },
      { name: "Matsusaka Wagyu", desc: "A5 grade, sea salt, fresh wasabi — 150g", price: "₮ 320,000" },
      { name: "Tomahawk", desc: "1kg, bone-in, sharing cut", price: "₮ 265,000" },
      { name: "Lamb Rack", desc: "Herb crust, smoked eggplant", price: "₮ 112,000" },
    ],
  },
  {
    id: "sushi",
    title: "Sushi",
    kind: "food",
    items: [
      { name: "Omakase Nigiri, 10 pc", desc: "Chef's daily selection", price: "₮ 128,000", signature: true },
      { name: "Toro & Caviar Roll", desc: "Fatty tuna, oscietra, gold leaf", price: "₮ 98,000" },
      { name: "Rainbow Roll", desc: "Salmon, tuna, avocado, yuzu mayo", price: "₮ 62,000" },
      { name: "Salmon Sashimi", desc: "Six slices, wasabi, shiso", price: "₮ 48,000" },
    ],
  },
  {
    id: "pasta",
    title: "Pasta",
    kind: "food",
    items: [
      { name: "Lobster Linguine", desc: "Half lobster, tomato bisque, chili", price: "₮ 118,000" },
      { name: "Uni Cream Spaghetti", desc: "Sea urchin, nori butter", price: "₮ 92,000" },
      { name: "Truffle Tagliatelle", desc: "Parmesan cream, seasonal truffle", price: "₮ 86,000" },
    ],
  },
  {
    id: "cocktails",
    title: "Cocktails",
    kind: "drinks",
    items: [
      {
        name: "Redfin Espresso Martini",
        desc: "Double espresso, vanilla vodka, cacao dust, theatrical garnish",
        price: "₮ 34,000",
        signature: true,
      },
      { name: "Crimson Negroni", desc: "Blood orange, gin, house vermouth", price: "₮ 32,000" },
      { name: "Smoked Old Fashioned", desc: "Cherry wood smoke, bourbon, bitters", price: "₮ 38,000" },
      { name: "Yuzu Highball", desc: "Japanese whisky, yuzu, soda", price: "₮ 30,000" },
      { name: "Neon Spritz", desc: "Aperol, sparkling wine, grapefruit", price: "₮ 28,000" },
    ],
  },
  {
    id: "wine",
    title: "Wine & Sake",
    kind: "drinks",
    items: [
      { name: "Champagne by the glass", desc: "Brut NV", price: "₮ 45,000" },
      { name: "Junmai Daiginjo", desc: "Chilled, 180ml carafe", price: "₮ 52,000" },
      { name: "Sommelier Pairing", desc: "Three glasses matched to your table", price: "₮ 120,000" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    kind: "food",
    items: [
      { name: "Matcha Basque Cheesecake", desc: "Burnt top, black sesame cream", price: "₮ 32,000" },
      { name: "Dark Chocolate Fondant", desc: "Salted caramel, vanilla ice cream", price: "₮ 34,000" },
      { name: "Yuzu Sorbet", desc: "Citrus, mint, prosecco splash", price: "₮ 24,000" },
    ],
  },
];

const tabs = [
  { id: "all", label: "All" },
  { id: "food", label: "Food" },
  { id: "drinks", label: "Drinks" },
] as const;

function MenuPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("all");
  const visible = sections.filter((s) => tab === "all" || s.kind === tab);

  return (
    <div>
      <section className="relative overflow-hidden">
        <img
          src={platterAsset.url}
          alt="Japanese tasting selection at Redfin"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/85 to-background" />
        <div className="relative mx-auto max-w-7xl px-5 pt-36 pb-16 lg:px-8">
          <p className="eyebrow">Japanese × European</p>
          <h1 className="mt-4 text-5xl sm:text-7xl">The Menu</h1>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            Daily seafood, in-house dry-aged beef and a bar that takes garnish seriously. Prices in
            Mongolian tögrög.
          </p>
        </div>
      </section>

      <div className="sticky top-[68px] z-40 border-y border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 lg:px-8">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`shrink-0 border px-5 py-2 text-xs tracking-[0.22em] uppercase transition-colors ${
                tab === t.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        {visible.map((section) => (
          <section key={section.id} className="mb-20 last:mb-0">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-4xl sm:text-5xl">{section.title}</h2>
              <span className="hidden text-xs tracking-[0.3em] text-muted-foreground uppercase sm:block">
                {section.kind}
              </span>
            </div>
            <div className="hairline-gold mt-4" />
            <div className="mt-8 grid gap-x-14 gap-y-7 md:grid-cols-2">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="group border-b border-border/60 pb-5 transition-colors hover:border-primary/60"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="flex min-w-0 items-center gap-2 text-xl">
                      <span className="truncate transition-colors group-hover:text-primary">
                        {item.name}
                      </span>
                      {item.signature && (
                        <Star className="size-3.5 shrink-0 fill-gold text-gold" aria-label="Signature" />
                      )}
                    </h3>
                    <span className="shrink-0 font-sans text-sm text-gold">{item.price}</span>
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
