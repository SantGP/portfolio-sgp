// animation/page.tsx — Demo reel at the top, project cards below.
// Clicking a card opens a modal with full project details.

"use client";

import { useState } from "react";
import Image from "next/image";
import { animationProjects, AnimationProject } from "@/data/animationProjects";
import styles from "./animation.module.css";

export default function AnimationPage() {
  // The project whose modal is open (null = closed)
  const [selected, setSelected] = useState<AnimationProject | null>(null);

  return (
    <main className={styles.page}>
      {/* Demo reel */}
      <section className={styles.reel}>
        <h1 className={styles.title}>Animation</h1>
        <div className={styles.videoWrap}>
          <iframe
            src="https://player.vimeo.com/video/1100941630?title=0&byline=0&portrait=0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className={styles.video}
            title="Demo Reel 2025 - Santiago Gonzalez"
          />
        </div>
      </section>

      {/* Project cards */}
      <section className={styles.projects}>
        <h2 className={styles.projectsTitle}>Projects</h2>
        <div className={styles.grid}>
          {animationProjects.map((project) => (
            <button
              key={project.title}
              className={styles.card}
              onClick={() => setSelected(project)}
            >
              <div className={styles.cardImageWrap}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={225}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardRole}>{project.role}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Modal — only shows when a project is selected */}
      {selected && (
        <div className={styles.overlay} onClick={() => setSelected(null)}>
          {/* stopPropagation keeps clicks inside the modal from closing it */}
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.close} onClick={() => setSelected(null)}>
              ✕
            </button>

            {/* Top: video or image depending on the project */}
            {selected.mediaType === "video" && selected.videoUrl ? (
              <div className={styles.modalVideoWrap}>
                <iframe
                  src={selected.videoUrl}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className={styles.modalVideo}
                  title={selected.title}
                />
              </div>
            ) : (
              <div className={styles.modalImageWrap}>
                <Image
                  src={selected.image}
                  alt={selected.title}
                  width={800}
                  height={450}
                  className={styles.modalImage}
                />
              </div>
            )}

            {/* Details */}
            <div className={styles.modalBody}>
              <h2 className={styles.modalTitle}>{selected.title}</h2>
              <p className={styles.modalSynopsis}>{selected.synopsis}</p>

              {selected.description && (
                <p className={styles.modalDescription}>{selected.description}</p>
              )}
              
              <dl className={styles.details}>
                <div>
                  <dt>Year</dt>
                  <dd>{selected.year}</dd>
                </div>
                <div>
                  <dt>Director</dt>
                  <dd>{selected.director}</dd>
                </div>
                <div>
                  <dt>My role</dt>
                  <dd>{selected.participation}</dd>
                </div>
                <div>
                  <dt>Tools</dt>
                  <dd>{selected.tools.join(", ")}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}