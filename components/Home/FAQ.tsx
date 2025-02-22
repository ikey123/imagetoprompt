import styles from './Home.module.css';

export default function FAQ() {
  return (
    <section className={styles.faq}>
      <h2>Frequently Asked Questions About Image to Prompt Generation</h2>
      <div className={styles.faqGrid}>
        <div className={styles.faqItem}>
          <h3>What is an image to prompt generator?</h3>
          <p>An image to prompt generator is an AI-powered tool that analyzes images and creates detailed text prompts for AI art generation. Our AI image prompt generator helps artists and creators convert photos, pictures, and images into optimized prompts for various AI art platforms.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>Which AI art platforms are supported?</h3>
          <p>Our image to prompt generator works seamlessly with all major AI art platforms. Whether you need Midjourney image prompts or want to use Stable Diffusion image to prompt features, our tool provides optimized results for each platform&apos;s specific requirements.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>How does the prompt generation process work?</h3>
          <p>Our AI image to prompt generator uses advanced algorithms to analyze your uploaded image. The system identifies key elements, artistic styles, and technical details to generate comprehensive prompts. This makes it the best image to prompt generator for professional AI artists.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>What image formats are supported?</h3>
          <p>Our img to prompt service supports all common image formats including JPG, PNG, and WebP. Whether you&apos;re using photo to prompt or picture to prompt features, you can upload files up to 5MB in size.</p>
        </div>
        <div className={styles.faqItem}>
          <h3>How accurate are the generated prompts?</h3>
          <p>As a professional AI prompt generator, our system provides highly accurate results. The advanced image analysis ensures that every prompt captures the essential elements of your image, making it perfect for both Stable Diffusion and Midjourney workflows.</p>
        </div>
      </div>
    </section>
  );
} 