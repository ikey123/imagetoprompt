// 博客首页 (/blog)
// 内容营销，覆盖长尾关键词
import Layout from '../../components/Layout';
import BlogList from '../../components/Blog/BlogList';

const BlogIndex = () => {
  return (
    <Layout
      title="AI Image to Prompt Generator Guides | Free Tools & Tips for Midjourney, Stable Diffusion"
      description="Expert guides on using image to prompt generators. Learn how to create perfect AI art prompts for Midjourney & Stable Diffusion. Free tools, tips & tutorials for better prompt engineering."
    >
      <BlogList 
        categories={[
          'AI Prompt Guides',
          'Midjourney Tips',
          'Stable Diffusion Tutorials'
        ]} 
      />
    </Layout>
  );
};

export default BlogIndex; 