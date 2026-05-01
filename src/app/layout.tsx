import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "El Patio de Chicho - Eventos y Reservas | Trenton, NJ",
  description: "Renta nuestro espacio exclusivo al aire libre en Trenton, NJ para cumpleaños, reuniones familiares y eventos privados. Abierto todos los días 10 AM – 8 PM.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  "name": "El Patio de Chicho",
  "description": "Exclusive outdoor event space in Trenton, New Jersey for birthdays, family reunions, private parties, and celebrations. Open Monday through Sunday 10:00 AM – 8:00 PM.",
  "telephone": "+16093108842",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "869 E State St",
    "addressLocality": "Trenton",
    "addressRegion": "NJ",
    "postalCode": "08609",
    "addressCountry": "US"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday"
      ],
      "opens": "10:00",
      "closes": "20:00"
    }
  ],
  "priceRange": "$50 – $80 per hour",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card",
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Outdoor Space",             "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Sound Equipment Available", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Tables and Chairs",         "value": true },
    { "@type": "LocationFeatureSpecification", "name": "DJ Services Available",     "value": true }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
