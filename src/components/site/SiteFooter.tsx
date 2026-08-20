import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MapPin, Phone, Clock, Mail } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useLang();

  return (
    <footer id="contact" className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-primary px-2 py-0.5 font-display text-xl leading-none text-primary-foreground">
              Red
            </span>
            <span className="font-display text-xl">fin</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {t({
              en: "Seafood, fire-grilled steak and hand-crafted cocktails under the glow of Ulaanbaatar's most atmospheric lounge.",
              mn: "Далайн хоол, галын гриль стейк болон гар аргаар бэлтгэсэн коктейлүүд — Улаанбаатарын хамгийн онцгой уур амьсгалтай лаунжид.",
            })}
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Facebook className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="eyebrow">{t({ en: "Find us", mn: "Бидний байршил" })}</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              {t({
                en: "International Trade Center, 2nd floor, Ulaanbaatar, Mongolia",
                mn: "Интернэшнл Трэйд Төв, 2 давхар, Улаанбаатар, Монгол",
              })}
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href="tel:75752277" className="hover:text-foreground">
                7575-2277 #3
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href="mailto:hello@redfin.mn" className="hover:text-foreground">
                hello@redfin.mn
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">{t({ en: "Hours", mn: "Цагийн хуваарь" })}</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>
                {t({ en: "Mon – Thu", mn: "Да – Пү" })} · 11:00 – 23:00
                <br />
                {t({ en: "Fri – Sat", mn: "Ба – Бя" })} · 11:00 – 02:00
                <br />
                {t({ en: "Sunday", mn: "Ням" })} · 12:00 – 23:00
              </span>
            </li>
          </ul>
          <div className="mt-6 flex flex-col gap-2 text-sm">
            <Link to="/menu" className="text-muted-foreground hover:text-primary">
              {t({ en: "Menu", mn: "Цэс" })}
            </Link>
            <Link to="/reservations" className="text-muted-foreground hover:text-primary">
              {t({ en: "Reservations", mn: "Ширээ захиалах" })}
            </Link>
          </div>
        </div>

        <div>
          <h3 className="eyebrow">{t({ en: "Location", mn: "Байршил" })}</h3>
          <div className="mt-4 aspect-4/3 w-full overflow-hidden border border-border">
            <iframe
              title="Redfin Seafood & Grill Lounge location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=106.905%2C47.910%2C106.930%2C47.925&layer=mapnik"
              className="size-full opacity-80 grayscale"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Redfin Seafood &amp; Grill Lounge.{" "}
        {t({ en: "All rights reserved.", mn: "Бүх эрх хуулиар хамгаалагдсан." })}
      </div>
    </footer>
  );
}
