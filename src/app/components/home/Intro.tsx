import Image from 'next/image';
import { TransitionLink } from '../site/Curtain';

// A statement beside two overlapping photos that drift at different speeds
// (data-speed, see scenes.ts), then three facts.
export function Intro() {
  return (
    <section className="intro" id="resort" aria-labelledby="intro-title">
      <div className="intro__top">
        <span className="eyebrow">(01) The resort</span>
        <span className="eyebrow">Small Lalaguna Beach · Sabang</span>
      </div>

      <div className="intro__grid">
        <div className="intro__copy">
          <h2 className="serif intro__title" id="intro-title" data-lines>
            <span className="line">
              <span>A small resort</span>
            </span>
            <span className="line">
              <span>on the water,</span>
            </span>
            <span className="line">
              <span>
                <em>a short walk from Sabang.</em>
              </span>
            </span>
          </h2>
          <p className="intro__lead" data-reveal>
            Private, villa-style rooms on Small Lalaguna Beach, looking out over the pristine water of Puerto Galera, one of Asia’s famous dive
            hubs. The dive boat leaves from the sand, and the kitchen never closes.
          </p>
          <TransitionLink className="text-link" href="/about" data-reveal>
            Our story
          </TransitionLink>
        </div>

        <div className="intro__photos">
          <figure className="intro__photo intro__photo--main" data-reveal-img>
            <div className="intro__drift" data-speed="-0.1">
              <Image src="/images/home/bay-view.jpg" alt="The bay at Sabang from a villa terrace" fill sizes="(max-width: 900px) 90vw, 40vw" data-reveal-zoom />
            </div>
          </figure>
          <figure className="intro__photo intro__photo--inset" data-reveal-img>
            <div className="intro__drift" data-speed="0.16">
              <Image src="/images/home/dive-boat.jpg" alt="The LLV Divers boat on the turquoise water" fill sizes="(max-width: 900px) 50vw, 22vw" data-reveal-zoom />
            </div>
          </figure>
        </div>
      </div>

      <div className="intro__facts">
        <div className="intro__fact" data-reveal>
          <p className="serif intro__big">Travelers’ Choice</p>
          <p>TripAdvisor, every year from 2020 to 2025</p>
        </div>
        <div className="intro__fact" data-reveal>
          <p className="serif intro__big">PADI 5 Star</p>
          <p>LLV Divers, our dive centre on the beach</p>
        </div>
        <div className="intro__fact" data-reveal>
          <p className="serif intro__big">24 hours</p>
          <p>Restaurant, poolside bar &amp; room service</p>
        </div>
      </div>
    </section>
  );
}
