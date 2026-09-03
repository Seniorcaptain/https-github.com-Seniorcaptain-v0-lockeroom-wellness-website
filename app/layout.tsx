import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const siteUrl = "https://www.lockeroomwellness.ke"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lockeroom Wellness - Online Therapy & Mental Health Support in Kenya",
    template: "%s | Lockeroom Wellness",
  },
  description:
    "Connect with licensed mental health professionals in Kenya for confidential, accessible online therapy and counseling. Book a session today.",
  keywords: [
    "online therapy Kenya",
    "mental health Kenya",
    "licensed therapist Nairobi",
    "counseling Kenya",
    "teletherapy",
    "Lockeroom Wellness",
  ],
  authors: [{ name: "Lockeroom Wellness" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    siteName: "Lockeroom Wellness",
    title: "Lockeroom Wellness - Online Therapy & Mental Health Support in Kenya",
    description:
      "Connect with licensed mental health professionals in Kenya for confidential, accessible online therapy and counseling.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Lockeroom Wellness" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lockeroom Wellness - Online Therapy & Mental Health Support in Kenya",
    description: "Confidential, accessible online therapy and counseling with licensed professionals in Kenya.",
    images: ["/og-image.png"],
  },
  generator: "v0.app",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Lockeroom Wellness",
  description:
    "Online mental health support platform connecting clients with licensed therapists, counselors, and psychiatrists in Kenya.",
  url: siteUrl,
  telephone: "+254702123456",
  email: "support@lockeroomwellness.ke",
  address: {
    "@type": "PostalAddress",
    addressCountry: "KE",
    addressLocality: "Nairobi",
  },
  medicalSpecialty: "Psychiatric",
  areaServed: "KE",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navigation />
        {children}
        <Footer />
        <Chatbot />
        <Analytics />
      </body>
    </html>
  )
}
