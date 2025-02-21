import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { MAX_FILE_SIZE, SUPPORTED_FORMATS, ERROR_MESSAGES } from '../../utils/constants';
import styles from './DragDrop.module.css';

interface Props {
  onUpload: (file: File) => void;
  onError: (error: string) => void;
}

export default function DragDrop({ onUpload, onError }: Props) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      onError(ERROR_MESSAGES.FILE_TOO_LARGE);
      return;
    }

    if (!SUPPORTED_FORMATS.includes(file.type)) {
      onError(ERROR_MESSAGES.UNSUPPORTED_FORMAT);
      return;
    }

    onUpload(file);
  }, [onUpload, onError]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'image/webp': ['.webp']
    },
    multiple: false
  });

  return (
    <div 
      {...getRootProps()} 
      className={`${styles.dropzone} ${isDragActive ? styles.active : ''}`}
    >
      <input {...getInputProps()} />
      <div className={styles.icon}>
        📁
      </div>
      {isDragActive ? (
        <p className={styles.text}>Release to upload...</p>
      ) : (
        <p className={styles.text}>
          Drag & drop an image here, or <span>click to select</span>
          <br />
          <small>Supports JPG, PNG, WebP formats up to 5MB</small>
        </p>
      )}
    </div>
  );
} 