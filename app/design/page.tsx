// design/page.tsx — Design project cards. Clicking a card opens a modal
// with the main image, extra images, and project details.
// Fields that are empty (description, client) are hidden automatically.

"use client";

import { useState } from "react";
import Image from "next/image";
import { designProjects, DesignProject } from "@/data/designProjects";
import styles from "./design.module.css";

export default function DesignPage() {
  const [selected, setSelected] = useState<DesignProject | null>(null);

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Design</h1>

      <div className={styles.grid}>
        {designProjects.map((project) => (
          <button
            key={project.title}
            className={styles.card}
            onClick={() => setSelected(project)}
          >
            <div className={styles.cardImageWrap}>
              <Image
                src={project.thumbnail}
                alt={project.title}
                width={400}
                height={300}
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardCategory}>{project.category}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div className={styles.overlay} onClick={() => setSelected(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.close} onClick={() => setSelected(null)}>
              ✕
            </button>

            {/* Main image */}
            <div className={styles.modalMainImage}>
              <Image
                src={selected.thumbnail}
                alt={selected.title}
                width={800}
                height={600}
                className={styles.modalImg}
              />
            </div>

            <div className={styles.modalBody}>
              <h2 className={styles.modalTitle}>{selected.title}</h2>

              {/* Description only if it exists */}
              {selected.description && (
                <p className={styles.modalDesc}>{selected.description}</p>
              )}

              <dl className={styles.details}>
                <div>
                  <dt>Year</dt>
                  <dd>{selected.year}</dd>
                </div>
                {/* Client only if it exists */}
                {selected.client && (
                  <div>
                    <dt>Client</dt>
                    <dd>{selected.client}</dd>
                  </div>
                )}
                <div>
                  <dt>Tools</dt>
                  <dd>{selected.tools.join(", ")}</dd>
                </div>
              </dl>

              {/* Extra images, stacked */}
              {selected.images.length > 0 && (
                <div className={styles.extraImages}>
                  {selected.images.map((img, i) => (
                    <Image
                      key={i}
                      src={img}
                      alt={`${selected.title} view ${i + 1}`}
                      width={800}
                      height={600}
                      className={styles.extraImg}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}