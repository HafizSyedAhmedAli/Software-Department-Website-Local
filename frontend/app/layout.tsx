import type { Metadata } from "next";
import { Poppins, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SplashScreen from "../components/SplashScreen";

// ─── Fonts ─────────────────────────────────────────────────────────────────
// Poppins — geometric, rounded, professional. The signature look of the
// reference site's headings.
// Inter — crisp modern body/UI font, pairs beautifully with Poppins.
// JetBrains Mono — code-flavored accents (labels, numbers).
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

// ─── Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  // Required so Google (and social previews) get absolute URLs for icons/images
  metadataBase: new URL("https://sw.quest.edu.pk"),
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
  // NOTE: icons are handled automatically by the files
  // app/favicon.ico, app/icon.png and app/apple-icon.png
  // (Next.js App Router file convention). Do not add manual paths here —
  // the old "/apple-touch-icon.png" path did not exist and returned 404.
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
      className={`${poppins.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white antialiased">
        <SplashScreen />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}