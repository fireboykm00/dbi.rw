import { FaqPage } from "@/components/pages";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about DBI certification, training, and professional networks.",
};

export default function Faq() {
  return <FaqPage />;
}
