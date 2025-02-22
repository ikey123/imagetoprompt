export interface UploadResponse {
  url: string;
  error?: string;
}

export interface GenerateResponse {
  description: string;
  error?: string;
}

export type AIModel = 'midjourney' | 'stable-diffusion' | 'default';

export interface PromptResult {
  prompt: string;
  negativePrompt?: string;
  modelType: AIModel;
}

// 第一期：基础类型
export interface UploadResult {
  url: string;
  error?: string;
}

export interface GenerateResult {
  description: string;
  error?: string;
}

// 第二期：AI 分析功能
/* export interface ImageResult {
  description: string;
  error?: string;
  tags?: string[];
  confidence?: number;
  metadata?: {
    width: number;
    height: number;
    format: string;
  };
} */

// 第二期：高级提示词生成
/* export interface PromptTemplate {
  id: string;
  name: string;
  template: string;
  parameters: string[];
} */