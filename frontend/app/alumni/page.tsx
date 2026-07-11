import type { Metadata } from "next";
import PageHeader from "../../components/PageHeader";
import { api } from "../../lib/api";
import AlumniClient from "./AlumniClient";

export const metadata: Metadata = { title: "Alumni" };

export default async function AlumniPage() {
  const fetched = await api.alumni().catch(() => null);
  const profiles = Array.isArray(fetched) ? fetched : [];
  return (
    <>
      <PageHeader
        title="Our Alumni"
        subtitle="Graduates of the department are serving in reputable public and private sector software organisations, both locally and internationally."
        crumbs={[{ label: "Alumni" }]}
      />
      <AlumniClient profiles={profiles} />
    </>
  );
}
