import { DPNPage } from "@/components/pages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Professionals Network",
  description:
    "Connect with global experts and specialized professional networks to bridge skill gaps and drive innovation.",
};

export default function DPN() {
  return <DPNPage />;
}
