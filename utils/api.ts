import { API_ENDPOINTS } from './constants';
import type { GenerateResponse, UploadResponse } from '../types';

export async function generateDescription(imageUrl: string): Promise<GenerateResponse> {
  try {
    const response = await fetch(
      `${API_ENDPOINTS.GENERATE}?imageUrl=${encodeURIComponent(imageUrl)}`
    );
    const data = await response.json();
    
    if (!response.ok) throw new Error(data.error);
    return data;
  } catch (error: any) {
    return { text: '', error: error.message };
  }
}

export async function uploadImage(file: File): Promise<UploadResponse> {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(API_ENDPOINTS.UPLOAD, {
      method: 'POST',
      body: formData,
    });
    const data = await response.json();

    if (!response.ok) throw new Error(data.error);
    return data;
  } catch (error: any) {
    return { url: '', error: error.message };
  }
} 