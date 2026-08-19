// Lighthouse.tsx — Swaps between two drawings (off/on) on hover.
// The "on" version shows light emanating from the lantern.

import Image from "next/image";
import styles from "./Lighthouse.module.css";

type LighthouseProps = {
  lit: boolean;
};

export default function Lighthouse({ lit }: LighthouseProps) {
  return (
    <div className={styles.wrapper}>
      {/* Base "off" drawing — always visible */}
      <Image
        src="/lighthouse-drawing-off.png"
        alt="Lighthouse"
        width={300}
        height={300}
        priority
        className={styles.lighthouse}
      />

      {/* "On" drawing — fades in on top when lit */}
      <Image
        src="/lighthouse-drawing-on.png"
        alt=""
        width={300}
        height={300}
        priority
        className={`${styles.lighthouseOn} ${lit ? styles.isLit : ""}`}
      />
    </div>
  );
}