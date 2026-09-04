import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book a Session",
  description:
    "Book a confidential therapy session with a licensed mental health professional at Lockeroom Wellness. Flexible scheduling, available 24/7.",
}

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return children
}
