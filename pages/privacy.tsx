import Layout from '../components/Layout';
import styles from '../styles/PrivacyTerms.module.css'; // 引入样式

const PrivacyPolicy = () => {
  return (
    <Layout title="Privacy Policy" description="Our privacy policy regarding user data and information.">
      <div className={styles.container}>
        <h1>Privacy Policy</h1>
        <p>
          Your privacy is important to us. This privacy policy explains how we collect, use, and protect your information when you use our services.
        </p>
        <h2>Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address, and any other information you provide when you use our services.
        </p>
        <h2>How We Use Your Information</h2>
        <p>
          We use your information to provide and improve our services, communicate with you, and comply with legal obligations.
        </p>
        <h2>Data Security</h2>
        <p>
          We take reasonable measures to protect your information from unauthorized access, use, or disclosure.
        </p>
        <h2>Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on our website.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this privacy policy, please contact us at <a href="mailto:panleipanlei.qq@gmail.com">panleipanlei.qq@gmail.com</a>.
        </p>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy; 