"use client";
import { motion } from "framer-motion";
import styles from "./About.module.scss";

const values = [
  { icon: "🤝", title: "Honesty & Integrity", desc: "I believe clean code mirrors clean character — no shortcuts on quality or ethics." },
  { icon: "⚡", title: "Discipline & Focus", desc: "Consistent, purposeful work over bursts of motivation. Always shipping, always learning." },
  { icon: "🎯", title: "Purpose-Driven Work", desc: "I build things that matter — tools that solve real problems and create real value." },
  { icon: "📈", title: "Continuous Growth", desc: "Staying sharp on the latest frontend innovations, especially where AI meets the web." },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className={styles.grid}>
          <motion.div
            className={styles.textSide}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-label">About Me</div>
            <h2 className="section-title">
              A <span>Frontend Developer</span> with purpose
            </h2>
            <p className={styles.bio}>
              I&apos;m <strong>Kazi Sourav</strong>, a BSc Computer Science & Engineering graduate currently working as a Frontend Developer at a software company in Bangladesh.
            </p>
            <p className={styles.bio}>
              My daily work involves building Shopify Polaris admin apps, SaaS dashboards, and complex React/Vue interfaces. I&apos;m particularly excited about integrating AI capabilities into frontend products — from smart autocomplete to conversational UIs.
            </p>
            <p className={styles.bio}>
              Beyond code, I&apos;m a practical Muslim who values halal income, honest work, and meaningful contribution. I bring that same discipline and intentionality to every project I take on.
            </p>

            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Education</span>
                <span className={styles.infoValue}>BSc in CSE</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Role</span>
                <span className={styles.infoValue}>Frontend Developer</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Location</span>
                <span className={styles.infoValue}>Bangladesh 🇧🇩</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Status</span>
                <span className={`${styles.infoValue} ${styles.available}`}>
                  <span className={styles.dot} />
                  Available
                </span>
              </div>
            </div>
          </motion.div>

          <div className={styles.valuesSide}>
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className={`card ${styles.valueCard}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className={styles.valueIcon}>{v.icon}</span>
                <div>
                  <h3 className={styles.valueTitle}>{v.title}</h3>
                  <p className={styles.valueDesc}>{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
