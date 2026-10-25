import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { villas } from '@/data/villas';
import { BackToTop } from '../../components/site/BackToTop';
import { BookCta } from '../../components/site/BookCta';
import { PageHero } from '../../components/site/PageHero';
import { PageMotion } from '../../components/site/PageMotion';
import { InEveryRoom } from '../../components/villas/InEveryRoom';
import { MoreVillas } from '../../components/villas/MoreVillas';
import { toVillaCards } from '../../components/villas/villa-cards';
import { VillaGallery } from '../../components/villas/VillaGallery';
import { VillaOverview } from '../../components/villas/VillaOverview';
import { VillaPolicies } from '../../components/villas/VillaPolicies';
import '../../styles/villas.css';

type Params = Promise<{ slug: string }>;

const pad = (n: number) => String(n).padStart(2, '0');
const cards = toVillaCards(villas);

function find(slug: string) {
  const index = cards.findIndex((villa) => String(villa.id) === slug);
  return index === -1 ? null : { villa: cards[index], index };
}

/** "2Br Penthouse" → ["2Br", "Penthouse"]: the hero sets the last word in italics. */
function titleLines(name: string): string[] {
  const words = name.split(' ');
  return words.length < 2 ? [name] : [words.slice(0, -1).join(' '), words[words.length - 1]];
}

export function generateStaticParams() {
  return cards.map((villa) => ({ slug: String(villa.id) }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const found = find((await params).slug);
  if (!found) return {};
  return {
    title: `${found.villa.name} · Lalaguna Villas, Puerto Galera`,
    description: `${found.villa.name}: ${found.villa.area}, ${found.villa.sleeps} guests. ${found.villa.summary}`,
  };
}

export default async function VillaPage({ params }: { params: Params }) {
  const found = find((await params).slug);
  if (!found) notFound();
  const { villa, index } = found;
  // The next three villas round the list, so every page points somewhere new.
  const others = [1, 2, 3].map((step) => cards[(index + step) % cards.length]);

  return (
    <>
      <main id="main">
        <PageHero
          eyebrow={`(Stay) ${pad(index + 1)} / ${pad(cards.length)} · ${villa.area}`}
          lines={titleLines(villa.name)}
          lead={villa.summary}
          image={villa.photos[0]}
          alt={`The ${villa.name}`}
        />
        <VillaOverview villa={villa} />
        <VillaGallery villa={villa} />
        <InEveryRoom resort />
        <VillaPolicies />
        <MoreVillas villas={others} />
        <BookCta />
      </main>
      <BackToTop />
      <PageMotion />
    </>
  );
}
