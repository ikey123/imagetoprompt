import Link from 'next/link';
import styles from './Layout.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link href="/privacy" className={styles.link}>Privacy</Link>
          <Link href="/terms" className={styles.link}>Terms</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
          <Link href="/blog" className={styles.link}>Blog</Link>
          <a 
            href="https://ko-fi.com/toolsaifree" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.kofi}
          >
            <span>☕</span> Support Us
          </a>
        </div>
        <div className={styles.copyright}>
          © 2025 Image to Prompt. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 