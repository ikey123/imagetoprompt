import { useState } from 'react';
import DragDrop from '../ImageUpload/DragDrop';
import styles from './Upload.module.css';
import { uploadImage, generateDescription } from '../../utils/api';

interface UploadSectionProps {
  onResult?: (result: string) => void;
}

export default function UploadSection({ onResult }: UploadSectionProps) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleUpload = async (file: File) => {
    setLoading(true);
    setError('');
    try {
      const { url, error: uploadError } = await uploadImage(file);
      if (uploadError) throw new Error(uploadError);
      
      const { description, error: generateError } = await generateDescription(url);
      if (generateError) throw new Error(generateError);
      
      setResult(description);
      onResult?.(description);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.uploadSection}>
      <DragDrop onUpload={handleUpload} onError={setError} />
      
      {loading && <div className={styles.loading}>Analyzing image...</div>}
      
      {error && <div className={styles.error}>{error}</div>}
      
      {result && (
        <div className={styles.result}>
          <h3>Generated Prompt:</h3>
          <div className={styles.promptBox}>
            {result}
            <button className={styles.copyButton}>
              Copy Prompt
            </button>
          </div>
        </div>
      )}
    </section>
  );
} 