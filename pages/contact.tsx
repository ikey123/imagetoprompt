import Layout from '../components/Layout';
import styles from '../styles/PrivacyTerms.module.css'; // 引入样式

const Contact = () => {
  return (
    <Layout title="Contact Us" description="Get in touch with us.">
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <p>
          If you have any questions, feedback, or inquiries, feel free to reach out to us.
        </p>
        <h2>Email</h2>
        <p>
          You can contact us via email at <a href="mailto:panleipanlei.qq@gmail.com">panleipanlei.qq@gmail.com</a>.
        </p>
        <h2>Follow Us</h2>
        <p>
          Stay updated with our latest news and updates by following us on our social media channels.
        </p>
      </div>
    </Layout>
  );
};

export default Contact; 