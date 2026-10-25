'use client';

// A YouTube film behind a poster: nothing loads from YouTube (no player, no
// cookies) until someone presses play.
import { useState } from 'react';
import Image from 'next/image';

interface FilmProps {
  videoId: string;
  title: string;
  poster: string;
}

export function Film({ videoId, title, poster }: FilmProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="film" aria-label={title}>
      <div className="film__frame" data-reveal-img>
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button type="button" className="film__poster" onClick={() => setPlaying(true)} aria-label={`Play: ${title}`}>
            <Image src={poster} alt="" fill sizes="100vw" />
            <span className="film__play" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d="M8 5.5v13l11-6.5z" />
              </svg>
            </span>
            <span className="subhead film__label">{title}</span>
          </button>
        )}
      </div>
    </section>
  );
}
