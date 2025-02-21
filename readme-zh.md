# AI图像生成项目

基于Next.js实现的图像生成应用，集成Replicate AI模型API。

## 技术栈
- Next.js 13+ (App Router)
- TypeScript
- Tailwind CSS
- Replicate API

## 使用模型
本项目当前使用Replicate平台的以下模型：
`stability-ai/sdxl@39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b`

（请根据实际使用的模型修改上述标识符，可在Replicate官网查看最新模型版本）

## 环境变量配置
复制`.env.example`创建`.env.local`文件：
bash
REPLICATE_API_TOKEN=your_api_token_here
REPLICATE_MODEL_VERSION=模型版本号
NEXT_PUBLIC_MODEL_NAME=stability-ai/sdxl@39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b

## 项目结构

```bash
.
├── pages
│ ├── app.tsx # 全局布局和样式
│ └── index.tsx # 主页面（包含图像上传/生成逻辑）
├── public # 静态资源
└── utils # API请求处理
```

## 运行项目

```bash
pnpm dev
```

## 部署准备
1. 在Replicate官网创建账号并获取API Token
2. 选择需要的AI模型并记录模型标识符
3. 配置Vercel环境变量

## 注意事项
- 图片生成需要Replicate API额度
- 大尺寸图片生成可能需要调整API超时设置
- 建议部署时配置CDN缓存策略

请根据实际项目情况调整以下内容：
1. 替换REPLICATE_MODEL_VERSION为实际使用的模型版本
2. 如果使用其他模型（如kuprel/min-dalle），需修改模型标识符
3. 可在Replicate模型库查看完整模型列表：https://replicate.com/explore