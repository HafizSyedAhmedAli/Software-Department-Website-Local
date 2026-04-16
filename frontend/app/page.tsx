import type { Metadata } from "next";
import Hero from "../components/Hero";
import ServicesStrip from "../components/ServicesStrip";
import AboutSection from "../components/AboutSection";
import StatsSection from "../components/StatsSection";
import ChairmanMessage from "../components/ChairmanMessage";
import LatestNewsSection from "../components/LatestNewsSection";

export const metadata: Metadata = {
  title: "Home | Software Engineering QUEST Nawabshah",
  description:
    "Department of Software Engineering at QUEST Nawabshah — PEC accredited BE programme, cutting-edge research, and industry collaboration.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesStrip />
      <AboutSection />
      <StatsSection />
      <ChairmanMessage />
      <LatestNewsSection />
    </>
  );
}