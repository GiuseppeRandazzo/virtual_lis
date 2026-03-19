import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//Carichiamo il font Inter con i pesi che ci interessano
const inter = Inter({
  variable: "--font-inter", // variabile CSS per poterlo usare nei nostri stili
  subsets: ["latin"],
  weight: ["400", "500"], //Solo 400 (body) e 500 (titoli/etichette)
  display: "swap", // Buona pratica per migliorare la performance del caricamento del font per Web Vitals e accessibilità
});

export const metadata: Metadata = {
  title: "Virtuallis - Interprete 3D LIS",
  description:
    "Widget di accessibilità con interprete 3D in Lingua dei Segni Italiana (LIS) per siti web, migliorando accessibilità e inclusività.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      {/* Applichiamo il font al body e rendiamo l'antialiasing attivo per schermi moderni */}
      <body className={`${inter.className} lis-antialiased`}>{children}</body>
    </html>
  );
}
