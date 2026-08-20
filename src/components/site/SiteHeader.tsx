import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang, type Copy } from "@/lib/i18n";
import { LanguageToggle } from "@/components/site/LanguageToggle";

const links: { to: string; label: Copy }[] = [
  { to: "/", label: { en: "Home", mn: "Нүүр" } },
  { to: "/menu", label: { en: "Menu", mn: "Цэс" } },
  { to: "/reservations", label: { en: "Reservations", mn: "Захиалга" } },
  { to: "/contact", label: { en: "Contact", mn: "Холбоо барих" } },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 border-b border-border backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <span className="bg-primary px-2 py-0.5 font-display text-xl leading-none text-primary-foreground">
            Red
          </span>
          <span className="truncate font-display text-xl tracking-wide">fin</span>
          <span className="hidden truncate text-[0.62rem] tracking-[0.3em] text-muted-foreground uppercase sm:block">
            {t({ en: "Seafood & Grill Lounge", mn: "Далайн хоол & Грилл Лаунж" })}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="text-xs tracking-[0.2em] uppercase transition-colors hover:text-primary"
            >
              {t(l.label)}
            </Link>
          ))}
          <LanguageToggle />
          <Button asChild size="sm" className="rounded-none tracking-[0.15em] uppercase">
            <Link to="/reservations">{t({ en: "Reserve", mn: "Захиалах" })}</Link>
          </Button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="shrink-0 p-2 text-foreground"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background/95 px-5 py-4 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm tracking-[0.2em] uppercase text-muted-foreground"
            >
              {t(l.label)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
