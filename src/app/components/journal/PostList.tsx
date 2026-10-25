import Image from 'next/image';
import { TransitionLink } from '../site/Curtain';
import { excerpt, formatDate, readingTime, type Post } from './posts';

/** Posts as editorial rows: photo, then category, date, title and the opening lines. The first can lead larger. */
export function PostList({ posts, lead = false }: { posts: Post[]; lead?: boolean }) {
  return (
    <ol className="posts">
      {posts.map((post, i) => (
        <li className={`post${lead && i === 0 ? ' post--lead' : ''}`} key={post.slug}>
          <TransitionLink className="post__link" href={`/blogs/${post.slug}`}>
            <span className="post__frame" data-reveal-img>
              <Image src={post.image} alt="" fill sizes={lead && i === 0 ? '(max-width: 900px) 100vw, 60vw' : '(max-width: 900px) 100vw, 40vw'} />
            </span>
            <span className="post__body" data-reveal>
              <span className="eyebrow post__meta">
                {post.category} · <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
              <span className="subhead post__title">{post.title}</span>
              <span className="post__excerpt">{excerpt(post)}</span>
              <span className="text-link post__more" aria-hidden="true">
                Read · {readingTime(post)} min
              </span>
            </span>
          </TransitionLink>
        </li>
      ))}
    </ol>
  );
}
