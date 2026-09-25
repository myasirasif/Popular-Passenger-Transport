import {
  Briefcase,
  Bus,
  CalendarHeart,
  GraduationCap,
  Plane,
  Route,
  type LucideIcon,
} from "lucide-react";

// Single source of truth for all company data. Edit here, not in components.

export const siteConfig = {
  name: "Popular Passenger Transport L.L.C",
  shortName: "Popular Passenger Transport",
  tagline: "Moving Dubai, Every Single Day",
  subline: "Reliable buses and vans for staff, schools and events across the UAE",
  experienceYears: 7,
  experience: "Serving Dubai for over 7 years",

  // TODO: replace with the live domain once registered.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://popularpassengertransport.ae",

  rating: { value: 4.6, count: 16, source: "Google" },

  address: {
    line1: "18, Al Makati Building, 12th C Street",
    line2: "Opposite Karama Centre, Bur Dubai",
    street: "18, Al Makati Building, 12th C Street, Opposite Karama Centre",
    locality: "Bur Dubai",
    city: "Dubai",
    country: "UAE",
    countryCode: "AE",
    poBox: "122192, Dubai",
    geo: { lat: 25.2475, lng: 55.3048 },
  },

  phone: { display: "+971 4 397 7240", tel: "+97143977240" },

  // TODO: confirm the WhatsApp mobile number with the client. A landline
  // cannot receive WhatsApp messages; replace `number` with the mobile (digits only).
  whatsapp: { display: "+971 4 397 7240", number: "97143977240" },

  // TODO: placeholder address, confirm the real enquiry email with the client.
  email: "info@popularpassengertransport.ae",

  // TODO: confirm exact office hours with the client.
  hours: [
    { days: "Monday to Saturday", time: "8:00 am to 8:00 pm" },
    { days: "Sunday", time: "Bookings by phone" },
  ],
  operatingNote: "Transport runs 7 days a week",

  mapEmbed:
    "https://www.google.com/maps?q=Al+Makati+Building+Karama+Centre+Bur+Dubai&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Al+Makati+Building+Opposite+Karama+Centre+Bur+Dubai",
} as const;

export const whatsappLink = (text = "Hello, I would like a quote for bus hire.") =>
  `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(text)}`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/fleet", label: "Fleet" },
  { href: "/contact", label: "Contact" },
] as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "staff-transportation",
    title: "Staff Transportation",
    short:
      "Daily pick and drop contracts for offices, factories and labour accommodation across Dubai and the Northern Emirates.",
    icon: Briefcase,
    image: "/images/service-staff.jpg",
    imageAlt: "Staff boarding a company shuttle bus in Dubai",
    points: [
      "Fixed daily routes and shift-based schedules",
      "Offices, factories and labour accommodation",
      "Dubai, Sharjah, Ajman and the Northern Emirates",
      "Monthly and annual contracts",
    ],
  },
  {
    slug: "school-transport",
    title: "School Transport",
    short: "Licensed drivers and supervised routes for schools and nurseries.",
    icon: GraduationCap,
    image: "/images/service-school.jpg",
    imageAlt: "School bus on a supervised morning route in Dubai",
    points: [
      "Licensed, experienced drivers",
      "Supervised pick-up and drop-off routes",
      "Term-time and trip-based arrangements",
      "Field trips and school events",
    ],
  },
  {
    slug: "bus-van-rental",
    title: "Bus and Van Rental",
    short: "Hourly, daily and monthly hire with or without driver.",
    icon: Bus,
    image: "/images/service-rental.jpg",
    imageAlt: "Toyota Hiace passenger van ready for rental",
    points: [
      "Hourly, daily and monthly hire",
      "Van rental with driver, or without",
      "Vans, coasters and 50 seater coaches",
      "Air-conditioned, well-maintained vehicles",
    ],
  },
  {
    slug: "airport-transfers",
    title: "Airport Transfers",
    short: "DXB and DWC pickups and drop-offs, group arrivals handled.",
    icon: Plane,
    image: "/images/service-airport.jpg",
    imageAlt: "Passenger van waiting for a group arrival at Dubai airport",
    points: [
      "Dubai International (DXB) and Al Maktoum (DWC)",
      "Meet-and-greet for group arrivals",
      "Luggage space on every vehicle",
      "Early morning and late night flights",
    ],
  },
  {
    slug: "event-group-charter",
    title: "Event and Group Charter",
    short: "Weddings, conferences, exhibitions and corporate outings.",
    icon: CalendarHeart,
    image: "/images/service-events.jpg",
    imageAlt: "Coach parked outside a Dubai conference venue",
    points: [
      "Weddings and private celebrations",
      "Conferences and exhibitions",
      "Corporate outings and team days",
      "Multi-vehicle shuttle loops",
    ],
  },
  {
    slug: "intercity-gcc",
    title: "Intercity and GCC Trips",
    short: "Dubai to Abu Dhabi, Muscat and other cross-border routes on request.",
    icon: Route,
    image: "/images/service-intercity.jpg",
    imageAlt: "Coach travelling on a UAE highway",
    points: [
      "Dubai to Abu Dhabi and across the UAE",
      "Muscat and cross-border routes on request",
      "Comfortable coaches for long distances",
      "Round trips and one-way transfers",
    ],
  },
];

export type FleetCategory = "Vans" | "Coasters" | "Coaches";

export type Vehicle = {
  id: string;
  name: string;
  category: FleetCategory;
  seats: string;
  image: string;
  imageAlt: string;
  features: string[];
};

export const fleet: Vehicle[] = [
  {
    id: "hiace",
    name: "Toyota Hiace Passenger Van",
    category: "Vans",
    seats: "Up to 14 seats",
    image: "/images/fleet-hiace-01.jpg",
    imageAlt: "Toyota Hiace passenger van",
    features: ["Air conditioned", "Luggage space", "Driver included"],
  },
  {
    id: "hiace-highroof",
    name: "Toyota Hiace High Roof",
    category: "Vans",
    seats: "Up to 14 seats",
    image: "/images/fleet-hiace-02.jpg",
    imageAlt: "Toyota Hiace high roof van",
    features: ["Air conditioned", "Standing headroom", "Driver included"],
  },
  {
    id: "coaster-26",
    name: "Coaster Bus",
    category: "Coasters",
    seats: "26 seats",
    image: "/images/fleet-coaster-01.jpg",
    imageAlt: "26 seater coaster bus",
    features: ["Air conditioned", "Luggage space", "Driver included"],
  },
  {
    id: "coaster-35",
    name: "Coaster Bus",
    category: "Coasters",
    seats: "35 seats",
    image: "/images/fleet-coaster-02.jpg",
    imageAlt: "35 seater coaster bus",
    features: ["Air conditioned", "Luggage space", "Driver included"],
  },
  {
    id: "coach-50",
    name: "Full-size Coach",
    category: "Coaches",
    seats: "50 seats",
    image: "/images/fleet-coach-01.jpg",
    imageAlt: "50 seater coach",
    features: ["Air conditioned", "Large luggage hold", "Driver included"],
  },
];

// TODO: confirm Hiace seat count with the client (brief lists the model only).
export const fleetSummary = [
  { category: "Vans" as const, title: "Passenger Van", model: "Toyota Hiace", seats: "Up to 14 seats", image: "/images/fleet-hiace-01.jpg" },
  { category: "Coasters" as const, title: "Coaster", model: "Mid-size bus", seats: "26 to 35 seats", image: "/images/fleet-coaster-01.jpg" },
  { category: "Coaches" as const, title: "Coach", model: "Full-size coach", seats: "50 seats", image: "/images/fleet-coach-01.jpg" },
];

export const tripTypes = services.map((s) => s.title);
