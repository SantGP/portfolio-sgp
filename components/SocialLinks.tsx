// SocialLinks.tsx — Contact/social icon links.
// Reused in the navbar (desktop side rail) and inside the mobile menu.

import { FaLinkedin, FaVimeoV } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./SocialLinks.module.css";

// Add or remove links here (e.g. GitHub, IMDb later)
const LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/san-glzp352518/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:santgp.825@gmail.com",
    icon: MdEmail,
  },
  {
    label: "Vimeo",
    href: "https://vimeo.com/1100941630",
    icon: FaVimeoV,
  },
];

export default function SocialLinks() {
  return (
    <ul className={styles.socials}>
      {LINKS.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          
            <a href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={styles.link}
          >
            <Icon size={27} />
          </a>
        </li>
      ))}
    </ul>
  );
}