// layout.tsx — The common frame wrapped around EVERY page of the site.
// Whatever goes here (like the Navbar) shows up on all pages automatically.


import type { Metadata } from "next";
import "./globals.css"; // connects the global styles to the whole site
import Navbar from "@/components/Navbar"; 
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import SideRail from "@/components/SideRail";

// Headlines
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

// Body text
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

// Captions / technical
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

// This info shows in the browser tab and in search/social previews
export const metadata: Metadata = {
  title: "Santiago Gonzalez — Portfolio",
  description: "3D Animation, Code, and Photography portfolio.",
};

// RootLayout receives "children": whatever page is currently being shown.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <body>
        <Navbar />
        <SideRail />
        {children}
      </body>
    </html>
  );
}