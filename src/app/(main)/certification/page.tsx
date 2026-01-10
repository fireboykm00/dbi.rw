import { CertificationPage } from "@/components/pages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certification",
  description:
    "Get verified with the DBI Trust Seal and demonstrate your company's commitment to quality and excellence.",
};

export default function Certification() {
  return <CertificationPage />;
}
