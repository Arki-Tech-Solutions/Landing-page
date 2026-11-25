import type { Metadata, Viewport } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { defaultOgImage } from "@/content/seo";
import { siteGraph } from "@/content/structured-data";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/legal/CookieBanner";
import { site } from "@/content/site";
import "./globals.css";

// Variable font: one file covers every weight (200–800) instead of one file per weight.
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Software & AI Development in Ethiopia | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  creator: site.name,
  publisher: site.legalName,
  // "?v=2" makes browsers fetch the new "lens i" icon instead of a cached old one.
  icons: { icon: "/favicon.svg?v=2", apple: "/apple-touch-icon.png" },
  // Pages set their own Open Graph data through pageMeta() (src/content/seo.ts); these are the fallbacks.
  openGraph: {
    title: `${site.name} | Software & AI Engineering Partner`,
    description: site.description,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [defaultOgImage],
  },
  twitter: { card: "summary_large_image", images: [defaultOgImage.url] },
  // Site ownership for Google Search Console (property https://www.arkisolutions.com/). Keep it, or ownership is lost.
  verification: { google: "MPI9-fYnS3csuvOjlWdeU6WsjntY_KMv-xQnLmxP8ns" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport: Viewport = {
  themeColor: "#137a4e",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`} data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col overflow-x-hidden relative">
        {/* Who Arki is, for search engines and AI assistants (src/content/structured-data.ts). */}
        <JsonLd data={siteGraph()} />
        <Header />
        <div className="flex-1 overflow-x-clip flex flex-col">
          <main className="flex-1 relative">{children}</main>
          <Footer />
        </div>
        <CookieBanner />
      </body>
    </html>
  );
}
