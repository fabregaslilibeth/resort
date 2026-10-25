import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DineEnquiry } from '../../../components/dine/DineEnquiry';
import { Dishes } from '../../../components/dine/Dishes';
import { allCategories, findCategory, groupOfCategory } from '../../../components/dine/menu-data';
import { BackToTop } from '../../../components/site/BackToTop';
import { TransitionLink } from '../../../components/site/Curtain';
import { PageHero } from '../../../components/site/PageHero';
import { PageMotion } from '../../../components/site/PageMotion';
import '../../../styles/dine.css';

interface PageProps {
  params: Promise<{ category: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return allCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = findCategory((await params).category);
  if (!category) return {};
  return {
    title: `${category.title} · The menu · Lalaguna Villas`,
    description: `${category.title} at Lalaguna Villas, Puerto Galera: ${category.items
      .slice(0, 4)
      .map((item) => item.title)
      .join(', ')} and more, served 24 hours.`,
  };
}

export default async function MenuCategoryPage({ params }: PageProps) {
  const category = findCategory((await params).category);
  if (!category) notFound();
  const group = groupOfCategory(category);
  const at = allCategories.indexOf(category);
  const prev = allCategories[at - 1];
  const next = allCategories[at + 1];
  const count = category.items.length;
  const noun = { food: ['dish', 'dishes'], drinks: ['drink', 'drinks'], wine: ['wine', 'wines'] }[group.id][count === 1 ? 0 : 1];

  return (
    <>
      <main id="main">
        <PageHero
          eyebrow={`(Dine) The menu · ${group.label}`}
          lines={[group.from, category.title]}
          lead={`${count} ${noun}, from the restaurant, the poolside bar and room service, 24 hours a day.`}
          image={group.image}
          alt={group.alt}
        />
        <section className="carte carte--one" aria-labelledby="carte-title">
          <div className="carte__head" data-reveal>
            <h2 className="serif carte__title" id="carte-title">
              {category.title}
            </h2>
            <p className="carte__note">Prices in Philippine pesos.</p>
          </div>
          <Dishes category={category} />
        </section>
        <nav className="pager" aria-label="More of the menu">
          {prev ? (
            <TransitionLink className="pager__link" href={`/dining/menu/${prev.slug}`} data-reveal>
              <span className="eyebrow">Previous</span>
              <span className="subhead pager__name">{prev.title}</span>
            </TransitionLink>
          ) : (
            <span />
          )}
          <TransitionLink className="text-link pager__all" href={`/dining/menu#${category.slug}`} data-reveal>
            The full menu
          </TransitionLink>
          {next ? (
            <TransitionLink className="pager__link pager__link--next" href={`/dining/menu/${next.slug}`} data-reveal>
              <span className="eyebrow">Next</span>
              <span className="subhead pager__name">{next.title}</span>
            </TransitionLink>
          ) : (
            <span />
          )}
        </nav>
        <DineEnquiry />
      </main>
      <BackToTop />
      <PageMotion />
    </>
  );
}
