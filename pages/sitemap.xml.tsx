import { GetServerSidePropsContext } from 'next';

const EXTERNAL_DATA_URL = 'https://imagetoprompt.art';

function generateSiteMap() {
  // 定义主要页面
  const mainPages = [
    { path: '/', priority: '1.00', changefreq: 'daily' },
    { path: '/privacy', priority: '0.80', changefreq: 'monthly' },
    { path: '/terms', priority: '0.80', changefreq: 'monthly' },
    { path: '/contact', priority: '0.80', changefreq: 'monthly' },
    { path: '/blog', priority: '0.80', changefreq: 'weekly' },
  ];

  // 定义博客文章（这里可以改成从API或数据库动态获取）
  const blogPosts = [
    { path: '/blog/prompt-guide-1', priority: '0.64', changefreq: 'weekly' },
    { path: '/blog/prompt-guide-2', priority: '0.64', changefreq: 'weekly' },
    { path: '/blog/midjourney-1', priority: '0.64', changefreq: 'weekly' },
    { path: '/blog/midjourney-2', priority: '0.64', changefreq: 'weekly' },
    { path: '/blog/sd-tutorial-1', priority: '0.64', changefreq: 'weekly' },
    { path: '/blog/sd-tutorial-2', priority: '0.64', changefreq: 'weekly' },
  ];

  const currentDate = new Date().toISOString();

  const allUrls = [...mainPages, ...blogPosts].map(page => `
    <url>
      <loc>${EXTERNAL_DATA_URL}${page.path}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
            xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${allUrls}
    </urlset>`;
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  if (!res) {
    return { props: {} };
  }
  
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function Sitemap() {
  return null;
} 