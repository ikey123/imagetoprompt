// 博客首页 (/blog)
// 内容营销，覆盖长尾关键词
const BlogIndex = () => {
  return (
    <Layout>
      <BlogList categories={[
        'AI Prompt Guides',
        'Midjourney Tips',
        'Stable Diffusion Tutorials'
      ]} />
    </Layout>
  );
}; 