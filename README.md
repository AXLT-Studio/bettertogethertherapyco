# Better Together Therapy

An initial website outline for a group therapy practice offering in-person therapy in Leander, TX, and online therapy throughout Texas and Colorado. Built with the existing Next.js App Router, TypeScript, and Tailwind CSS setup; no additional project dependencies.

## Development

```bash
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
npm run start
```

If your environment restricts Turbopack's internal port binding, use `npm run build -- --webpack` or `npm run dev -- --webpack`. The existing Geist font uses `next/font/google` and requires network access when first built. Georgia is the temporary heading font.

## Structure

- `src/app/page.tsx` — homepage, in the requested section order.
- `src/app/layout.tsx` — shared header, skip link, main landmark, footer, and metadata.
- `src/app/globals.css` — Tailwind import, temporary design tokens, and responsive shared component styles.
- `src/components/` — header/mobile navigation, hero, cards, insurance strip, FAQ accordion, closing CTA, footer, and basic typography/link components.
- `src/lib/content.ts` — navigation, audiences, services, therapists, FAQs, and practice values.
- `public/images/therapists/` — supplied headshots, shared across founder sections, team cards, and profiles through `TherapistPortrait` and each therapist's `portrait` entry.

The service and therapist detail pages use `[slug]` routes with `generateStaticParams`. Add an entry to the corresponding content array to add a card and a profile/service route. Unknown slugs return a 404.

## Routes

- `/`
- `/about`
- `/therapists`
- `/therapists/samantha-serbin`
- `/therapists/shelly-kessinger`
- `/services`
- `/services/anxiety`
- `/services/depression`
- `/services/child-adolescent-therapy`
- `/services/family-dynamics`
- `/services/life-transitions`
- `/insurance-rates`
- `/faq`
- `/contact`
- `/privacy` — additional placeholder so the footer privacy link has a destination.

Audience links go to the matching sections on `/services`. Consultation CTAs go to `/contact#consultation`. FAQs use native `details`/`summary`; mobile navigation supports keyboard use, Escape, outside clicks, and closing when navigating.

## Content still to confirm

This is a structural draft, not a launch-ready practice website. Samantha's and Shelly's supplied headshots are in place; the hero image remains a labeled placeholder. The palette and serif typography are provisional.

- Verify insurance participation; the four carrier names are examples, not accepted-plan claims.
- Add session fees, lengths, appointment availability, and in-person/virtual eligibility details.
- Confirm therapist biographies and specialties. Samantha's supplied LPC credential and education background are included; Shelly's credentials are not assumed.
- Supply office address, phone, email, social destinations, and an approved privacy policy.
- Connect the consultation scheduling destination. The contact page currently explains the intended flow; it has no submission form, backend, or appointment collection.

Replace these placeholders before publishing. No analytics or external booking integration has been added.
