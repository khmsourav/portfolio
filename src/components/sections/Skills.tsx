"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import styles from "@/css/Skills.module.scss";

const categories = ["all", "framework", "language", "styling", "ecosystem", "tooling", "emerging"];

export default function Skills() {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? skills : skills.filter((s) => s.category === active);

  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Technical Skills</div>
          <h2 className="section-title">
            My <span>Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            Technologies I use to build fast, accessible, and beautiful web experiences.
          </p>
        </motion.div>

        <motion.div
          className={styles.filters}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${active === cat ? styles.filterActive : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className={styles.grid}>
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              className={styles.skillCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              layout
            >
              <div className={styles.skillTop}>
                <span className={styles.skillIcon}>{skill.icon}</span>
                <div className={styles.skillInfo}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={styles.skillLevel}>{skill.level}%</span>
                </div>
              </div>
              <div className={styles.progressBar}>
                <motion.div
                  className={styles.progressFill}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                />
              </div>
              <span className={styles.categoryTag}>{skill.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
