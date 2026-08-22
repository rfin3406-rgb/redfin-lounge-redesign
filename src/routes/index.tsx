import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Fish, Martini, Sparkles, Music4 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang, type Copy } from "@/lib/i18n";
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

const highlights: { icon: typeof Fish; title: Copy; body: Copy }[] = [
  {
    icon: Fish,
    title: { en: "Fresh Seafood", mn: "Шинэ далайн хоол" },
    body: {
      en: "Daily catch, sashimi-grade selections and shellfish platters plated with precision.",
      mn: "Өдөр бүрийн шинэ загас, сашими зэрэглэлийн сонголт, нарийн ур чадвараар бэлтгэсэн хясааны хослол.",
    },
  },
  {
    icon: Martini,
    title: { en: "Craft Cocktails", mn: "Онцгой коктейль" },
    body: {
      en: "Our espresso martini is legendary — dramatic garnish, serious balance, endlessly ordered.",
      mn: "Манай эспрессо мартини домогт болсон — гайхалтай чимэглэл, төгс тэнцвэр, хамгийн их захиалагддаг.",
    },
  },
  {
    icon: Sparkles,
    title: { en: "Elegant Atmosphere", mn: "Гоёмсог уур амьсгал" },
    body: {
      en: "Deep reds, mirrored bar light and velvet seating built for date nights and celebrations.",
      mn: "Гүн улаан өнгө, толин барын гэрэл, хилэн суудал — болзоо болон баярын үдэшт зориулав.",
    },
  },
  {
    icon: Music4,
    title: { en: "Live Lounge", mn: "Амьд хөгжимт лаунж" },
    body: {
      en: "Grand piano, professional stage and a wall-sized LED screen for unforgettable evenings.",
      mn: "Төгөлдөр хуур, мэргэжлийн тайз, ханын хэмжээний LED дэлгэц — мартагдашгүй үдшүүд.",
    },
  },
];

const reasons: { img: string; alt: string; no: string; title: Copy; body: Copy }[] = [
  {
    img: steakAsset.url,
    alt: "Matsusaka wagyu steak on a black plate",
    no: "\n",
    title: { en: "Premium Steak Experience", mn: "Дээд зэрглийн стейкийн туршлага" },
    body: {
      en: "Matsusaka Wagyu, Tomahawk and other premium cuts, grilled exactly as you like them.",
      mn: "Мацүсака Вагью, Томахоук зэрэг дээд зэрэглийн махыг таны хүссэнээр шарж бэлтгэнэ.",
    },
  },
  {
    img: kitchenAsset.url,
    alt: "Chefs at work in the Redfin kitchen",
    no: "\n",
    title: { en: "Japanese × European Cuisine", mn: "Япон × Европ хоол" },
    body: {
      en: "Two kitchens, one table — sushi and tempura beside classic European plates.",
      mn: "Хоёр гал тогоо, нэг ширээ — суши, темпура сонгодог Европ хоолтой зэрэгцэнэ.",
    },
  },
  {
    img: agedAsset.url,
    alt: "Dry-aged beef in the ageing room",
    no: "\n",
    title: { en: "Signature Dry-Aged Beef", mn: "Онцлох хуурай боловсруулсан үхрийн мах" },
    body: {
      en: "Aged in-house for 28 days, then smoked over apple and cherry wood.",
      mn: "Байрандаа 28 хоног боловсруулж, алим болон интоорын модоор утна.",
    },
  },
  {
    img: platterAsset.url,
    alt: "Japanese tasting tray with sushi and tempura",
    no: "\n",
    title: { en: "The Perfect Lounge Experience", mn: "Төгс лаунжийн туршлага" },
    body: {
      en: "Small plates, rare bottles and a room designed to keep you for one more round.",
      mn: "Жижиг зууш, ховор архи, нэг дараалал нэмж захиалмаар орчин.",
    },
  },
  {
    img: cocktailAsset.url,
    alt: "Signature cocktail with mint garnish",
    no: "\n",
    title: { en: "Made for Every Occasion", mn: "Аливаа арга хэмжээнд тохирно" },
    body: {
      en: "Up to 100 seated, 200 standing, two VIP rooms and a separate smoking lounge.",
      mn: "100 хүн суудалтай, 200 хүн зогсоо, хоёр VIP өрөө, тусдаа тамхины лаунжтай.",
    },
  },
];

function Home() {
  const { t } = useLang();

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
          <p className="eyebrow">
            {t({
              en: "Ulaanbaatar · International Trade Center",
              mn: "Улаанбаатар · Интернэшнл Трэйд Төв",
            })}
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] sm:text-7xl lg:text-8xl">
            Redfin
            <span className="block text-primary">
              {t({ en: "Seafood & Grill Lounge", mn: "Далайн хоол & Грилл Лаунж" })}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t({
              en: "Ocean-fresh plates, dry-aged fire-grilled cuts and cocktails poured under red light. Dinner that turns into a night out.",
              mn: "Далайн шинэ хоол, хуурай боловсруулсан галын гриль мах, улаан гэрлийн дор бэлтгэсэн коктейль. Оройн хоол нь мартагдашгүй үдэш болж хувирна.",
            })}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild size="lg" className="glow-red rounded-none tracking-[0.18em] uppercase">
              <Link to="/reservations">{t({ en: "Reserve a Table", mn: "Ширээ захиалах" })}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-none border-foreground/30 bg-transparent tracking-[0.18em] uppercase hover:bg-foreground/10"
            >
              <Link to="/menu">{t({ en: "View Menu", mn: "Цэс үзэх" })}</Link>
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
              <span className="text-muted-foreground">
                {t({ en: " / 5 · 127+ guest reviews", mn: " / 5 · 127+ зочны үнэлгээ" })}
              </span>
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
          </div>
          <div>
            <p className="eyebrow">{t({ en: "The Concept", mn: "Бидний үзэл санаа" })}</p>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              {t({
                en: "A lounge that eats like a restaurant",
                mn: "Ресторан шиг хооллодог лаунж",
              })}
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {t({
                en: "Redfin brings together Japanese and European kitchens, a raw bar of daily seafood and a bar team that treats every pour as a plate. The room is dark, warm and lit in signature red — a grand piano on one side, a full LED stage on the other.",
                mn: "Redfin нь Япон, Европын гал тогоо, өдөр бүрийн шинэ далайн хоолны бар, мөн коктейль бүрийг урлаг мэт бэлтгэдэг баг нэгтгэдэг. Танхим нь бүрхэг, дулаахан, онцлох улаан гэрэлтэй — нэг талд төгөлдөр хуур, нөгөө талд LED тайз.",
              })}
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {t({
                en: "It works for a quiet Tuesday dinner for two and just as well for a hundred-guest celebration. Two VIP rooms, a private smoking lounge and a team that remembers how you like your martini.",
                mn: "Хоёр хүний нам гүм оройн хоолонд ч, зуун зочны баярт ч адилхан тохирно. Хоёр VIP өрөө, тусдаа тамхины лаунж, мөн таны дуртай мартиниг санадаг баг.",
              })}
            </p>
            <div className="hairline-gold mt-8 w-40" />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-y border-border bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow">{t({ en: "Why Redfin", mn: "Яагаад Redfin" })}</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            {t({
              en: "Four reasons guests come back",
              mn: "Зочид дахин ирдэг дөрвөн шалтгаан",
            })}
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <div
                key={h.title.en}
                className="surface-card group p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60"
              >
                <h.icon className="size-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mt-5 text-2xl">{t(h.title)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(h.body)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons to choose Redfin */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <p className="eyebrow">{t({ en: "Reasons to choose us", mn: "Биднийг сонгох шалтгаан" })}</p>
        <h2 className="mt-4 text-4xl sm:text-5xl">
          {t({ en: "Why choose Redfin", mn: "Яагаад Redfin-ийг сонгох вэ" })}
        </h2>
        <div className="hairline-gold mt-6 w-40" />

        <div className="mt-14 space-y-14">
          {reasons.map((r) => (
            <article key={r.no} className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
              <figure className="group relative overflow-hidden border border-border">
                <img
                  src={r.img}
                  alt={r.alt}
                  loading="lazy"
                  className="h-full min-h-[18rem] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                <span className="font-display absolute left-5 top-3 text-7xl leading-none text-foreground drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] sm:text-8xl">
                  {r.no}
                </span>
              </figure>
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl sm:text-4xl">{t(r.title)}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{t(r.body)}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button asChild variant="outline" className="rounded-none tracking-[0.18em] uppercase">
            <Link to="/menu">{t({ en: "Explore the full menu", mn: "Бүтэн цэсийг үзэх" })}</Link>
          </Button>
        </div>
      </section>

      {/* Rating */}
      <section className="border-y border-border bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <p className="eyebrow">{t({ en: "Guest rating", mn: "Зочдын үнэлгээ" })}</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">
            {t({ en: "Rated 4.8 by 127+ guests", mn: "127+ зочин 4.8 үнэлгээ өгсөн" })}
          </h2>
          <div className="mt-6 flex justify-center gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="size-5 fill-gold text-gold" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-5 py-28 text-center lg:px-8">
        <h2 className="text-4xl sm:text-6xl">
          {t({ en: "Your table is waiting", mn: "Таны ширээ бэлэн байна" })}
        </h2>
        <p className="mx-auto mt-5 max-w-lg leading-relaxed text-muted-foreground">
          {t({
            en: "Seating for 100, standing receptions up to 200, and two VIP rooms for the nights that matter most.",
            mn: "100 хүний суудал, 200 хүртэлх зогсоо хүлээн авалт, хамгийн онцгой үдшүүдэд зориулсан хоёр VIP өрөө.",
          })}
        </p>
        <Button asChild size="lg" className="glow-red mt-9 rounded-none tracking-[0.18em] uppercase">
          <Link to="/reservations">{t({ en: "Reserve a Table", mn: "Ширээ захиалах" })}</Link>
        </Button>
      </section>
    </>
  );
}
