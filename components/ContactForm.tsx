// ContactForm.tsx — Contact form that sends messages via Formspree.

"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

// Formspree endpoint
const FORMSPREE_URL = "https://formspree.io/f/xljrpqkd";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit() {
    // Basic validation — contingency plan for empty or bad input
    if (!name || !email || !message) {
      setStatus("error");
      setErrorMsg("Please fill in all fields.");
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      setStatus("error");
      setErrorMsg("Please enter a valid email.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("sent");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
        setErrorMsg("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Get in touch</h2>
        <p className={styles.subtitle}>
          Have a project or opportunity in mind? Send me a message.
        </p>

        <div className={styles.form}>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.textarea}
            rows={5}
          />

          <button
            onClick={handleSubmit}
            disabled={status === "sending"}
            className={styles.button}
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          {status === "sent" && (
            <p className={styles.success}>Thanks! Your message was sent.</p>
          )}
          {status === "error" && <p className={styles.error}>{errorMsg}</p>}
        </div>
      </div>
    </section>
  );
}