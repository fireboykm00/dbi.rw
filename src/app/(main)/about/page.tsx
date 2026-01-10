import { AboutPage } from "@/components/pages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about DBI's mission, vision, and values in driving Rwanda's digital business excellence.",
};

export default function About() {
  return <AboutPage />;
}
