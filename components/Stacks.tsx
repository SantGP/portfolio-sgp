// Stacks.tsx — The "skills" section shown on the home page.
// Technologies grouped by category, rendered as tags.

import styles from "./Stacks.module.css";

// Tools grouped by category
const GROUPS = [
  {
    label: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    label: "Backend & Data",
    items: ["Node.js", "MongoDB", "Mongoose"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Vercel"],
  },
  {
    label: "Animation & 3D",
    items: ["Maya", "Blender", "Substance Painter", "Nuke"],
  },
];

export default function Stacks() {
  return (
    <section id="stacks" className={styles.stacks}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Tools I work with</h2>

        {/* One row per category */}
        {GROUPS.map((group) => (
          <div key={group.label} className={styles.group}>
            <h3 className={styles.groupLabel}>{group.label}</h3>
            <ul className={styles.list}>
              {group.items.map((tool) => (
                <li key={tool} className={styles.tag}>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}