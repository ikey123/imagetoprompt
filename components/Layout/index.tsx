import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.css';
import SEO from './SEO';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Header />
      <SEO title={title} description={description} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
} 