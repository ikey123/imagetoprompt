import { ImageResult } from '../../types';
import styles from './Preview.module.css';

interface Props {
  result: string;
  onCopy: () => void;
}

export default function Preview({ result, onCopy }: Props) {
  return (
    <div className={styles.preview}>
      <div className={styles.description}>
        <h3>基础描述：</h3>
        <p>{result}</p>
        <button onClick={onCopy} className={styles.copyButton}>
          复制描述
        </button>
      </div>
    </div>
  );
}