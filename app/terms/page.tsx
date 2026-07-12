import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Terms and Conditions | CarRentalSky",
  alternates: {
    canonical: "/terms-and-conditions"
  }
};

export default function TermsPage() {
  redirect("/terms-and-conditions");
}
