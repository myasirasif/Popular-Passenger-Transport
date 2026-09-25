import { PageHero } from "@/components/sections/PageHero";
import { FleetGallery } from "@/components/sections/FleetGallery";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Fleet: Vans, Coasters and Coaches for Hire in Dubai",
  description:
    "Toyota Hiace passenger vans, 26 to 35 seater coasters and 50 seater coaches. Air-conditioned, with licensed drivers. Van rental with driver in Dubai.",
  path: "/fleet",
  image: "/images/fleet-coach-01.jpg",
});

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="Our fleet"
        title="From passenger vans to 50 seat coaches."
        intro="Toyota Hiace passenger vans, 26 to 35 seater coasters and full-size 50 seater coaches. Every vehicle is air-conditioned and comes with a professional, licensed driver."
        image="/images/fleet-coach-01.jpg"
        imageAlt="White full-size 50 seater coach"
      />
      <section className="container-x py-20 sm:py-24" aria-label="Vehicles">
        <FleetGallery />
        <p className="mt-12 max-w-2xl text-sm">
          Vehicle images are illustrative. Exact model and seating are confirmed with your quote.
        </p>
      </section>
    </>
  );
}
