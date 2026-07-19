import type { Metadata } from "next";
import PageHeader from "../../components/PageHeader";
import AlumniClient from "./AlumniClient";

export const metadata: Metadata = { title: "Alumni" };

export default function AlumniPage() {
  return (
    <>
      <PageHeader
        title="Our Alumni"
        subtitle="Graduates of the department are serving in reputable public and private sector software organisations, both locally and internationally."
        crumbs={[{ label: "Alumni" }]}
      />
      <AlumniClient />
    </>
  );
}
