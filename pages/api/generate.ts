import { NextApiRequest, NextApiResponse } from 'next'
import Replicate from 'replicate'

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN || '',
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const imageUrl = req.query.imageUrl as string
    if (!imageUrl) {
      return res.status(400).json({ error: '缺少图片URL参数' })
    }

    console.log('Processing image:', imageUrl) // 调试日志

    // 使用 BLIP 模型生成基础描述
    const output = await replicate.run(
      'salesforce/blip:2e1dddc8621f72155f24cf2e0adbde548458d3cab9f00c0139eea840d0ac4746',
      {
        input: {
          image: imageUrl,
          task: 'image_captioning',
        },
      }
    )

    console.log('Generated output:', output) // 调试日志

    return res.status(200).json({ description: output })
  } catch (error: any) {
    console.error('Generate error:', error)
    return res.status(500).json({ 
      error: error.message || '生成描述失败，请重试' 
    })
  }
}
