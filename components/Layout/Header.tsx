import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from './Layout.module.css';

export default function Header() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "qepd5aglsh");
            `
          }}
        />
      </Head>
      <header className={styles.header}>
        <nav>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/logo.svg" 
              alt="Image to Prompt" 
              className={styles.logoIcon}
              width={32}
              height={32}
            />
            <span>Image to Prompt</span>
          </Link>
          {/* 第二期再添加这些链接 */}
          {/* <div className={styles.links}>
            <Link href="/midjourney">Midjourney</Link>
            <Link href="/stable-diffusion">Stable Diffusion</Link>
            <Link href="/blog">Blog</Link>
          </div> */}
        </nav>
      </header>
    </>
  );
} 