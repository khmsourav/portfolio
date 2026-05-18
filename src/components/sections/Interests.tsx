"use client";
import { motion } from "framer-motion";
import { interests } from "@/data/portfolio";
import styles from "@/css/Interests.module.scss";

export default function Interests() {
  return (
    <section className="section section-alt" id="interests">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Beyond Code</div>
          <h2 className="section-title">
            Personal <span>Interests</span>
          </h2>
          <p className="section-subtitle">
            A well-rounded life outside the screen keeps the mind sharp and the spirit grounded.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              className={`card ${styles.card}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <span className={styles.icon}>{item.icon}</span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
