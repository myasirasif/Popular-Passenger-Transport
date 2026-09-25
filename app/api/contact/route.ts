import { NextResponse } from "next/server";
import { services } from "@/lib/site-config";

type Payload = Record<string, string | undefined>;

const clean = (v: unknown, max = 500) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const data = {
    name: clean(body.name, 120),
    company: clean(body.company, 120),
    phone: clean(body.phone, 40),
    email: clean(body.email, 160),
    service: services.find((s) => s.slug === body.service)?.title ?? "",
    passengers: clean(body.passengers, 5),
    date: clean(body.date, 20),
    pickup: clean(body.pickup, 200),
    dropoff: clean(body.dropoff, 200),
    message: clean(body.message, 2000),
  };

  if (data.name.length < 2 || !/^\+?[\d\s()-]{7,}$/.test(data.phone) || !/^\S+@\S+\.\S+$/.test(data.email) || !data.service) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 422 });
  }

  // TODO: deliver the enquiry. Pick one and add the key to .env.local / Vercel env:
  //   Resend: RESEND_API_KEY + CONTACT_TO_EMAIL, then
  //     await new Resend(process.env.RESEND_API_KEY).emails.send({ from, to, subject, text })
  //   SMTP (nodemailer): SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL
  // Until then enquiries are only logged on the server.
  console.info("[contact] new enquiry", data);

  return NextResponse.json({ ok: true });
}
