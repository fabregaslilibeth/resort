import { formatPrice, type MenuCategory } from './menu-data';

/** One category's dishes: name, a dotted leader to the price, then what's in it. */
export function Dishes({ category }: { category: MenuCategory }) {
  return (
    <ul className="dishes" data-reveal>
      {category.items.map((item) => {
        const price = formatPrice(item.price);
        return (
          <li className="dish" key={item.id}>
            <p className="dish__top">
              <span className="subhead dish__name">{item.title}</span>
              <span className="dish__leader" aria-hidden="true" />
              {price && <span className="dish__price">{price}</span>}
            </p>
            {(item.content || item.code) && (
              <p className="dish__text">
                {item.content}
                {item.code && <small className="dish__code">{item.code}</small>}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}
