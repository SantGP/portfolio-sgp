// PortalCard.tsx — A single button that links to one section of the site.


import Link from "next/link";
import styles from "./PortalCard.module.css";

// These are the "props": the data each card receives from outside.
// TypeScript checks that whoever uses <PortalCard/> passes exactly these.
type PortalCardProps = {
  title: string;
  subtitle?: string;
  href: string;
};

export default function PortalCard({ title, subtitle, href }: PortalCardProps) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.text}>
        <h2 className={styles.title}>{title}</h2>
        {/* Only render the subtitle if one was passed in */}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </Link>
  );
}