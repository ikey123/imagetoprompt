import styles from './Home.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Image to Prompt Generator for AI Art</h1>
      <p className={styles.subtitle}>
        Transform any image into powerful AI prompts with our advanced image to prompt generator. 
        Create perfect prompts for Stable Diffusion, Midjourney and other AI art platforms.
      </p>
      <div className={styles.featureList}>
        <span>✨ Smart AI Analysis</span>
        <span>🎨 Multi-Model Support</span>
        <span>🚀 Instant Results</span>
        <span>💡 Professional Tools</span>
      </div>
    </section>
  );
} 