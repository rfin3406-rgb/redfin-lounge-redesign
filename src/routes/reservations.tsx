import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarDays, Clock, Users, Check, Phone, Mail, User, MessageSquare } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import barAsset from "@/assets/image.png.asset.json";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reserve a Table — Redfin Seafood & Grill Lounge" },
      {
        name: "description",
        content:
          "Book your table at Redfin Seafood & Grill Lounge in Ulaanbaatar. Choose your date, time and party size in under a minute.",
      },
      { property: "og:title", content: "Reserve a Table — Redfin Seafood & Grill Lounge" },
      {
        property: "og:description",
        content: "Pick a date, time and party size and reserve your table at Redfin.",
      },
    ],
  }),
  component: Reservations,
});

const TIME_SLOTS = [
  "11:30", "12:00", "12:30", "13:00", "13:30", "14:00",
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
  "20:00", "20:30", "21:00", "21:30", "22:00", "22:30",
];

const GUESTS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12+"];

const detailsSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100, "Name is too long"),
  phone: z
    .string()
    .trim()
    .min(6, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[+0-9()\-\s]+$/, "Phone can only contain digits and + ( ) -"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  occasion: z.string().trim().max(60, "Keep it under 60 characters").optional(),
  notes: z.string().trim().max(500, "Notes must be under 500 characters").optional(),
});

type Details = z.infer<typeof detailsSchema>;
type Errors = Partial<Record<keyof Details, string>>;

function Reservations() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState<string>();
  const [guests, setGuests] = useState<string>();
  const [details, setDetails] = useState<Details>({
    name: "",
    phone: "",
    email: "",
    occasion: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [confirmed, setConfirmed] = useState(false);

  const set = (key: keyof Details) => (v: string) => {
    setDetails((d) => ({ ...d, [key]: v }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = detailsSchema.safeParse(details);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        next[issue.path[0] as keyof Details] = issue.message;
      }
      setErrors(next);
      return;
    }
    if (!date || !time || !guests) return;
    setConfirmed(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const ready = Boolean(date && time && guests);

  if (confirmed && date && time && guests) {
    return (
      <div className="mx-auto max-w-2xl px-5 pt-40 pb-28 lg:px-8">
        <div className="surface-card glow-red p-10 text-center">
          <div className="mx-auto grid size-14 place-items-center rounded-full bg-primary">
            <Check className="size-7 text-primary-foreground" />
          </div>
          <p className="eyebrow mt-6">Reservation confirmed</p>
          <h1 className="mt-3 text-4xl">See you soon, {details.name.split(" ")[0]}</h1>
          <p className="mt-4 text-sm text-muted-foreground">
            A confirmation has been sent to {details.email}. Tables are held for 15 minutes past the
            booking time.
          </p>
          <div className="hairline-gold my-8" />
          <dl className="grid gap-4 text-left sm:grid-cols-2">
            {[
              ["Date", format(date, "EEEE, d MMMM yyyy")],
              ["Time", time],
              ["Guests", guests === "12+" ? "12 or more" : guests],
              ["Name", details.name],
              ["Phone", details.phone],
              ["Occasion", details.occasion || "—"],
            ].map(([k, v]) => (
              <div key={k} className="border-b border-border/60 pb-3">
                <dt className="text-[0.65rem] tracking-[0.25em] text-muted-foreground uppercase">
                  {k}
                </dt>
                <dd className="mt-1 text-sm">{v}</dd>
              </div>
            ))}
          </dl>
          {details.notes && (
            <p className="mt-6 text-left text-sm text-muted-foreground">
              <span className="text-[0.65rem] tracking-[0.25em] uppercase">Notes</span>
              <br />
              {details.notes}
            </p>
          )}
          <Button
            variant="outline"
            className="mt-9 rounded-none tracking-[0.18em] uppercase"
            onClick={() => {
              setConfirmed(false);
              setDate(undefined);
              setTime(undefined);
              setGuests(undefined);
              setDetails({ name: "", phone: "", email: "", occasion: "", notes: "" });
            }}
          >
            Make another booking
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="relative overflow-hidden">
        <img
          src={barAsset.url}
          alt="The red-lit bar at Redfin"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/85 to-background" />
        <div className="relative mx-auto max-w-7xl px-5 pt-36 pb-14 lg:px-8">
          <p className="eyebrow">Bookings</p>
          <h1 className="mt-4 text-5xl sm:text-7xl">Reserve a Table</h1>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            Choose a date, pick your seating time and tell us who's coming. For groups over 12 or VIP
            rooms, call 7575-2277 #3.
          </p>
        </div>
      </section>

      <form onSubmit={handleSubmit} className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-8">
            {/* Date */}
            <section className="surface-card p-7">
              <h2 className="flex items-center gap-3 text-2xl">
                <CalendarDays className="size-5 text-primary" /> 1 · Select a date
              </h2>
              <div className="mt-5 flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={{ before: today }}
                  className="pointer-events-auto"
                />
              </div>
            </section>

            {/* Time */}
            <section className="surface-card p-7">
              <h2 className="flex items-center gap-3 text-2xl">
                <Clock className="size-5 text-primary" /> 2 · Choose a time
              </h2>
              <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-6">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setTime(slot)}
                    className={`border py-2.5 text-sm transition-colors ${
                      time === slot
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </section>

            {/* Guests */}
            <section className="surface-card p-7">
              <h2 className="flex items-center gap-3 text-2xl">
                <Users className="size-5 text-primary" /> 3 · Party size
              </h2>
              <div className="mt-5 grid grid-cols-4 gap-2 sm:grid-cols-6">
                {GUESTS.map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGuests(g)}
                    className={`border py-2.5 text-sm transition-colors ${
                      guests === g
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </section>

            {/* Details */}
            <section className="surface-card p-7">
              <h2 className="flex items-center gap-3 text-2xl">
                <User className="size-5 text-primary" /> 4 · Your details
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <Field
                  id="name"
                  label="Full name"
                  icon={User}
                  value={details.name}
                  onChange={set("name")}
                  error={errors.name}
                  placeholder="Bat-Erdene S."
                />
                <Field
                  id="phone"
                  label="Phone"
                  icon={Phone}
                  value={details.phone}
                  onChange={set("phone")}
                  error={errors.phone}
                  placeholder="+976 9911 2233"
                />
                <Field
                  id="email"
                  label="Email"
                  icon={Mail}
                  value={details.email}
                  onChange={set("email")}
                  error={errors.email}
                  placeholder="you@example.com"
                  type="email"
                />
                <Field
                  id="occasion"
                  label="Occasion (optional)"
                  icon={MessageSquare}
                  value={details.occasion ?? ""}
                  onChange={set("occasion")}
                  error={errors.occasion}
                  placeholder="Birthday, anniversary…"
                />
                <div className="sm:col-span-2">
                  <Label htmlFor="notes" className="text-xs tracking-[0.2em] uppercase">
                    Special requests
                  </Label>
                  <Textarea
                    id="notes"
                    rows={4}
                    maxLength={500}
                    value={details.notes ?? ""}
                    onChange={(e) => set("notes")(e.target.value)}
                    placeholder="Allergies, seating preference, cake…"
                    className="mt-2 rounded-none bg-background/60"
                  />
                  {errors.notes && <p className="mt-1.5 text-xs text-destructive">{errors.notes}</p>}
                </div>
              </div>
            </section>
          </div>

          {/* Summary */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="surface-card p-7">
              <p className="eyebrow">Your reservation</p>
              <h2 className="mt-3 text-3xl">Summary</h2>
              <div className="hairline-gold my-6" />
              <dl className="space-y-4 text-sm">
                {[
                  ["Date", date ? format(date, "EEE, d MMM yyyy") : "Not selected"],
                  ["Time", time ?? "Not selected"],
                  ["Guests", guests ? (guests === "12+" ? "12 or more" : guests) : "Not selected"],
                  ["Name", details.name || "—"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-border/60 pb-3">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="text-right">{v}</dd>
                  </div>
                ))}
              </dl>
              <Button
                type="submit"
                size="lg"
                disabled={!ready}
                className="glow-red mt-7 w-full rounded-none tracking-[0.18em] uppercase disabled:opacity-40 disabled:shadow-none"
              >
                Confirm reservation
              </Button>
              {!ready && (
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Select a date, time and party size to continue.
                </p>
              )}
            </div>
          </aside>
        </div>
      </form>
    </div>
  );
}

function Field({
  id,
  label,
  icon: Icon,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  onChange: (v: string) => void;
  error?: string | undefined;
  placeholder?: string | undefined;
  type?: string | undefined;
}) {
  return (
    <div>
      <Label htmlFor={id} className="text-xs tracking-[0.2em] uppercase">
        {label}
      </Label>
      <div className="relative mt-2">
        <Icon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={Boolean(error)}
          className="rounded-none bg-background/60 pl-9"
        />
      </div>
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
