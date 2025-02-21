import styles from './Home.module.css';

export default function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <h2>How Our Image to Prompt Generator Works</h2>
      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles.stepNumber}>1</div>
          <h3>Upload Your Image</h3>
          <p>Simply upload any photo or picture to our AI prompt generator. Supports all common image formats.</p>
        </div>
        <div className={styles.step}>
          <div className={styles.stepNumber}>2</div>
          <h3>AI Analysis</h3>
          <p>Our advanced AI analyzes your image and generates detailed prompts optimized for AI art creation.</p>
        </div>
        <div className={styles.step}>
          <div className={styles.stepNumber}>3</div>
          <h3>Get Your Prompts</h3>
          <p>Receive AI-generated prompts ready to use with Stable Diffusion, Midjourney, or any AI art platform.</p>
        </div>
      </div>
    </section>
  );
} 