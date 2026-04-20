import { Eye, Star, Target } from "lucide-react";
import type { Metadata } from "next";
import PageHeader from "../../../components/PageHeader";
import { VISION_MISSION } from "../../../download/data";
import { api } from "../../../lib/api";
import VisionClient from "./VisionClient";

export const metadata: Metadata = { title: "Vision & Mission" };

export default async function VisionPage() {
  const vm = await api.visionMission().catch(() => VISION_MISSION) || { vision: '', mission: [], values: [] };
  return (
    <>
      <PageHeader
        title="Vision & Mission"
        subtitle="The guiding principles that shape the Software Engineering Department."
        crumbs={[{ label: "OBE" }, { label: "Vision & Mission" }]}
      />
      <VisionClient vm={vm} />
    </>
  );
}