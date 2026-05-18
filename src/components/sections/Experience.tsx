"use client";
import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";
import styles from "@/css/Experience.module.scss";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Work Experience</div>
          <h2 className="section-title">
            Where I&apos;ve <span>Made Impact</span>
          </h2>
          <p className="section-subtitle">
            Building real products at a software company with a focus on frontend excellence.
          </p>
        </motion.div>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              className={styles.item}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className={styles.timelineLine}>
                <div className={styles.dot} />
                <div className={styles.line} />
              </div>

              <div className={`card ${styles.card}`}>
                <div className={styles.cardHeader}>
                  <div className={styles.roleInfo}>
                    <span className={styles.type}>{exp.type}</span>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <p className={styles.company}>{exp.company}</p>
                  </div>
                  <div className={styles.period}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {exp.period}
                  </div>
                </div>

                <p className={styles.description}>{exp.description}</p>

                <div className={styles.achievements}>
                  <h4 className={styles.achievementsTitle}>Key Contributions</h4>
                  <ul className={styles.achievementsList}>
                    {exp.achievements.map((a) => (
                      <li key={a} className={styles.achievementItem}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.checkIcon}>
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.techTags}>
                  {exp.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
