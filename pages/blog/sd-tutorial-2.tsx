import Layout from '../../components/Layout';
import styles from '../../styles/PrivacyTerms.module.css';

const SDTutorial2 = () => {
  return (
    <Layout title="Stable Diffusion Tutorial" description="A comprehensive guide to using Stable Diffusion.">
      <div className={styles.container}>
        <h1>Stable Diffusion Prompt Guide for Beginners</h1>
        <p>
          On March 6, 2025, we provide a detailed tutorial on how to use our <strong>image to prompt</strong> generator with Stable Diffusion. 
          This guide is designed for beginners who want to create effective prompts for AI art generation.
        </p>
        <h2>Getting Started with Stable Diffusion</h2>
        <p>
          Stable Diffusion is a powerful tool for generating AI art. By using our <strong>image to prompt generator</strong>, you can easily create prompts that yield impressive results.
        </p>
        <h2>Tips for Effective Prompts</h2>
        <p>
          Here are some tips to enhance your prompt generation:
        </p>
        <ul>
          <li>Focus on clarity and detail in your descriptions.</li>
          <li>Utilize our generator to refine your prompts based on the images you provide.</li>
          <li>Test different variations to find the most effective prompts.</li>
        </ul>
        <p>
          For more insights, explore our other tutorials on using the <strong>image to prompt</strong> generator.
        </p>
      </div>
    </Layout>
  );
};

export default SDTutorial2; 