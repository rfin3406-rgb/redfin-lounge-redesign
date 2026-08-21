import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Star } from "lucide-react";
import { useLang, type Copy } from "@/lib/i18n";
import loungeAsset from "@/assets/image-2.png.asset.json";

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

type Item = { name: Copy; desc: Copy; price: string; signature?: boolean };
type Section = { id: string; title: Copy; kind: "food" | "drinks"; items: Item[] };

const kindLabel: Record<"food" | "drinks", Copy> = {
  food: { en: "Food", mn: "Хоол" },
  drinks: { en: "Drinks", mn: "Ундаа" },
};

const sections: Section[] = [
  {
    id: "starters",
    title: { en: "Starters", mn: "Зууш" },
    kind: "food",
    items: [
      {
        name: { en: "Oysters, Three Ways", mn: "Хясаа, гурван амтаар" },
        desc: { en: "Mignonette, yuzu ponzu, chili butter", mn: "Миньонет, юзү понзү, чинжүүтэй цөцгийн тос" },
        price: "₮ 12,000 / pc",
      },
      {
        name: { en: "Chawanmushi", mn: "Чаванмүши" },
        desc: { en: "Silken egg custard, prawn, shiitake", mn: "Зөөлөн өндөгний кастард, сам хорхой, шиитакэ" },
        price: "₮ 28,000",
      },
      {
        name: { en: "Tuna Tataki", mn: "Тунец татаки" },
        desc: { en: "Seared loin, ponzu, crisp shallot", mn: "Гадуур шарсан мах, понзү, шаржигнуур сонгино" },
        price: "₮ 42,000",
      },
      {
        name: { en: "Truffle Burrata", mn: "Трюфель бүррата" },
        desc: { en: "Heirloom tomato, basil oil, sourdough", mn: "Улаан лооль, базилын тос, исгэсэн талх" },
        price: "₮ 38,000",
      },
    ],
  },
  {
    id: "seafood",
    title: { en: "Seafood", mn: "Далайн хоол" },
    kind: "food",
    items: [
      {
        name: { en: "Redfin Seafood Platter", mn: "Redfin далайн хоолны хослол" },
        desc: {
          en: "Oysters, king crab, prawns, scallops on ice — for two",
          mn: "Хясаа, хаан хавч, сам хорхой, скаллоп мөсөн дээр — хоёр хүнд",
        },
        price: "₮ 195,000",
        signature: true,
      },
      {
        name: { en: "Grilled Hokkaido Scallops", mn: "Хоккайдо скаллоп гриль" },
        desc: { en: "Brown butter, capers, lemon", mn: "Хүрэн цөцгийн тос, каперс, нимбэг" },
        price: "₮ 68,000",
      },
      {
        name: { en: "Whole Sea Bass", mn: "Бүтэн далайн басс" },
        desc: { en: "Salt-baked, herb oil, charred fennel", mn: "Давсанд шарсан, ногооны тос, шатаасан фенхель" },
        price: "₮ 96,000",
      },
      {
        name: { en: "King Crab Legs", mn: "Хаан хавчийн хөл" },
        desc: { en: "Binchotan-grilled, garlic drawn butter", mn: "Бинчотан нүүрсэн гриль, сармистай цөцгийн тос" },
        price: "₮ 145,000",
      },
    ],
  },
  {
    id: "grill",
    title: { en: "Grill", mn: "Гриль" },
    kind: "food",
    items: [
      {
        name: { en: "28-Day Dry-Aged Ribeye", mn: "28 хоног боловсруулсан рибай" },
        desc: {
          en: "Aged in-house, smoked over apple and cherry wood",
          mn: "Байрандаа боловсруулж, алим болон интоорын модоор утсан",
        },
        price: "₮ 178,000",
        signature: true,
      },
      {
        name: { en: "Matsusaka Wagyu", mn: "Мацүсака Вагью" },
        desc: { en: "A5 grade, sea salt, fresh wasabi — 150g", mn: "A5 зэрэглэл, далайн давс, шинэ васаби — 150гр" },
        price: "₮ 320,000",
      },
      {
        name: { en: "Tomahawk", mn: "Томахоук" },
        desc: { en: "1kg, bone-in, sharing cut", mn: "1кг, ястай, хуваан идэх" },
        price: "₮ 265,000",
      },
      {
        name: { en: "Lamb Rack", mn: "Хурганы хавирга" },
        desc: { en: "Herb crust, smoked eggplant", mn: "Ногооны царцдас, утсан хаш" },
        price: "₮ 112,000",
      },
    ],
  },
  {
    id: "sushi",
    title: { en: "Sushi", mn: "Суши" },
    kind: "food",
    items: [
      {
        name: { en: "Omakase Nigiri, 10 pc", mn: "Омакасэ нигири, 10ш" },
        desc: { en: "Chef's daily selection", mn: "Тогоочийн өдрийн сонголт" },
        price: "₮ 128,000",
        signature: true,
      },
      {
        name: { en: "Toro & Caviar Roll", mn: "Торо & түрс ролл" },
        desc: { en: "Fatty tuna, oscietra, gold leaf", mn: "Өөхлөг тунец, осетра түрс, алтан навч" },
        price: "₮ 98,000",
      },
      {
        name: { en: "Rainbow Roll", mn: "Солонго ролл" },
        desc: { en: "Salmon, tuna, avocado, yuzu mayo", mn: "Хулд, тунец, авокадо, юзү майонез" },
        price: "₮ 62,000",
      },
      {
        name: { en: "Salmon Sashimi", mn: "Хулдны сашими" },
        desc: { en: "Six slices, wasabi, shiso", mn: "Зургаан зүсэм, васаби, шисо" },
        price: "₮ 48,000",
      },
    ],
  },
  {
    id: "pasta",
    title: { en: "Pasta", mn: "Паста" },
    kind: "food",
    items: [
      {
        name: { en: "Lobster Linguine", mn: "Омар лингвини" },
        desc: { en: "Half lobster, tomato bisque, chili", mn: "Хагас омар, улаан лоолийн шөл, чинжүү" },
        price: "₮ 118,000",
      },
      {
        name: { en: "Uni Cream Spaghetti", mn: "Уни цөцгийн спагетти" },
        desc: { en: "Sea urchin, nori butter", mn: "Далайн зараа, нори цөцгийн тос" },
        price: "₮ 92,000",
      },
      {
        name: { en: "Truffle Tagliatelle", mn: "Трюфель тальятелле" },
        desc: { en: "Parmesan cream, seasonal truffle", mn: "Пармезан цөцгий, улирлын трюфель" },
        price: "₮ 86,000",
      },
    ],
  },
  {
    id: "cocktails",
    title: { en: "Cocktails", mn: "Коктейль" },
    kind: "drinks",
    items: [
      {
        name: { en: "Redfin Espresso Martini", mn: "Redfin эспрессо мартини" },
        desc: {
          en: "Double espresso, vanilla vodka, cacao dust, theatrical garnish",
          mn: "Давхар эспрессо, ванилийн архи, какао нунтаг, гайхалтай чимэглэл",
        },
        price: "₮ 34,000",
        signature: true,
      },
      {
        name: { en: "Crimson Negroni", mn: "Улаан негрони" },
        desc: { en: "Blood orange, gin, house vermouth", mn: "Улаан жүрж, жин, гэрийн вермут" },
        price: "₮ 32,000",
      },
      {
        name: { en: "Smoked Old Fashioned", mn: "Утсан Олд Фэшнд" },
        desc: { en: "Cherry wood smoke, bourbon, bitters", mn: "Интоорын модны утаа, бурбон, биттер" },
        price: "₮ 38,000",
      },
      {
        name: { en: "Yuzu Highball", mn: "Юзү хайболл" },
        desc: { en: "Japanese whisky, yuzu, soda", mn: "Япон виски, юзү, сод" },
        price: "₮ 30,000",
      },
      {
        name: { en: "Neon Spritz", mn: "Неон шприц" },
        desc: { en: "Aperol, sparkling wine, grapefruit", mn: "Аперол, бөмбөлөгт дарс, грейпфрут" },
        price: "₮ 28,000",
      },
    ],
  },
  {
    id: "wine",
    title: { en: "Wine & Sake", mn: "Дарс & Сакэ" },
    kind: "drinks",
    items: [
      {
        name: { en: "Champagne by the glass", mn: "Шампанск аягаар" },
        desc: { en: "Brut NV", mn: "Брют NV" },
        price: "₮ 45,000",
      },
      {
        name: { en: "Junmai Daiginjo", mn: "Жүнмай Дайгинжо" },
        desc: { en: "Chilled, 180ml carafe", mn: "Хөргөсөн, 180мл сав" },
        price: "₮ 52,000",
      },
      {
        name: { en: "Sommelier Pairing", mn: "Сомельегийн хослол" },
        desc: { en: "Three glasses matched to your table", mn: "Таны ширээнд тохирсон гурван аяга" },
        price: "₮ 120,000",
      },
    ],
  },
  {
    id: "desserts",
    title: { en: "Desserts", mn: "Амттан" },
    kind: "food",
    items: [
      {
        name: { en: "Matcha Basque Cheesecake", mn: "Матча Баск бяслагтай бялуу" },
        desc: { en: "Burnt top, black sesame cream", mn: "Шатаасан гадаргуу, хар кунжутны цөцгий" },
        price: "₮ 32,000",
      },
      {
        name: { en: "Dark Chocolate Fondant", mn: "Хар шоколадан фондан" },
        desc: { en: "Salted caramel, vanilla ice cream", mn: "Давслаг карамель, ванилийн зайрмаг" },
        price: "₮ 34,000",
      },
      {
        name: { en: "Yuzu Sorbet", mn: "Юзү сорбет" },
        desc: { en: "Citrus, mint, prosecco splash", mn: "Цитрус, ганga мята, просекко" },
        price: "₮ 24,000",
      },
    ],
  },
];

const tabs = [
  { id: "all", label: { en: "All", mn: "Бүгд" } },
  { id: "food", label: { en: "Food", mn: "Хоол" } },
  { id: "drinks", label: { en: "Drinks", mn: "Ундаа" } },
] as const;

function MenuPage() {
  const { t } = useLang();
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("all");
  const visible = sections.filter((s) => tab === "all" || s.kind === tab);

  return (
    <div>
      <section className="relative overflow-hidden">
        <img
          src={loungeAsset.url}
          alt="Redfin lounge interior"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/85 to-background" />
        <div className="relative mx-auto max-w-7xl px-5 pt-36 pb-16 lg:px-8">
          <p className="eyebrow">{t({ en: "Japanese × European", mn: "Япон × Европ" })}</p>
          <h1 className="mt-4 text-5xl sm:text-7xl">{t({ en: "The Menu", mn: "Цэс" })}</h1>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            {t({
              en: "Daily seafood, in-house dry-aged beef and a bar that takes garnish seriously. Prices in Mongolian tögrög.",
              mn: "Өдөр бүрийн далайн хоол, байрандаа боловсруулсан үхрийн мах, чимэглэлээ нухацтай авч үздэг бар. Үнэ төгрөгөөр.",
            })}
          </p>
        </div>
      </section>

      <div className="sticky top-[68px] z-40 border-y border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 lg:px-8">
          {tabs.map((tb) => (
            <button
              key={tb.id}
              onClick={() => setTab(tb.id)}
              className={`shrink-0 border px-5 py-2 text-xs tracking-[0.22em] uppercase transition-colors ${
                tab === tb.id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
              }`}
            >
              {t(tb.label)}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        {visible.map((section) => (
          <section key={section.id} className="mb-20 last:mb-0">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-4xl sm:text-5xl">{t(section.title)}</h2>
              <span className="hidden text-xs tracking-[0.3em] text-muted-foreground uppercase sm:block">
                {t(kindLabel[section.kind])}
              </span>
            </div>
            <div className="hairline-gold mt-4" />
            <div className="mt-8 grid gap-x-14 gap-y-7 md:grid-cols-2">
              {section.items.map((item) => (
                <div
                  key={item.name.en}
                  className="group border-b border-border/60 pb-5 transition-colors hover:border-primary/60"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="flex min-w-0 items-center gap-2 text-xl">
                      <span className="truncate transition-colors group-hover:text-primary">
                        {t(item.name)}
                      </span>
                      {item.signature && (
                        <Star
                          className="size-3.5 shrink-0 fill-gold text-gold"
                          aria-label="Signature"
                        />
                      )}
                    </h3>
                    <span className="shrink-0 font-sans text-sm text-gold">{item.price}</span>
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground">{t(item.desc)}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
