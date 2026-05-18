"use client";
import { motion } from "framer-motion";
import { testimonials } from "@/data/portfolio";
import styles from "@/css/Testimonials.module.scss";

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Testimonials</div>
          <h2 className="section-title">
            What People <span>Say</span>
          </h2>
          <p className="section-subtitle">
            Feedback from clients and colleagues I&apos;ve had the pleasure of working with.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              className={`card ${styles.card}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={styles.stars}>
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <svg key={idx} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <p className={styles.content}>&ldquo;{t.content}&rdquo;</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.avatar}</div>
                <div>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.role}>{t.role} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
