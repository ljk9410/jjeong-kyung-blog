import { getPostBySlug, getAllPosts } from '@/lib/api';
import { notFound } from 'next/navigation';
import PostContent from '@/components/PostContent';
import Comments from '@/components/Comments';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-2xl mx-auto">
      <PostContent post={post} />
      <Comments />
    </article>
  );
}