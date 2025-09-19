import type { Metadata } from "next";
import { Inter, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegister from "../components/ServiceWorkerRegister";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lucktang International Limited - Maritime Excellence",
  description: "Leading maritime solutions provider specializing in marine engineering, shipping services, and innovative water works solutions. Professional maritime services with cutting-edge technology.",
  keywords: "maritime, shipping, marine engineering, water works, maritime services, Lucktang",
  authors: [{ name: "Lucktang International Limited" }],
  openGraph: {
    title: "Lucktang International Limited - Maritime Excellence",
    description: "Leading maritime solutions provider with professional services and innovative technology.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${playfair.variable} antialiased`}
      >
        {children}
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
