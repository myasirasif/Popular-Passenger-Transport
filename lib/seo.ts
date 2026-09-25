import type { Metadata } from "next";
import { services, siteConfig } from "./site-config";

export function pageMetadata({
  title,
  description,
  path,
  image = "/images/hero-coach.jpg",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteConfig.shortName}`,
      description,
      url: path,
      siteName: siteConfig.name,
      locale: "en_AE",
      type: "website",
      images: [{ url: image, width: 1600, height: 1000, alt: siteConfig.name }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export function localBusinessJsonLd() {
  const { address, phone, rating, url } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}/#business`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    slogan: siteConfig.tagline,
    description: siteConfig.subline,
    url,
    telephone: phone.tel,
    email: siteConfig.email,
    image: `${url}/images/hero-coach.jpg`,
    logo: `${url}/brand/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: "Dubai",
      postOfficeBoxNumber: "122192",
      addressCountry: address.countryCode,
    },
    geo: { "@type": "GeoCoordinates", latitude: address.geo.lat, longitude: address.geo.lng },
    hasMap: siteConfig.mapLink,
    areaServed: ["Dubai", "Sharjah", "Ajman", "Abu Dhabi", "United Arab Emirates"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.value,
      reviewCount: rating.count,
      bestRating: 5,
    },
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.short },
    })),
  };
}
