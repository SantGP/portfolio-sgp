// layout.tsx — The common frame wrapped around EVERY page of the site.
// Whatever goes here (like the Navbar) shows up on all pages automatically.


import type { Metadata } from "next";
import "./globals.css"; // connects the global styles to the whole site
import Navbar from "@/components/Navbar"; 

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
    <html lang="en">
      <body>
        <Navbar /> {/* appears on every page */}
        {children}
      </body>
    </html>
  );
}