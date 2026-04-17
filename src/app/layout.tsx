import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cariddi Cowork — El hub de Blockchain e IA en Buenos Aires.",
  description:
    "El cowork que te hace producir más, conectar mejor y crecer con los que están construyendo el futuro. Microcentro, Buenos Aires.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
