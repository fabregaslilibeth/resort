import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PostList } from '../../components/journal/PostList';
import { author, excerpt, findPost, formatDate, posts, readingTime } from '../../components/journal/posts';
import { BackToTop } from '../../components/site/BackToTop';
import { BookCta } from '../../components/site/BookCta';
import { TransitionLink } from '../../components/site/Curtain';
import { PageMotion } from '../../components/site/PageMotion';
import '../../styles/about.css';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = findPost((await params).slug);
  if (!post) return {};
  return {
    title: `${post.title} · Journal · Lalaguna Villas`,
    description: excerpt(post, 155),
    openGraph: { images: [post.image] },
  };
}

// The article opens on its title rather than a full-bleed photo, so the
// header is solid from the top; PageMotion still plays the entrance.
export default async function PostPage({ params }: PageProps) {
  const post = findPost((await params).slug);
  if (!post) notFound();
  const others = posts.filter((other) => other.slug !== post.slug).slice(0, 3);

  return (
    <>
      <main id="main">
        <article className="article" aria-labelledby="article-title">
          <header className="article__head">
            <p className="eyebrow" data-hero-fade>
              <TransitionLink href="/blogs">Journal</TransitionLink> · {post.category}
            </p>
            <h1 className="serif article__title" id="article-title" data-hero-title>
              <span className="line">
                <span>{post.title}</span>
              </span>
            </h1>
            <p className="article__byline" data-hero-fade>
              {author(post)} · <time dateTime={post.date}>{formatDate(post.date)}</time> · {readingTime(post)} min read
            </p>
          </header>
          <div className="article__media" data-hero-fade>
            <div className="article__zoom" data-hero-zoom>
              <Image src={post.image} alt="" fill priority sizes="(max-width: 1200px) 100vw, 1200px" />
            </div>
          </div>
          {/* The journal's own HTML, from src/data/blogs.ts. */}
          <div className="article__body" dangerouslySetInnerHTML={{ __html: post.content }} />
          {post.tags.length > 0 && (
            <ul className="article__tags" aria-label="Tags">
              {post.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          )}
        </article>
        <section className="journal journal--more" aria-labelledby="more-title">
          <div className="journal__head">
            <h2 className="serif journal__title" id="more-title" data-lines>
              <span className="line">
                <span>More from the journal</span>
              </span>
            </h2>
            <TransitionLink className="text-link" href="/blogs" data-reveal>
              All posts
            </TransitionLink>
          </div>
          <PostList posts={others} />
        </section>
        <BookCta />
      </main>
      <BackToTop />
      <PageMotion />
    </>
  );
}
