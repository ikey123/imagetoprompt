import styles from './Home.module.css';

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <h2>The Most Advanced AI Image Prompt Generator</h2>
        <div className={styles.intro}>
          <p>
            Our AI-powered img2prompt technology helps you generate perfect prompts from any image. Whether you&apos;re using Stable Diffusion, Midjourney, or other AI art platforms, our image to prompt generator delivers exceptional results by analyzing every detail of your photos and pictures.
          </p>
        </div>

        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>🎯 Advanced AI Analysis</h3>
            <p>Our AI prompt generator uses cutting-edge algorithms to analyze your images and generate detailed, accurate prompts. Perfect for converting any picture to prompt or photo to prompt needs. The advanced AI image prompt generator ensures high-quality results every time.</p>
          </div>

          <div className={styles.featureCard}>
            <h3>🔄 Multi-Platform Support</h3>
            <p>Generate prompts from images optimized for multiple platforms. Get specialized Midjourney image prompts and Stable Diffusion image to prompt conversions. Our system is designed to work seamlessly with all major AI art platforms.</p>
          </div>

          <div className={styles.featureCard}>
            <h3>⚡ Professional Tools</h3>
            <p>As the best image to prompt generator, we provide professional-grade tools for AI artists. Generate prompt from image with exceptional accuracy and customize the output for your specific needs.</p>
          </div>
        </div>

        <div className={styles.whyChooseUs}>
          <h2>Why Choose Our Image to Prompt AI</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <span className={styles.benefitIcon}>🚀</span>
              <h3>Advanced Technology</h3>
              <p>State-of-the-art prompt generation technology powered by advanced AI models.</p>
            </div>
            <div className={styles.benefitCard}>
              <span className={styles.benefitIcon}>🎨</span>
              <h3>Multi-Platform Support</h3>
              <p>Optimized prompts for all major AI art platforms including Midjourney and Stable Diffusion.</p>
            </div>
            <div className={styles.benefitCard}>
              <span className={styles.benefitIcon}>💡</span>
              <h3>Professional Analysis</h3>
              <p>Industry-leading image analysis capabilities for accurate prompt generation.</p>
            </div>
            <div className={styles.benefitCard}>
              <span className={styles.benefitIcon}>⚡</span>
              <h3>Regular Updates</h3>
              <p>Continuous improvements and updates to enhance your creative workflow.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 