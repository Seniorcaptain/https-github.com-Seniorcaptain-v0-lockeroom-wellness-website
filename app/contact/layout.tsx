import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Lockeroom Wellness team for questions about therapy, booking, or pricing. We respond within 24 hours.",
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
