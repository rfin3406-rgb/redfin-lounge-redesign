import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
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

function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-5 pt-36 pb-24 lg:px-8">
      <p className="eyebrow">Find us</p>
      <h1 className="mt-4 text-5xl sm:text-6xl">Contact &amp; Location</h1>
      <div className="hairline-gold mt-8 w-40" />

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          {[
            {
              icon: MapPin,
              title: "Address",
              body: "International Trade Center, 2nd floor\nUlaanbaatar, Mongolia",
            },
            { icon: Phone, title: "Phone", body: "7575-2277 #3" },
            { icon: Mail, title: "Email", body: "hello@redfin.mn" },
            {
              icon: Clock,
              title: "Opening hours",
              body: "Mon – Thu · 11:00 – 23:00\nFri – Sat · 11:00 – 02:00\nSunday · 12:00 – 23:00",
            },
            {
              icon: Users,
              title: "Private events",
              body: "Up to 100 seated · 200 standing\nTwo VIP rooms (up to 10) and a separate smoking lounge.",
            },
          ].map((c) => (
            <div key={c.title} className="surface-card flex gap-5 p-6">
              <c.icon className="mt-1 size-5 shrink-0 text-primary" />
              <div className="min-w-0">
                <h2 className="text-xl">{c.title}</h2>
                <p className="mt-1 text-sm whitespace-pre-line text-muted-foreground">{c.body}</p>
              </div>
            </div>
          ))}
          <Button asChild size="lg" className="glow-red rounded-none tracking-[0.18em] uppercase">
            <Link to="/reservations">Reserve a Table</Link>
          </Button>
        </div>

        <div className="space-y-6">
          <div className="aspect-square w-full overflow-hidden border border-border">
            <iframe
              title="Map to Redfin Seafood & Grill Lounge"
              src="https://www.openstreetmap.org/export/embed.html?bbox=106.905%2C47.910%2C106.930%2C47.925&layer=mapnik"
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
