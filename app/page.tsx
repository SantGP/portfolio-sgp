// page.tsx — The home page (the "hub").

"use client";

import { useState } from "react";
import Lighthouse from "@/components/Lighthouse";
import PortalCard from "@/components/PortalCard";
import styles from "./page.module.css";
import About from "@/components/About";
import Stacks from "@/components/Stacks";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const [lit, setLit] = useState(false);

  return (
    <>
    <main id="top" className={styles.hub}>
      {/* TOP BLOCK: name across the full width */}
      <h1 className={styles.heading}>Santiago Gonzalez Perez</h1>

      {/* BOTTOM BLOCK: left (tagline + doors) and right (lighthouse) */}
      <div className={styles.bottom}>
        {/* Left side */}
        <div className={styles.left}>
          <p className={styles.tagline}>3D Animator · Web Development</p>

          <section
            className={styles.doors}
            onMouseEnter={() => setLit(true)}
            onMouseLeave={() => setLit(false)}
          >
            <PortalCard title="Animation" href="/animation" />
            <PortalCard title="Code" href="/coding" />
            <PortalCard title="Design" href="/design" />
          </section>
        </div>

        {/* Right side: lighthouse */}
        <div className={styles.lighthouseArea}>
          <Lighthouse lit={lit} />
        </div>
      </div>
       <a href="#about" className={styles.scrollArrow} aria-label="Scroll to about">
          ↓
        </a>
    </main>

    <About />
    <Stacks />
    <ContactForm />
    </>
    
  );
}