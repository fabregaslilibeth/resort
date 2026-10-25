import { Split } from '../sections/Split';

/** LLV Divers' day trips: Verde Island, and Anilao (coming soon). */
export function DayTrips() {
  return (
    <>
      <Split
        id="day-trips"
        image="/images/home/bay-view.jpg"
        alt="The bay at Sabang, looking out towards Verde Island"
        eyebrow="Day trips"
        lines={['Verde Island,', 'for the day.']}
        text={[
          'Some of the best diving anywhere in the world, a short speedboat ride from our beach. Our team takes care of everything; it’s always a memorable day.',
        ]}
        items={[
          '40 minutes by speedboat',
          'BBQ and drinks on the beach in a tropical hut',
          'At least 4 divers, certified to Advanced Open Water or above',
          'Enriched Air, Drift and Deep Diver recommended',
        ]}
      >
        <a className="pill pill--dark" href="#enquire">
          Ask about Verde Island
        </a>
      </Split>
      <Split
        flip
        image="/images/home/reef.jpg"
        alt="Reef fish over a coral-covered wreck"
        eyebrow="Coming soon"
        lines={['Anilao,', 'for macro.']}
        text={[
          'Our newest day trip goes to Anilao, “the birthplace of diving in the Philippines”: a Marine Protected Sanctuary and the best spot in the country for underwater macro photography. Details and prices are on the way.',
        ]}
        items={['Marine Protected Sanctuary', 'Great dive sites: Mainit Point, Sombrero, Secret Bay']}
      />
    </>
  );
}
