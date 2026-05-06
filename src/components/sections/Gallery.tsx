"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Gallery.module.scss";

const tabs = ["Cricket", "Football", "Adventure"] as const;
type Tab = (typeof tabs)[number];

const galleryData: Record<Tab, { src: string; alt: string; caption: string }[]> = {
  Cricket: [
    {
      src: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=700&q=80",
      alt: "Cricket match",
      caption: "Match day vibes",
    },
    {
      src: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=700&q=80",
      alt: "Cricket bat and ball",
      caption: "Ready to bat",
    },
    {
      src: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=700&q=80",
      alt: "Cricket stadium",
      caption: "Stadium atmosphere",
    },
    {
      src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=700&q=80",
      alt: "Cricket team",
      caption: "Team spirit",
    },
    {
      src: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=700&q=80",
      alt: "Cricket action",
      caption: "In the zone",
    },
    {
      src: "https://images.unsplash.com/photo-1614632537190-23e4520f3edd?w=700&q=80",
      alt: "Cricket evening",
      caption: "Evening practice",
    },
  ],
  Football: [
    {
      src: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=700&q=80",
      alt: "Football action",
      caption: "Game on!",
    },
    {
      src: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=700&q=80",
      alt: "Football match",
      caption: "Match highlights",
    },
    {
      src: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=700&q=80",
      alt: "Soccer ball on field",
      caption: "Kickoff moment",
    },
    {
      src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=700&q=80",
      alt: "Football stadium",
      caption: "Under the lights",
    },
    {
      src: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=700&q=80",
      alt: "Football celebration",
      caption: "Goal celebration",
    },
    {
      src: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=700&q=80",
      alt: "Football team",
      caption: "Team huddle",
    },
  ],
  Adventure: [
    {
      src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=80",
      alt: "Mountain hiking",
      caption: "Summit bound",
    },
    {
      src: "https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=700&q=80",
      alt: "Adventure trail",
      caption: "Off the beaten path",
    },
    {
      src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=700&q=80",
      alt: "Camping night",
      caption: "Starry campfire",
    },
    {
      src: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=700&q=80",
      alt: "Cliff adventure",
      caption: "Edge of the world",
    },
    {
      src: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=700&q=80",
      alt: "Mountain view",
      caption: "Peak perspective",
    },
    {
      src: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=700&q=80",
      alt: "Surfing adventure",
      caption: "Riding the wave",
    },
  ],
};

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<Tab>("Cricket");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string; caption: string } | null>(null);

  return (
    <section className="section section-alt" id="gallery">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-label">Beyond the Screen</div>
          <h2 className="section-title">
            My <span>Gallery</span>
          </h2>
          <p className="section-subtitle">
            Snapshots of life outside code — sport, adventure, and memories that keep me going.
          </p>
        </motion.div>

        <motion.div
          className={styles.tabs}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              <span className={styles.tabIcon}>
                {tab === "Cricket" ? "🏏" : tab === "Football" ? "⚽" : "🏔️"}
              </span>
              {tab}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className={styles.grid}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
          >
            {galleryData[activeTab].map((item, i) => (
              <motion.div
                key={item.src}
                className={styles.item}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                onClick={() => setLightbox(item)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.src} alt={item.alt} className={styles.img} loading="lazy" />
                <div className={styles.overlay}>
                  <span className={styles.overlayCaption}>{item.caption}</span>
                  <svg
                    className={styles.zoomIcon}
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <p className={styles.replaceNote}>
          📸 Replace placeholder images with your personal photos — update the <code>src</code> URLs in{" "}
          <code>Gallery.tsx</code>.
        </p>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className={styles.lightboxBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className={styles.lightboxContent}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.lightboxClose}
                onClick={() => setLightbox(null)}
                aria-label="Close lightbox"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightbox.src.replace("w=700", "w=1200")}
                alt={lightbox.alt}
                className={styles.lightboxImg}
              />
              <p className={styles.lightboxCaption}>{lightbox.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
