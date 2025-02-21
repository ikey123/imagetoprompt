import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

// 检查必要的环境变量
const requiredEnvVars = {
  R2_ACCESS_KEY_ID: process.env.R2_ACCESS_KEY_ID,
  R2_SECRET_ACCESS_KEY: process.env.R2_SECRET_ACCESS_KEY,
  R2_BUCKET_NAME: process.env.R2_BUCKET_NAME,
  PUBLIC_WORKER_URL: process.env.PUBLIC_WORKER_URL,
  R2_ACCOUNT_ID: process.env.R2_ACCOUNT_ID,
};

// 验证环境变量是否都已设置
for (const [key, value] of Object.entries(requiredEnvVars)) {
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
}

const s3 = new S3Client({
  region: 'auto',
  endpoint: `https://${requiredEnvVars.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: requiredEnvVars.R2_ACCESS_KEY_ID,
    secretAccessKey: requiredEnvVars.R2_SECRET_ACCESS_KEY,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const form = formidable({
      maxFileSize: 5 * 1024 * 1024, // 5MB
    });

    const [fields, files] = await form.parse(req);
    const file = files.file?.[0];

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const fileContent = await fs.promises.readFile(file.filepath);
    const fileName = `${Date.now()}-${file.originalFilename}`;

    await s3.send(new PutObjectCommand({
      Bucket: requiredEnvVars.R2_BUCKET_NAME,
      Key: fileName,
      Body: fileContent,
      ContentType: file.mimetype,
    }));

    const url = `${requiredEnvVars.PUBLIC_WORKER_URL}/${fileName}`;

    // 清理临时文件
    await fs.promises.unlink(file.filepath);

    return res.status(200).json({ url });
  } catch (error: any) {
    console.error('Upload error:', error);
    return res.status(500).json({ 
      error: error.message || 'Failed to upload file'
    });
  }
}