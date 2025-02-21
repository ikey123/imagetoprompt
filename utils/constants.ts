export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const SUPPORTED_FORMATS = ['image/jpeg', 'image/png', 'image/webp'];
export const DEFAULT_LANGUAGE = 'zh';

export const API_ENDPOINTS = {
  GENERATE: '/api/generate',
  UPLOAD: '/api/upload'
};

export const ERROR_MESSAGES = {
  FILE_TOO_LARGE: 'File size cannot exceed 5MB',
  UNSUPPORTED_FORMAT: 'Only JPG, PNG and WebP formats are supported',
  UPLOAD_FAILED: 'Upload failed, please try again',
  GENERATE_FAILED: 'Generation failed, please try again'
}; 