"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/portfolio";
import styles from "@/css/Contact.module.scss";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className={styles.grid}>
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">Get In Touch</div>
            <h2 className="section-title">
              Let&apos;s Work <span>Together</span>
            </h2>
            <p className={styles.desc}>
              I&apos;m open to freelance projects, full-time roles, and interesting collaborations. If you have a project in mind or just want to connect — I&apos;d love to hear from you.
            </p>

            <div className={styles.contactItems}>
              <a href={`mailto:${siteConfig.email}`} className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p className={styles.contactLabel}>Email</p>
                  <p className={styles.contactValue}>{siteConfig.email}</p>
                </div>
              </a>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className={styles.contactLabel}>Location</p>
                  <p className={styles.contactValue}>{siteConfig.location}</p>
                </div>
              </div>
            </div>

            <div className={styles.socials}>
              <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                GitHub
              </a>
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                LinkedIn
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                Twitter
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className={`card ${styles.form}`} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={styles.input}
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className={styles.input}
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Project inquiry / Collaboration / Hello"
                  className={styles.input}
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  className={styles.textarea}
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className={`btn btn-primary ${styles.submitBtn}`}
                disabled={status === "sending" || status === "sent"}
              >
                {status === "idle" && (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </>
                )}
                {status === "sending" && "Sending..."}
                {status === "sent" && (
                  <>
                    Message Sent!
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
