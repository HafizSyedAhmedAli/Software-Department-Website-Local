import type { Metadata } from "next";
import PageHeader from "../../../components/PageHeader";
import { api } from "../../../lib/api";
import { PLOS_DATA } from "../../../download/data";
import PLOsClient from "./PLOsClient";

export const metadata: Metadata = { title: "Program Learning Outcomes (PLOs)" };

export default async function PLOsPage() {
  const raw = await api.plos().catch(() => PLOS_DATA);

  // Fix: sort numerically by the number in the PLO id (PLO-1, PLO-2 … PLO-12)
  const plos = [...raw].sort((a, b) => {
    const numA = parseInt(a.id.replace(/\D+/g, ""), 10);
    const numB = parseInt(b.id.replace(/\D+/g, ""), 10);
    return numA - numB;
  });

  return (
    <>
      <PageHeader
        title="Program Learning Outcomes"
        subtitle="12 Graduate Attributes aligned with PEC requirements and the Washington Accord."
        crumbs={[{ label: "OBE" }, { label: "PLOs" }]}
      />
      <PLOsClient plos={plos} />
    </>
  );
}