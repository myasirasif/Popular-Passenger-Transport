import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { FleetPreview, ServicesGrid, Testimonials, UseCases, WhyUs } from "@/components/sections/HomeSections";
import { BookingSection } from "@/components/sections/BookingSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = {
  ...pageMetadata({
    title: "Bus Rental Dubai, Staff and School Transport",
    description:
      "Popular Passenger Transport: bus rental Dubai, staff transportation, school transport and van rental with driver. Karama bus hire rated 4.6 on Google.",
    path: "/",
  }),
  title: { absolute: "Bus Rental Dubai, Staff and School Transport | Popular Passenger Transport" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesGrid />
      <WhyUs />
      <FleetPreview />
      <UseCases />
      <Testimonials />
      <BookingSection />
    </>
  );
}
