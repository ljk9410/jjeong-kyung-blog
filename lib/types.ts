import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  content: MDXRemoteSerializeResult | string;
}