import type { Metadata } from "next";
import { Playfair_Display, Nunito_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ─── Fonts ─────────────────────────────────────────────────────────────────
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

// ─── Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "Software Engineering | QUEST Nawabshah",
    template: "%s | SWE QUEST",
  },
  description:
    "Department of Software Engineering at Quaid-e-Awam University of Engineering, Science and Technology, Nawabshah. Offering BE, ME, and PhD programmes.",
  keywords: [
    "software engineering",
    "QUEST",
    "Nawabshah",
    "university",
    "Pakistan",
    "engineering department",
    "PEC accredited",
  ],
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "SWE QUEST",
    title: "Software Engineering Department — QUEST Nawabshah",
    description:
      "Empowering the next generation of software engineers in Pakistan.",
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

// ─── Root Layout ───────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${nunito.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}