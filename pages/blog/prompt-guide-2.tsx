import Layout from '../../components/Layout';
import styles from '../../styles/PrivacyTerms.module.css';

const PromptGuide2 = () => {
  return (
    <Layout title="Advanced Prompt Engineering" description="Learn advanced techniques for prompt generation.">
      <div className={styles.container}>
        <h1>Advanced Prompt Engineering Techniques</h1>
        <p>
          On February 25, 2025, we explore advanced techniques for prompt engineering using our <strong>image to prompt</strong> generator. 
          This guide is designed for users looking to enhance their AI art generation skills.
        </p>
        <h2>Key Techniques</h2>
        <p>
          To improve your prompt generation, consider the following techniques:
        </p>
        <ul>
          <li>Utilize detailed descriptions to guide the AI.</li>
          <li>Incorporate specific keywords to enhance prompt effectiveness.</li>
          <li>Experiment with different styles and formats for optimal results.</li>
        </ul>
        <p>
          For more insights, check out our other resources on using the <strong>image to prompt</strong> generator.
        </p>
      </div>
    </Layout>
  );
};

export default PromptGuide2; 