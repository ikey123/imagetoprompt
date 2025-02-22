import styles from './Blog.module.css';

interface BlogListProps {
  categories: string[];
}

export default function BlogList({ categories }: BlogListProps) {
  return (
    <div className={styles.blogList}>
      <h1>Blog</h1>
      <div className={styles.categories}>
        {categories.map((category) => (
          <div key={category} className={styles.category}>
            <h2>{category}</h2>
            {/* 博客文章列表将在这里添加 */}
          </div>
        ))}
      </div>
    </div>
  );
} 