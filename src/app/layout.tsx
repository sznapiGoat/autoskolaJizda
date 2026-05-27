import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.shortName} Rakovník — Řidičský průkaz skupiny B`,
    template: `%s | ${SITE.shortName}`,
  },
  description:
    "Autoškola Jízda v Rakovníku — 101× hodnocení 5,0 ★ na Google. Kurzy skupiny B, výuka v cizích jazycích (arabština, vietnamština, ruština, čínština, angličtina), L17 mentoring a kondiční jízdy. Individuální přístup, moderní vozidla.",
  keywords: [
    "autoškola Rakovník",
    "řidičský průkaz Rakovník",
    "kurz skupiny B",
    "výuka řízení cizinci",
    "L17 mentor",
    "kondiční jízdy Rakovník",
    "autoškola jízda",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://autoskolajizda.cz",
    siteName: SITE.shortName,
    title: `${SITE.shortName} Rakovník — 101× hodnocení 5,0 ★`,
    description:
      "Řidičský průkaz skupiny B v Rakovníku. 101 pětihvězdičkových recenzí na Google. Individuální přístup, výuka v cizích jazycích.",
  },
  alternates: {
    canonical: "https://autoskolajizda.cz",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: SITE.name,
  url: "https://autoskolajizda.cz",
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address,
    addressLocality: SITE.city,
    postalCode: SITE.zip,
    addressCountry: "CZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "50.1065",
    longitude: "13.7404",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.googleRating,
    reviewCount: SITE.reviewCount,
    bestRating: 5,
    worstRating: 1,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    description: "Volejte kdykoliv",
  },
  hasMap: SITE.mapUrl,
  priceRange: "17 000 – 50 000 Kč",
  currenciesAccepted: "CZK",
  paymentAccepted: "Cash, Bank transfer",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="cs"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-dvh bg-white text-[#111827] antialiased">
        {children}
      </body>
    </html>
  );
}
