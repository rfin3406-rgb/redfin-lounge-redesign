import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang, type Copy } from "@/lib/i18n";
import loungeAsset from "@/assets/image-2.png.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location — Redfin Seafood & Grill Lounge" },
      {
        name: "description",
        content:
          "Find Redfin Seafood & Grill Lounge at the International Trade Center, 2nd floor, Ulaanbaatar. Hours, phone, private events and VIP rooms.",
      },
      { property: "og:title", content: "Contact & Location — Redfin Seafood & Grill Lounge" },
      {
        property: "og:description",
        content: "Hours, address and private event enquiries for Redfin in Ulaanbaatar.",
      },
    ],
  }),
  component: Contact,
});

const cards: { icon: typeof MapPin; title: Copy; body: Copy }[] = [
  {
    icon: MapPin,
    title: { en: "Address", mn: "Хаяг" },
    body: {
      en: "International Trade Center, 2nd floor\nUlaanbaatar, Mongolia",
      mn: "Интернэшнл Трэйд Төв, 2 давхар\nУлаанбаатар, Монгол",
    },
  },
  { icon: Phone, title: { en: "Phone", mn: "Утас" }, body: { en: "7575-2277 #3", mn: "7575-2277 #3" } },
  {
    icon: Mail,
    title: { en: "Email", mn: "И-мэйл" },
    body: { en: "hello@redfin.mn", mn: "hello@redfin.mn" },
  },
  {
    icon: Clock,
    title: { en: "Opening hours", mn: "Ажиллах цаг" },
    body: {
      en: "Mon – Thu · 11:00 – 23:00\nFri – Sat · 11:00 – 02:00\nSunday · 12:00 – 23:00",
      mn: "Да – Пү · 11:00 – 23:00\nБа – Бя · 11:00 – 02:00\nНям · 12:00 – 23:00",
    },
  },
  {
    icon: Users,
    title: { en: "Private events", mn: "Хувийн арга хэмжээ" },
    body: {
      en: "Up to 100 seated · 200 standing\nTwo VIP rooms (up to 10) and a separate smoking lounge.",
      mn: "100 хүртэл суудалтай · 200 зогсоо\nХоёр VIP өрөө (10 хүртэл хүн), тусдаа тамхины лаунж.",
    },
  },
];

function Contact() {
  const { t } = useLang();

  return (
    <div className="mx-auto max-w-7xl px-5 pt-36 pb-24 lg:px-8">
      <p className="eyebrow">{t({ en: "Find us", mn: "Бидний байршил" })}</p>
      <h1 className="mt-4 text-5xl sm:text-6xl">
        {t({ en: "Contact & Location", mn: "Холбоо барих & Байршил" })}
      </h1>
      <div className="hairline-gold mt-8 w-40" />

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          {cards.map((c) => (
            <div key={c.title.en} className="surface-card flex gap-5 p-6">
              <c.icon className="mt-1 size-5 shrink-0 text-primary" />
              <div className="min-w-0">
                <h2 className="text-xl">{t(c.title)}</h2>
                <p className="mt-1 text-sm whitespace-pre-line text-muted-foreground">{t(c.body)}</p>
              </div>
            </div>
          ))}
          <Button asChild size="lg" className="glow-red rounded-none tracking-[0.18em] uppercase">
            <Link to="/reservations">{t({ en: "Reserve a Table", mn: "Ширээ захиалах" })}</Link>
          </Button>
        </div>

        <div className="space-y-6">
          <div className="aspect-square w-full overflow-hidden border border-border">
            <iframe
              title="Map to Redfin Seafood & Grill Lounge"
              src="https://www.openstreetmap.org/export/embed.html?bbox=106.9086%2C47.9096%2C106.9326%2C47.9216&layer=mapnik&marker=47.9156%2C106.9206"
              className="size-full opacity-85 grayscale"
              loading="lazy"
            />
          </div>
          <img
            src={loungeAsset.url}
            alt="Redfin lounge interior"
            loading="lazy"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
