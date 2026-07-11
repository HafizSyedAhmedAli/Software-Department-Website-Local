import type { Metadata } from "next";
import PageHeader from "../../components/PageHeader";
import { api } from "../../lib/api";
import ResearchClient from "./ResearchClient";

export const metadata: Metadata = { title: "Research" };

export default async function ResearchPage() {
  const fetched = await api.research().catch(() => null);
  const items = Array.isArray(fetched) ? fetched : [];
  return (
    <>
      <PageHeader
        title="Research & Innovation"
        subtitle="Our faculty and students actively engage in cutting-edge research addressing industrial and societal challenges across emerging technology domains."
        crumbs={[{ label: "Research" }]}
      />
      <ResearchClient items={items} />
    </>
  );
}
