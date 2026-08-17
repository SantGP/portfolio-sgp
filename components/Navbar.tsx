// Navbar.tsx — The top navigation bar shown on every page (via layout.tsx).
// On the left: your logo (links back home). On the right: links to each section.
// "use client" is needed because later we'll add interactivity (mobile menu, theme).

"use client";

import Link from "next/link"; 
import Image from "next/image"; // Next's optimized image component
import styles from "./Navbar.module.css"; // scoped styles, only affect this component

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Logo on the left — clicking it takes you home ("/") */}
    
         <button
        type="button"
        className={styles.logo}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          window.history.pushState(null, "", "/#top"); // update the URL to /#top
        }}
      >
        <Image
          src="/logo-light.png"
          alt="Santiago Gonzalez logo"
          width={44}
          height={44}
          priority
        />
      </button>

      {/* Navigation links on the right */}
      <ul className={styles.links}>
        <li>
          <Link href="/#about">About</Link>
        </li>
        <li>
          <Link href="/animation">Animation</Link>
        </li>
        <li>
          <Link href="/coding">Code</Link>
        </li>
        <li>
          <Link href="/photography">Photography</Link>
        </li>
      </ul>
    </nav>
  );
}