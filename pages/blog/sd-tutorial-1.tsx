import Layout from '../../components/Layout';
import styles from '../../styles/PrivacyTerms.module.css';

const SDTutorial1 = () => {
  return (
    <Layout title="Stable Diffusion Basics" description="Learn the basics of using Stable Diffusion.">
      <div className={styles.container}>
        <h1>Stable Diffusion Prompt Guide for Beginners</h1>
        <p>
          On February 25, 2025, we provide an introductory guide to using Stable Diffusion with our <strong>image to prompt</strong> generator. 
          This guide is tailored for beginners looking to create effective prompts.
        </p>
        <h2>Understanding Stable Diffusion</h2>
        <p>
          Stable Diffusion is a versatile tool for generating AI art. By utilizing our <strong>image to prompt generator</strong>, you can create prompts that enhance your artwork.
        </p>
        <h2>Effective Prompt Strategies</h2>
        <p>
          Here are some strategies for creating effective prompts:
        </p>
        <ul>
          <li>Clearly define the elements you want in your image.</li>
          <li>Use our generator to optimize your prompts based on the images you provide.</li>
          <li>Test various approaches to find the most effective prompts.</li>
        </ul>
        <p>
          For more information, explore our other tutorials on using the <strong>image to prompt</strong> generator.
        </p>
      </div>
    </Layout>
  );
};

export default SDTutorial1; 