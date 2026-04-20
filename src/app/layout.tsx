import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "El Patio de Chicho - Eventos y Reservas",
  description: "El mejor patio para tus eventos, cumpleaños y reuniones familiares.",
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
