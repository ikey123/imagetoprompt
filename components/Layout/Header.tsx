import Link from 'next/link';
import styles from './Layout.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/" className={styles.logo}>
          Image to Prompt
        </Link>
        {/* 第二期再添加这些链接 */}
        {/* <div className={styles.links}>
          <Link href="/midjourney">Midjourney</Link>
          <Link href="/stable-diffusion">Stable Diffusion</Link>
          <Link href="/blog">Blog</Link>
        </div> */}
      </nav>
    </header>
  );
} 