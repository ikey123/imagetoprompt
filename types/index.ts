export interface UploadResponse {
  url: string;
  error?: string;
}

export interface GenerateResponse {
  text: string;
  error?: string;
}

export type AIModel = 'midjourney' | 'stable-diffusion' | 'default';

export interface PromptResult {
  prompt: string;
  negativePrompt?: string;
  modelType: AIModel;
}