// Lighthouse.tsx — The lighthouse image with a soft glow behind it.

import Image from "next/image";
import styles from "./Lighthouse.module.css";

// It receives one prop: whether it should be lit up right now.
type LighthouseProps = {
  lit: boolean;
};

export default function Lighthouse({ lit }: LighthouseProps) {
  return (
    <div className={styles.wrapper}>
      {/* We add the "isLit" class only when lit is true.
          The template string joins the base class with the conditional one. */}
      <div className={`${styles.glow} ${lit ? styles.isLit : ""}`} />

      <Image
        src="/lighthouse.png"
        alt="Lighthouse"
        width={300}
        height={300}
        priority
        className={styles.lighthouse}
      />
    </div>
  );
}