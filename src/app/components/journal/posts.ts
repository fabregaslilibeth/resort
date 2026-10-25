// The journal (src/data/blogs.ts), newest first, with what the index and
// article pages show beside each post.
import { blogsData } from '@/data/blogs';

export type Post = (typeof blogsData)[number];

export const posts: Post[] = [...blogsData].sort((a, b) => b.date.localeCompare(a.date));

export const findPost = (slug: string) => posts.find((post) => post.slug === slug);

const text = (html: string) =>
  html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

/** The post's first real paragraph (not a short line like "Dive site name: …"), cut at a word near `length` characters. */
export function excerpt(post: Post, length = 220): string {
  const paragraphs = [...post.content.matchAll(/<p>([\s\S]*?)<\/p>/g)].map((match) => text(match[1]));
  const first = paragraphs.find((paragraph) => paragraph.length > 80) ?? paragraphs[0] ?? text(post.content);
  if (first.length <= length) return first;
  return `${first.slice(0, first.lastIndexOf(' ', length))}…`;
}

/** "2024-07-15" → "15 July 2024". */
export const formatDate = (date: string) =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

/** Minutes to read, at 220 words a minute. */
export const readingTime = (post: Post) => Math.max(1, Math.round(text(post.content).split(' ').length / 220));

/** "By: Lalaguna Villas Team" → "Lalaguna Villas Team". */
export const author = (post: Post) => post.byline.replace(/^By:\s*/, '');
