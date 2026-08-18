// Navbar.tsx — Top navigation bar. The mobile menu is rendered OUTSIDE the
// <nav> so the navbar's blur doesn't trap the fixed sliding panel.

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import SocialLinks from "./SocialLinks";
import { MdChatBubbleOutline } from "react-icons/md";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <nav className={styles.navbar}>
        {/* Logo */}
        <button
          type="button"
          className={styles.logo}
          onClick={() => {
            if (pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.pushState(null, "", "/#top");
            } else {
              router.push("/");
            }
            closeMenu();
          }}
        >
          <Image
            src="/logo-light.png"
            alt="Santiago Gonzalez logo"
            width={441}
            height={510}
            priority
            style={{ width: "auto", height: "50px" }}
          />
        </button>

        {/* Hamburger */}
        <button
          type="button"
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span>☰</span>
        </button>

        {/* Desktop links (this <ul> is only used on desktop) */}
        <ul className={styles.desktopLinks}>
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/animation">Animation</Link></li>
          <li><Link href="/coding">Code</Link></li>
          <li><Link href="/design">Design</Link></li>
          <li>
            <Link href="/#contact" aria-label="Contact" className={styles.contactLink}>
              <MdChatBubbleOutline size={22} />
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile menu — OUTSIDE the nav*/}
      {/* Blurred overlay behind the menu */}
      {menuOpen && <div className={styles.overlay} onClick={closeMenu} />}

      {/* Sliding panel */}
      <ul className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
        {/* Close button inside the panel */}
        <li>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
        </li>

        <li><Link href="/#about" onClick={closeMenu}>About</Link></li>
        <li><Link href="/animation" onClick={closeMenu}>Animation</Link></li>
        <li><Link href="/coding" onClick={closeMenu}>Code</Link></li>
        <li><Link href="/design" onClick={closeMenu}>Design</Link></li>
        <li>
          <Link href="/#contact" onClick={closeMenu} aria-label="Contact" className={styles.contactLink}>
            <MdChatBubbleOutline size={30} />
          </Link>
        </li>
        <li className={styles.mobileSocials}>
          <SocialLinks />
        </li>
      </ul>
    </>
  );
}