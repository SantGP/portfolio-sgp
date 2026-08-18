// Navbar.tsx — The top navigation bar shown on every page (via layout.tsx).
// On desktop: logo + links in a row. On mobile: logo + hamburger that toggles the menu.

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  // Tracks whether the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  // Closes the menu (used after tapping a link)
  const closeMenu = () => setMenuOpen(false);

  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      {/* Logo — goes home, or scrolls to top if already home */}
      <button
        type="button"
        className={styles.logo}
        onClick={() => {
          if (pathname === "/") {
            // Already home: just scroll up
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.history.pushState(null, "", "/#top");
          } else {
            // On another page: navigate home
            router.push("/");
          }
          closeMenu();
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

      {/* Hamburger button — only visible on mobile (CSS handles that) */}
      <button
        type="button"
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        {/* Three lines, or an X when open */}
        <span>{menuOpen ? "✕" : "☰"}</span>
      </button>

      {/* Links — the "open" class makes them show on mobile */}
      <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
        <li>
          <Link href="/#about" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link href="/animation" onClick={closeMenu}>
            Animation
          </Link>
        </li>
        <li>
          <Link href="/coding" onClick={closeMenu}>
            Code
          </Link>
        </li>
        <li>
          <Link href="/design" onClick={closeMenu}>
            Design
          </Link>
        </li>
      </ul>
    </nav>
  );
}