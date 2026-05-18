"use client";
import { motion } from "framer-motion";
import { siteConfig, stats } from "@/data/portfolio";
import styles from "@/css/Hero.module.scss";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bgGrid} aria-hidden />
      <div className={styles.bgGlow} aria-hidden />

      <div className={`container ${styles.content}`}>
        <div className={styles.main}>
          <motion.div
            className="section-label"
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            {siteConfig.available ? "Available for work" : "Currently busy"}
          </motion.div>

          <motion.h1
            className={styles.headline}
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            Frontend Engineer
            <br />
            <span className="gradient-text">Crafting Digital</span>
            <br />
            Experiences
          </motion.h1>

          <motion.p
            className={styles.tagline}
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            className={styles.ctas}
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <a href="#projects" className="btn btn-primary">
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn-outline">
              Hire Me
            </a>
            <a href={siteConfig.resumeUrl} className="btn btn-ghost" download>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Resume
            </a>
          </motion.div>

          <motion.div
            className={styles.socials}
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </motion.div>
        </div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <div className={styles.avatarWrapper}>
            <div className={styles.avatarRing} />
            <div className={styles.avatar}>
              <div className={styles.avatarInner}>
                <img
                  src="/avatar.jpg"
                  alt={siteConfig.name}
                  className={styles.avatarPhoto}
                />
              </div>
            </div>
            <div className={styles.statusBadge}>
              <span className={styles.statusDot} />
              Open to work
            </div>
          </div>

          <div className={styles.floatingCard1}>
            <span className={styles.cardIcon}>⚛️</span>
            <div>
              <p className={styles.cardTitle}>React Expert</p>
              <p className={styles.cardSub}>2+ years</p>
            </div>
          </div>

          <div className={styles.floatingCard2}>
            <span className={styles.cardIcon}>🛍️</span>
            <div>
              <p className={styles.cardTitle}>Shopify Polaris</p>
              <p className={styles.cardSub}>App Development</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className={styles.stats}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
