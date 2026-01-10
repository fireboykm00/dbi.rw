import { AcademyPage } from "@/components/pages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academy",
  description:
    "Internationally accredited certifications and professional training for the next generation of digital leaders.",
};

export default function Academy() {
  return <AcademyPage />;
}
