import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Speed Post Tracking - India App | Track Your Parcels Anytime, Anywhere",
  description:
    "Stay updated on your India Post Speed Post parcels with our fast, reliable tracking app. Track documents, packages, and business shipments directly on your phone. Third-party app for India Post Speed Post tracking.",
  keywords:
    "India Post, Speed Post tracking, parcel tracking, package tracking, India postal service, delivery tracking, third party app, Speed Post India, EMS tracking, consignment tracking",
  authors: [{ name: "Youth Empowerment Center" }],
  creator: "Youth Empowerment Center",
  publisher: "Youth Empowerment Center",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Speed Post Tracking - India App | Track Your Parcels Anytime, Anywhere",
    description:
      "Stay updated on your India Post Speed Post parcels with our fast, reliable tracking app. Track documents, packages, and business shipments directly on your phone.",
    url: "https://speedposttracking.vercel.app",
    siteName: "Speed Post Tracking - India",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Speed Post Tracking - India App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Speed Post Tracking - India App | Track Your Parcels Anytime, Anywhere",
    description: "Stay updated on your India Post Speed Post parcels with our fast, reliable tracking app.",
    images: ["/og-image.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
