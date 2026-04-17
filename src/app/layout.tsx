import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import SocialFloatLinks from "@/components/SocialFloatLinks";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "London Property Maintenance, Repairs & Construction — 24/7",
  description:
    "Property maintenance, emergency repairs, refurbishments and construction across London. Trusted, fully insured trades for landlords, homeowners and managing agents.",
  icons: {
    icon: [{ url: "/logo/favicon.ico", type: "image/png", sizes: "32x30" }],
  },
  openGraph: {
    title: "YV Build",
    description: "London Property Maintenance, Repairs & Construction — 24/7",
    url: "https://yvbuild.com",
    siteName: "YV Build",
    images: [
      {
        url: "https://yvbuild.com/logo/metaphoto.png",
        width: 1312,
        height: 726,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      {/* Extensions (e.g. ColorZilla) may inject attributes like cz-shortcut-listen on <body> before hydration. */}
      <body
        className="min-h-full flex flex-col font-sans"
        suppressHydrationWarning
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <SocialFloatLinks />
      </body>
    </html>
  );
}
