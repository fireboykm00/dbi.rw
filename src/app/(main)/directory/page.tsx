import { DirectoryPage } from "@/components/pages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Directory",
  description:
    "Search and discover certified ICT companies and digital service providers across Rwanda.",
};

export default function Directory() {
  return <DirectoryPage />;
}
