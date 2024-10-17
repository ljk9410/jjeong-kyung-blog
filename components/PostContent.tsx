"use client"

import { Post } from '@/lib/types';
import { MDXRemote } from 'next-mdx-remote';

export default function PostContent({ post }: { post: Post }) {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <time className="text-muted-foreground mb-4 block">{post.date}</time>
      <div className="prose dark:prose-invert">
        <MDXRemote {...post.content} />
      </div>
    </>
  );
}