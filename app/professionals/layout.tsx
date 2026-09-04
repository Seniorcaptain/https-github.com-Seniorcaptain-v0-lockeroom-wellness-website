import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Find a Professional",
  description:
    "Browse licensed therapists, counselors, and psychiatrists on Lockeroom Wellness and find the right mental health professional for you.",
}

export default function ProfessionalsLayout({ children }: { children: React.ReactNode }) {
  return children
}
