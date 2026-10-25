import type { Metadata } from 'next';
import { locations } from '@/data/locations';
import { excursions, resortEntertainment } from '@/data/resort';
import { site } from '@/data/site';
import { activityGroups, deskContacts, extremeSports, landRows, waterRows } from '../components/activities/activity-data';
import { Enquiry } from '../components/sections/Enquiry';
import { EnquiryForm } from '../components/sections/EnquiryForm';
import { Ledger } from '../components/sections/Ledger';
import { ListColumns } from '../components/sections/ListColumns';
import { Split } from '../components/sections/Split';
import { Statement } from '../components/sections/Statement';
import { BackToTop } from '../components/site/BackToTop';
import { TransitionLink } from '../components/site/Curtain';
import { PageHero } from '../components/site/PageHero';
import { PageMotion } from '../components/site/PageMotion';

export const metadata: Metadata = {
  title: 'Activities · Lalaguna Villas, Puerto Galera',
  description:
    'Island hopping, snorkelling, fishing, sunset cruises, inland tours to the waterfalls and Extreme Sports Philippines, booked at the Lalaguna Villas activities desk in Sabang.',
};

const PLACES = locations.map((place) => ({
  title: place.name,
  badge: place.category,
  text: place.description,
  details: place.features,
  meta: [place.location, place.trekTime && `${place.trekTime} on foot`].filter(Boolean).join(' · '),
}));

export default function ActivitiesPage() {
  return (
    <>
      <main id="main">
        <PageHero
          eyebrow="(Activities) Water & land"
          lines={['Island hopping,', 'falls and fishing.']}
          lead="Our activities desk books tours, excursions and local attractions: out on the water from our own beach, or inland to the waterfalls, villages and viewpoints of Puerto Galera."
          image="/images/home/shore.jpg"
          alt="Two boats moored over the shallow reef, seen from directly above"
          water
        />
        <Statement
          eyebrow="The activities desk"
          lines={['Out on the water,', 'or up into the hills.']}
          text={[
            'Snorkel the reef off our beach, hop between islands on our speedboat, cast a line or watch the sun go down from a cruise.',
            'Inland, there are waterfalls to swim in, an Iraya Mangyan village, a golf course with a zip line, and an adventure park for anyone after an adrenaline rush. Tell the desk what you’d like and we’ll arrange it.',
          ]}
        />
        <Ledger
          id="water"
          eyebrow="On the water"
          lines={['Snorkel, cruise', 'or cast a line.']}
          intro="Prices in Philippine pesos."
          rows={waterRows}
        />
        <Ledger id="land" eyebrow="On land" lines={['Waterfalls, karts', 'and the hills.']} intro="Prices in Philippine pesos." rows={landRows}>
          {extremeSports && (
            <div className="price-card" data-reveal>
              <p className="eyebrow">{extremeSports.name}</p>
              <p className="price-card__lead">{extremeSports.activities.join(' · ')}</p>
              <table className="price-card__table">
                <thead>
                  <tr>
                    <th scope="col">Activities</th>
                    <th scope="col">Per guest</th>
                  </tr>
                </thead>
                <tbody>
                  {extremeSports.prices.map((row) => (
                    <tr key={row.count}>
                      <th scope="row">Any {row.count}</th>
                      <td>{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {extremeSports.note && <p className="price-card__note">{extremeSports.note}.</p>}
            </div>
          )}
        </Ledger>
        <Split
          image="/images/home/fins.jpg"
          alt="Fins drying on the bow, the bay behind"
          eyebrow="Rather go deeper?"
          lines={['Five minutes', 'to the dive sites.']}
          text={['LLV Divers is on our beach, with fun dives for certified divers and PADI courses from your first breath underwater.']}
        >
          <TransitionLink className="text-link" href="/diving">
            Diving at Lalaguna
          </TransitionLink>
        </Split>
        <Ledger
          id="explore"
          eyebrow="Places to explore"
          lines={['Beaches, falls', 'and old lighthouses.']}
          intro="All within reach on an inland tour or island hopping trip; the desk will put a day together."
          rows={PLACES}
        />
        <ListColumns
          eyebrow="Also at the desk"
          lines={['Excursions,', 'and nights in.']}
          columns={[
            { title: 'Excursions', items: excursions },
            { title: 'At the resort', items: resortEntertainment },
          ]}
        />
        <Enquiry
          eyebrow="Activities desk"
          lines={['Plan', 'your day.']}
          text="Tell us what you’d like to do, when and how many of you; we’ll come back with times and anything you need to bring."
          contacts={deskContacts}
        >
          <EnquiryForm
            id="activity"
            to={site.bookingEmail}
            subject="Activity enquiry"
            choice={{ label: 'Activity', groups: activityGroups }}
            date="Date"
            guests="Guests"
            message="Questions, or anything else you’d like to do"
            submit="Send enquiry"
          />
        </Enquiry>
      </main>
      <BackToTop />
      <PageMotion />
    </>
  );
}
