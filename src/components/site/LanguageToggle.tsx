import { useLang, type Lang } from "@/lib/i18n";

const options: { id: Lang; label: string }[] = [
  { id: "en", label: "EN" },
  { id: "mn", label: "МН" },
];

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label="Language / Хэл"
      className={`inline-flex shrink-0 border border-border ${className}`}
    >
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          onClick={() => setLang(o.id)}
          aria-pressed={lang === o.id}
          className={`px-2.5 py-1 text-[0.65rem] tracking-[0.2em] uppercase transition-colors ${
            lang === o.id
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
