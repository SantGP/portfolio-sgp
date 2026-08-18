// coding/page.tsx — Shows my code projects as cards, like a portfolio grid.

import Image from "next/image";
import { codeProjects } from "@/data/codeProjects";
import styles from "./coding.module.css";

export default function CodingPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Code</h1>
        <p className={styles.intro}>
          Web projects and experiments I&apos;ve built. Each one links to its
          source code and a live demo.
        </p>
      </header>

      {/* One card per project. .map() creates them from the data file. */}
      <div className={styles.grid}>
        {codeProjects.map((project) => (
          <article key={project.title} className={styles.card}>
            <div className={styles.imageWrap}>
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                width={600}
                height={340}
                className={styles.image}
              />
            </div>

            <div className={styles.body}>
              <h2 className={styles.cardTitle}>{project.title}</h2>
              <p className={styles.cardDesc}>{project.description}</p>

              {/* Tech tags */}
              <ul className={styles.tech}>
                {project.tech.map((t) => (
                  <li key={t} className={styles.techTag}>
                    {t}
                  </li>
                ))}
              </ul>

              {/* Links */}
              <div className={styles.links}>
                
                  <a href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkPrimary}
                >
                  Live demo
                </a>
                
                  <a href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkSecondary}
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}