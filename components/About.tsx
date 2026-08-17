// About.tsx — The "About me" section, shown below the hub on the home page.
// Light "paper" background to contrast with the dark hub above it.
// The id="about" lets the navbar link scroll here.

import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.inner}>
        {/* Photo on the left (or top on mobile) */}
        <Image
          src="/profile-pic.jpg"
          alt="Photo of Santiago Gonzalez"
          width={320}
          height={400}
          className={styles.photo}
        />

        {/* Text column */}
        <div className={styles.text}>
          <h2 className={styles.title}>About me</h2>

          <p>
            I am Santiago Gonzalez, a 3D Animator based in Toronto, Ontario.
            Originally from Mexico City, I grew up surrounded by a rich visual
            culture that sparked my passion for storytelling through images.
            Moving to Canada allowed me to pursue that passion at a professional
            level, as I studied at Vancouver Film School and refined my craft
            every single day.
          </p>

          <p>
            My work focuses primarily on character animation and motion
            graphics. I enjoy the challenge of bringing digital characters to
            life, capturing subtle weight, personality, and emotion in every
            movement. Over the past few years, I have worked with tools such as
            Autodesk Maya, Blender, Motion Builder, Substance Painter, and Nuke
            to produce short films for independent projects. I believe great
            animation is invisible; the audience should feel the character, not
            see keyframes. Everything has to look alive.
          </p>

          <p>
            Outside of animation, I enjoy photography and web design, and I am in
            love with watching films. I feel a deep connection with movies as I
            grew up watching a lot of them, and I always wondered how it was
            possible to convey so many emotions into a few frames; nowadays, I
            wonder the same, but now as a question for my creative process. My
            long-term goal is to work on projects where story and motion come
            together to create something truly memorable. If you would like to
             see my work, feel free to visit my{" "}
            <a href="https://vimeo.com/1100941630" target="_blank" rel="noopener noreferrer" className={styles.link}>demo reel</a>.
          </p>
        </div>
      </div>
    </section>
  );
}