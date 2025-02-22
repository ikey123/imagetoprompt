import styles from './Preview.module.css';

interface Props {
  result: string;
  onCopy: () => void;
}

export default function Preview({ result, onCopy }: Props) {
  return (
    <div className={styles.preview}>
      <div className={styles.description}>
        <h3>Generated Description:</h3>
        <p>{result}</p>
        <button onClick={onCopy} className={styles.copyButton}>
          Copy Description
        </button>
      </div>
    </div>
  );
}