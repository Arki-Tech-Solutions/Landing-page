import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/legal/CookieBanner";
import { site } from "@/content/site";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Software & AI Engineering Partner in Ethiopia`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: `${site.name} | Software & AI Engineering Partner`,
    description: site.description,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`} data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col overflow-x-hidden relative">
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
