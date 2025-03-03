import Layout from '../components/Layout';
import styles from '../styles/PrivacyTerms.module.css'; // 引入样式

const TermsOfService = () => {
  return (
    <Layout title="Terms of Service" description="Terms and conditions for using our services.">
      <div className={styles.container}>
        <h1>Terms of Service</h1>
        <p>These terms and conditions outline the rules and regulations for the use of our services.</p>
        <h2>Acceptance of Terms</h2>
        <p>By accessing or using our services, you agree to be bound by these terms. If you do not agree, please do not use our services.</p>
        <h2>Changes to Terms</h2>
        <p>We may modify these terms at any time. Your continued use of our services after any changes constitutes your acceptance of the new terms.</p>
        <h2>Limitation of Liability</h2>
        <p>We are not liable for any damages arising from your use of our services, to the fullest extent permitted by law.</p>
        <h2>Governing Law</h2>
        <p>These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate.</p>
        <h2>Contact Us</h2>
        <p>If you have any questions about these terms, please contact us at <a href="mailto:panleipanlei.qq@gmail.com">panleipanlei.qq@gmail.com</a>.</p>
      </div>
    </Layout>
  );
};

export default TermsOfService; 