import type { Metadata } from "next";
import { ToolsBrowse } from "@/components/site/ToolsBrowse";

export const metadata: Metadata = {
  title: "Browse tools | MyStackTools",
  description:
    "Explore curated software by category, pricing, and rating—plus this month’s top picks and deals.",
};

export default function ToolsPage() {
  return <ToolsBrowse />;
}
