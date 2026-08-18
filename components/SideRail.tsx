// SideRail.tsx — Fixed vertical bar of social icons on the right edge (desktop only). 
// Hidden on mobile.

import SocialLinks from "./SocialLinks";
import styles from "./SideRail.module.css";

export default function SideRail() {
  return (
    <div className={styles.rail}>
      <SocialLinks />
    </div>
  );
}