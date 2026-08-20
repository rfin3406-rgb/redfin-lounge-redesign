import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Fish, Martini, Sparkles, Music4, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroAsset from "@/assets/image.png.asset.json";
import loungeAsset from "@/assets/image-2.png.asset.json";
import steakAsset from "@/assets/image-4.png.asset.json";
import kitchenAsset from "@/assets/image-5.png.asset.json";
import agedAsset from "@/assets/image-6.png.asset.json";
import platterAsset from "@/assets/image-7.png.asset.json";
import cocktailAsset from "@/assets/image-8.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Redfin Seafood & Grill Lounge — Ulaanbaatar" },
      {
        name: "description",
        content:
          "Fresh seafood, dry-aged grill and hand-crafted cocktails in a red-lit lounge at the heart of Ulaanbaatar. Reserve your table at Redfin.",
      },
      { property: "og:title", content: "Redfin Seafood & Grill Lounge — Ulaanbaatar" },
      {
        property: "og:description",
        content:
          "Seafood, dry-aged grill and craft cocktails in Ulaanbaatar's most atmospheric lounge.",
      },
    ],
  }),
  component: Home,
});

const highlights = [
  {
    icon: Fish,
    title: "Fresh Seafood",
    body: "Daily catch, sashimi-grade selections and shellfish platters plated with precision.",
  },
  {
    icon: Martini,
    title: "Craft Cocktails",
    body: "Our espresso martini is legendary — dramatic garnish, serious balance, endlessly ordered.",
  },
  {
    icon: Sparkles,
    title: "Elegant Atmosphere",
    body: "Deep reds, mirrored bar light and velvet seating built for date nights and celebrations.",
  },
  {
    icon: Music4,
    title: "Live Lounge",
    body: "Grand piano, professional stage and a wall-sized LED screen for unforgettable evenings.",
  },
];

const testimonials = [
  {
    name: "Anu B.",
    text: "The seafood is consistently excellent and the espresso martini alone is worth the trip. Easily our favourite date-night spot in the city.",
  },
  {
    name: "Tem\u00fcjin D.",
    text: "We booked the VIP room for a birthday — attentive staff, beautiful plating and the room felt genuinely special without being stiff.",
  },
  {
    name: "Sarah L.",
    text: "Cocktail presentation is theatre. Came for a casual dinner, stayed three hours because the atmosphere is that good.",
  },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <img
          src={heroAsset.url}
          alt="The red-lit bar at Redfin Seafood & Grill Lounge"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/75 to-background/40" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-20 lg:px-8">
          <p className="eyebrow">Ulaanbaatar · International Trade Center</p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] sm:text-7xl lg:text-8xl">
            Redfin
            <span className="block text-primary">Seafood &amp; Grill Lounge</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Ocean-fresh plates, dry-aged fire-grilled cuts and cocktails poured under red light.
            Dinner that turns into a night out.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild size="lg" className="glow-red rounded-none tracking-[0.18em] uppercase">
              <Link to="/reservations">Reserve a Table</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-none border-foreground/30 bg-transparent tracking-[0.18em] uppercase hover:bg-foreground/10"
            >
              <Link to="/menu">View Menu</Link>
            </Button>
          </div>
          <div className="mt-12 inline-flex items-center gap-3 border border-border bg-card/70 px-5 py-3 backdrop-blur">
            <div className="flex gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="size-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm">
              <strong className="font-semibold">4.8</strong>
              <span className="text-muted-foreground"> / 5 · 127+ guest reviews</span>
            </span>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <img
              src={loungeAsset.url}
              alt="Redfin lounge interior with grand piano and velvet seating"
              className="w-full object-cover shadow-[var(--shadow-lounge)]"
              loading="lazy"
            />
            <img
              src={cocktailAsset.url}
              alt="Signature cocktail served at the Redfin bar"
              className="absolute -bottom-10 -right-4 hidden w-40 border border-border object-cover shadow-[var(--shadow-lounge)] lg:block"
              loading="lazy"
            />
          </div>
          <div>
            <p className="eyebrow">The Concept</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">A lounge that eats like a restaurant</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Redfin brings together Japanese and European kitchens, a raw bar of daily seafood and
              a bar team that treats every pour as a plate. The room is dark, warm and lit in
              signature red — a grand piano on one side, a full LED stage on the other.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              It works for a quiet Tuesday dinner for two and just as well for a hundred-guest
              celebration. Two VIP rooms, a private smoking lounge and a team that remembers how you
              like your martini.
            </p>
            <div className="hairline-gold mt-8 w-40" />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-y border-border bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow">Why Redfin</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">Four reasons guests come back</h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="surface-card group p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60"
              >
                <h.icon className="size-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mt-5 text-2xl">{h.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature gallery */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          {[
            {
              img: steakAsset.url,
              alt: "Matsusaka wagyu steak on slate",
              title: "Premium Steak",
              body: "Matsusaka Wagyu, Tomahawk and 28-day dry-aged ribeye.",
            },
            {
              img: agedAsset.url,
              alt: "Dry-aged beef in the ageing room",
              title: "Signature Dry-Aged",
              body: "Aged 28 days in-house, then smoked over apple and cherry wood.",
            },
            {
              img: platterAsset.url,
              alt: "Japanese tasting box with sushi and tempura",
              title: "Japanese × European",
              body: "Sushi, tempura and chawanmushi beside classic European plates.",
            },
          ].map((c) => (
            <article key={c.title} className="group overflow-hidden border border-border">
              <div className="overflow-hidden">
                <img
                  src={c.img}
                  alt={c.alt}
                  loading="lazy"
                  className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="bg-card p-6">
                <h3 className="text-2xl">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="rounded-none tracking-[0.18em] uppercase">
            <Link to="/menu">Explore the full menu</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="relative border-y border-border py-24"
        style={{ backgroundImage: `url(${kitchenAsset.url})`, backgroundSize: "cover" }}
      >
        <div className="absolute inset-0 bg-background/88" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow">Guest sentiment</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">Rated 4.8 by 127+ guests</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="surface-card p-8">
                <Quote className="size-6 text-primary" />
                <blockquote className="mt-5 leading-relaxed text-muted-foreground">
                  {t.text}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 text-sm">
                  <span className="flex gap-0.5">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="size-3 fill-gold text-gold" />
                    ))}
                  </span>
                  <span className="text-foreground">{t.name}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-5 py-28 text-center lg:px-8">
        <h2 className="text-4xl sm:text-6xl">Your table is waiting</h2>
        <p className="mx-auto mt-5 max-w-lg leading-relaxed text-muted-foreground">
          Seating for 100, standing receptions up to 200, and two VIP rooms for the nights that
          matter most.
        </p>
        <Button asChild size="lg" className="glow-red mt-9 rounded-none tracking-[0.18em] uppercase">
          <Link to="/reservations">Reserve a Table</Link>
        </Button>
      </section>
    </>
  );
}
