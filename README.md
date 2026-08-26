# Redfin Lounge Redesign

Project Brief

Build a modern, upscale multi-page website for Redfin Seafood & Grill Lounge, a seafood-and-cocktails lounge restaurant in Ulaanbaatar, Mongolia. The brand feels like a sleek nightlife-meets-fine-dining destination — think LED-lit lounge energy combined with elevated seafood dining. It's a go-to spot for date nights, celebrations, and upscale hangouts.

Brand & Visual Identity

Color theme: Red and black as the primary palette. Use deep matte black (#0D0D0D or similar) as the dominant background, with a bold accent red (#C41E3A or #8B0000-style crimson) for CTAs, highlights, and accents. Add a subtle metallic gold or warm amber as a tertiary accent for a luxury touch (used sparingly — on dividers, icons, or small details).

Typography: Pair an elegant serif (for headings — think editorial/luxury restaurant branding) with a clean modern sans-serif (for body text and UI elements).

Mood: Moody, upscale, nightlife-lounge sophistication. Dark backgrounds with high-contrast lighting effects, subtle gradients, and glowing red accents (like neon/LED signage) to evoke the in-person "stage and LED screen" ambiance.

Imagery style: Use high-quality placeholder images/gradients suggesting: plated seafood dishes, craft cocktails (especially espresso martinis) with dramatic garnish presentation, moody interior shots with ambient lighting, sushi close-ups.

Site Structure (separate pages/routes)

1. Home / Landing Page

Hero section with a striking full-bleed image/video background, restaurant name, a short tagline capturing the elevated lounge + seafood concept, and two prominent CTAs: "Reserve a Table" and "View Menu"

Brief "About" section describing the concept: seafood, hand-crafted cocktails, live LED/stage ambiance, perfect for date nights, celebrations, and gatherings

Highlights/features section (3-4 cards): Fresh Seafood, Craft Cocktails, Elegant Atmosphere, Live Lounge Experience

Testimonials/reviews section — paraphrase guest sentiment in your own words (do not need exact quotes), covering themes like: consistently great seafood, standout espresso martinis and cocktail presentation, elegant date-night atmosphere, friendly attentive service, popular for celebrations and family gatherings, a favorite for both casual dinners and special occasions

Star rating badge (4.8/5 from 127+ reviews) displayed prominently

Footer with location, hours, contact info, social links, and a map embed placeholder

2. Reservation Page (dedicated page — priority feature)

This is the most important functional page. Build a clean, intuitive booking interface including:

Calendar date picker — visually styled to match the red/black theme, showing available dates

Time slot selector — grid or dropdown of available reservation times for the selected date

Number of guests selector — stepper or dropdown (e.g., 1–12+, with a note to call for larger parties)

Guest details form — name, phone number, email, optional special requests field (e.g., birthday, allergies, seating preference)

Confirmation step/summary showing selected date, time, and guest count before submitting

Clear visual feedback for selected date/time (e.g., highlighted in red against the black UI)

Mobile-responsive layout since many guests will book from their phones

3. Menu Page (dedicated page, separate from reservations)

Organized into clear categories (e.g., Starters, Seafood, Grill, Sushi, Pasta, Cocktails, Desserts)

Each item with name, short description, and price placeholder

Highlight signature items: espresso martini and other craft cocktails, fresh seafood platters, sushi selections

Visually elegant layout — could use a two-column list style or card grid, consistent with the red/black luxury theme

Optional: filter/tab navigation between food and drink menus

Functional Requirements

Fully responsive (mobile, tablet, desktop)

Sticky/fixed navigation bar with links to Home, Menu, Reservations, and Contact/Location

Smooth scroll and subtle hover/transition animations for a polished feel

Reservation form should validate required fields (date, time, guest count, contact info) before allowing submission

Accessible color contrast despite the dark theme (ensure text remains readable)

Tone & Copy Guidance

Confident, warm, and slightly upscale — avoid overly formal or stiff language

Emphasize: fresh seafood, expertly crafted cocktails, elegant ambiance, ideal for date nights and celebrations

Keep copy concise; let the visuals and layout carry the luxury feel

Note: Replace placeholder images with real photography from the restaurant, and connect the reservation form to a real backend/booking system (e.g., a database, email notification, or third-party booking API) once the design is finalized.


use the attached images to the HERO page and other

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6351904e-aae7-4476-bb22-32189ad252ab).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
