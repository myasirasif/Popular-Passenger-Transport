# Popular Passenger Transport, website

Next.js 15 (App Router) + TypeScript + Tailwind v4 + Framer Motion + lucide-react.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
```

- All company data: `lib/site-config.ts`
- Logo and mark: `components/brand/` (favicon: `app/icon.svg`)
- Images: `public/images/` (free-licence stock, see its README and `/credits`)
- Enquiry form API: `app/api/contact/route.ts`

## Open TODOs before going live
- `lib/site-config.ts`: WhatsApp **mobile** number (a landline can't receive WhatsApp), email address, office hours, live domain (`NEXT_PUBLIC_SITE_URL`), Hiace seat count.
- `app/api/contact/route.ts`: add a Resend or SMTP key so enquiries get emailed. Right now they're only logged.
- Replace the stock photos with the company's own fleet photos.

Deploy on Vercel. `/api/contact` needs a server runtime, so `output: "export"` isn't used. To host as a fully static site, point the form at an external endpoint (Formspree, a Resend worker) and enable export.
