import PrivacyPolicyPage from "@/components/pages/PrivacyPolicyPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn about how DBI collects, uses, and protects your personal information.",
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
