import { TransitionLink } from '../site/Curtain';
import { findCategory } from './menu-data';

/**
 * The Filipino dishes on the menu running across the page. The list is read
 * once; the copy that closes the loop is hidden from screen readers.
 */
export function DishMarquee() {
  const category = findCategory('filipino');
  if (!category) return null;
  const names = [...new Set(category.items.map((item) => item.title))];

  const row = (hidden: boolean) => (
    <ul className="marquee__row" aria-hidden={hidden || undefined}>
      {names.map((name) => (
        <li className="serif" key={name}>
          {name}
        </li>
      ))}
    </ul>
  );

  return (
    <section className="marquee" aria-labelledby="marquee-title">
      <div className="marquee__head">
        <h2 className="eyebrow" id="marquee-title" data-reveal>
          Filipino, cooked here
        </h2>
        <TransitionLink className="text-link" href={`/dining/menu/${category.slug}`} data-reveal>
          {category.items.length} Filipino dishes
        </TransitionLink>
      </div>
      <div className="marquee__track">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
