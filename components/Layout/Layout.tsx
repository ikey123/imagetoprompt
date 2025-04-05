import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout} lang="en-us">
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}