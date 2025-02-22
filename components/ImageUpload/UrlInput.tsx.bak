import { useState } from 'react';
import styles from './ImageUpload.module.css';

interface UrlInputProps {
  onSubmit: (url: string) => void;
  onError: (error: string) => void;
}

export default function UrlInput({ onSubmit, onError }: UrlInputProps) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      onError('Please enter a valid URL');
      return;
    }
    onSubmit(url.trim());
  };

  return (
    <form onSubmit={handleSubmit} className={styles.urlInput}>
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Paste image URL here"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Analyze
      </button>
    </form>
  );
} 