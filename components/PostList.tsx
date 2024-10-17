import Link from 'next/link';
import { Post } from '@/lib/types';

export default function PostList({ posts }: { posts: Omit<Post, 'content'>[] }) {
  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li key={post.slug} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
          <Link href={`/posts/${post.slug}`} className="block">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-muted-foreground mb-2">{post.excerpt}</p>
            <time className="text-sm text-muted-foreground">{post.date}</time>
          </Link>
        </li>
      ))}
    </ul>
  );
}