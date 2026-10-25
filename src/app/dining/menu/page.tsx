import type { Metadata } from 'next';
import { DineEnquiry } from '../../components/dine/DineEnquiry';
import { Dishes } from '../../components/dine/Dishes';
import { MenuNav } from '../../components/dine/MenuNav';
import { allCategories, menuGroups } from '../../components/dine/menu-data';
import { BackToTop } from '../../components/site/BackToTop';
import { TransitionLink } from '../../components/site/Curtain';
import { PageHero } from '../../components/site/PageHero';
import { PageMotion } from '../../components/site/PageMotion';
import '../../styles/dine.css';

export const metadata: Metadata = {
  title: 'The menu · Lalaguna Villas, Puerto Galera',
  description: `The full menu at Lalaguna Villas: ${allCategories.length} sections of food, drinks and wine, from breakfast and Filipino favourites to the owners’ cellar.`,
};

export default function MenuPage() {
  const nav = menuGroups.map(({ id, label, categories }) => ({
    id,
    label,
    categories: categories.map(({ title, slug }) => ({ title, slug })),
  }));

  return (
    <>
      <main id="main">
        <PageHero
          eyebrow="(Dine) The menu"
          lines={['Everything', 'we serve.']}
          lead="Asian and Western cooking, local beers, cocktails and the owners’ cellar, from the restaurant, the poolside bar and room service, 24 hours a day."
          image="/images/home/dusk.jpg"
          alt="Dusk over the bay at Sabang, dive boats at anchor"
        />
        <MenuNav groups={nav} />
        <div className="carte">
          <p className="carte__note" data-reveal>
            Prices in Philippine pesos.
          </p>
          {menuGroups.map((group) => (
            <section className="carte__group" id={`menu-${group.id}`} aria-labelledby={`menu-${group.id}-title`} key={group.id}>
              <h2 className="serif carte__label" id={`menu-${group.id}-title`} data-lines>
                <span className="line">
                  <span>{group.label}</span>
                </span>
              </h2>
              {group.categories.map((category) => (
                <section className="carte__section" id={category.slug} aria-labelledby={`${category.slug}-title`} data-menu-section key={category.slug}>
                  <div className="carte__head" data-reveal>
                    <h3 className="serif carte__title" id={`${category.slug}-title`}>
                      {category.title}
                    </h3>
                    <TransitionLink className="carte__own" href={`/dining/menu/${category.slug}`}>
                      {category.items.length} {category.items.length === 1 ? 'item' : 'items'}
                      <span className="sr-only"> in {category.title}, on a page of their own</span>
                    </TransitionLink>
                  </div>
                  <Dishes category={category} />
                </section>
              ))}
            </section>
          ))}
        </div>
        <DineEnquiry />
      </main>
      <BackToTop />
      <PageMotion />
    </>
  );
}
