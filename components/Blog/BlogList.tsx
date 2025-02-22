import Link from 'next/link';
import styles from './Blog.module.css';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
}

interface BlogListProps {
  categories: string[];
}

const SAMPLE_POSTS: Record<string, BlogPost[]> = {
  'AI Prompt Guides': [
    {
      id: 'prompt-guide-1',
      title: 'How to Write Perfect Prompts for AI Art Generation',
      excerpt: 'Learn the essential techniques for crafting effective prompts that will help you create stunning AI artwork.',
      category: 'AI Prompt Guides',
      date: 'March 15, 2024'
    },
    {
      id: 'prompt-guide-2',
      title: 'Advanced Prompt Engineering Techniques',
      excerpt: 'Discover advanced strategies to enhance your AI art prompts and achieve better results.',
      category: 'AI Prompt Guides',
      date: 'March 10, 2024'
    }
  ],
  'Midjourney Tips': [
    {
      id: 'midjourney-1',
      title: 'Getting Started with Midjourney Image Prompts',
      excerpt: 'A comprehensive guide to creating effective prompts specifically for Midjourney.',
      category: 'Midjourney Tips',
      date: 'March 12, 2024'
    },
    {
      id: 'midjourney-2',
      title: 'Best Practices for Midjourney V6',
      excerpt: 'Learn how to make the most of Midjourney V6 with these expert tips and tricks.',
      category: 'Midjourney Tips',
      date: 'March 8, 2024'
    }
  ],
  'Stable Diffusion Tutorials': [
    {
      id: 'sd-tutorial-1',
      title: 'Stable Diffusion Prompt Guide for Beginners',
      excerpt: 'Everything you need to know to start creating amazing art with Stable Diffusion.',
      category: 'Stable Diffusion Tutorials',
      date: 'March 14, 2024'
    },
    {
      id: 'sd-tutorial-2',
      title: 'Advanced Stable Diffusion Techniques',
      excerpt: 'Take your Stable Diffusion skills to the next level with these advanced tutorials.',
      category: 'Stable Diffusion Tutorials',
      date: 'March 5, 2024'
    }
  ]
};

export default function BlogList({ categories }: BlogListProps) {
  return (
    <div className={styles.blogList}>
      <h1 className={styles.title}>AI Art Prompt Generation Blog</h1>
      <p className={styles.description}>
        Discover tips, tutorials, and best practices for generating perfect AI art prompts
      </p>
      
      <div className={styles.categories}>
        {categories.map((category) => (
          <div key={category} className={styles.category}>
            <h2>{category}</h2>
            <div className={styles.posts}>
              {SAMPLE_POSTS[category]?.map((post) => (
                <Link href={`/blog/${post.id}`} key={post.id} className={styles.post}>
                  <article>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className={styles.meta}>
                      <span className={styles.date}>{post.date}</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 