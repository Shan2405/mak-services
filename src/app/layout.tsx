import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import BackToTop from "@/components/common/BackToTop";
import QuickContactModal from "@/components/common/QuickContactModal";
import siteData from "@/data/siteConfig.json";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteData.seo.title,
    template: `%s | ${siteData.name}`,
  },
  description: siteData.seo.description,
  keywords: siteData.seo.keywords,
  authors: [{ name: siteData.name }],
  creator: siteData.name,
  openGraph: {
    title: siteData.seo.title,
    description: siteData.seo.description,
    type: "website",
    locale: "en_US",
    siteName: siteData.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.seo.title,
    description: siteData.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-bg-white antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
        <QuickContactModal />
      </body>
    </html>
  );
}