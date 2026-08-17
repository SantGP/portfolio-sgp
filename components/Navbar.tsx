// Navbar.tsx — The top navigation bar shown on every page (via layout.tsx).
// On desktop: logo + links in a row. On mobile: logo + hamburger that toggles the menu.

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  // Tracks whether the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  // Closes the menu (used after tapping a link)
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      {/* Logo — scrolls to top */}
      <button
        type="button"
        className={styles.logo}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          window.history.pushState(null, "", "/#top");
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
          <Link href="/photography" onClick={closeMenu}>
            Photography
          </Link>
        </li>
      </ul>
    </nav>
  );
}