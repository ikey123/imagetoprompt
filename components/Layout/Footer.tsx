import Link from 'next/link';
import styles from './Layout.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.copyright}>
          © 2024 Image to Prompt. All rights reserved.
        </div>
        <div className={styles.links}>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
} 