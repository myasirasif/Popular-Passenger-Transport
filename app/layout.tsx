import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { localBusinessJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Bus Rental Dubai and Staff Transportation | ${siteConfig.shortName}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: `${siteConfig.subline}. Bus rental Dubai, staff transportation, school transport and van rental with driver from Karama.`,
  applicationName: siteConfig.shortName,
  formatDetection: { telephone: true },
};

export const viewport: Viewport = { themeColor: "#0B4F8F" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
        <MotionProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <FloatingActions />
        </MotionProvider>
      </body>
    </html>
  );
}
