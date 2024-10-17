import { getAllPosts } from '@/lib/api';
import PostList from '@/components/PostList';

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">최근 게시물</h1>
      <PostList posts={posts} />
    </div>
  );
}