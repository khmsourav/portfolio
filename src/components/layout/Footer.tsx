import { siteConfig } from "@/data/portfolio";
import styles from "./Footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <span className={styles.logo}>KS</span>
          <p className={styles.copy}>
            © {year} {siteConfig.name}. Built with Next.js & passion.
          </p>
        </div>
        <div className={styles.socials}>
          <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
          <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Twitter</a>
        </div>
      </div>
    </footer>
  );
}
