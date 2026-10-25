import type { Metadata } from 'next';
import { funDivingData, padiCoursesData, padiSpecialtyCoursesData } from '@/data/divingCourses';
import { decode } from '../../components/dive/dive-data';
import { DiveEnquiry } from '../../components/dive/DiveEnquiry';
import { Ledger, type LedgerRow } from '../../components/sections/Ledger';
import { BackToTop } from '../../components/site/BackToTop';
import { PageHero } from '../../components/site/PageHero';
import { PageMotion } from '../../components/site/PageMotion';
import '../../styles/dive.css';

export const metadata: Metadata = {
  title: 'Diving courses & fun dives · LLV Divers, Puerto Galera',
  description:
    'Fun dives from $37, nitrox and night dives, and every PADI course from Bubblemaker and Discover Scuba Diving to Rescue Diver, specialties and Divemaster, at LLV Divers in Sabang.',
};

const DIVEMASTER = '/dive/padi-divemaster-internship';

interface Course {
  title: string;
  badge: string;
  description: string;
  features: string[];
  price: string;
  duration: string;
}

function courseRow(course: Course): LedgerRow {
  const divemaster = course.duration === 'More information';
  return {
    title: course.title,
    badge: course.badge,
    text: decode(course.description),
    details: course.features.map(decode),
    meta: divemaster ? 'The internship' : course.duration,
    href: divemaster ? DIVEMASTER : undefined,
    price: course.price.replace(' +fees', ''),
    priceNote: course.price.includes('+fees') ? 'plus PADI fees' : undefined,
  };
}

export default function DivingCoursesPage() {
  return (
    <>
      <main id="main">
        <PageHero
          eyebrow="(Dive) Courses & fun dives"
          lines={['Courses for', 'every level.']}
          lead="Recreational fun dives and PADI courses, from a first breath underwater in our pool to Divemaster."
          image="/images/home/reef.jpg"
          alt="Reef fish over a coral-covered wreck near Sabang"
          water
        />
        <Ledger
          id="fun-diving"
          eyebrow="Fun diving"
          lines={['Already', 'certified?']}
          intro="Recreational fun dives are a great way to explore the amazing dive sites around Puerto Galera, and at the same time gain experience and build your skills."
          rows={funDivingData.map((dive) => ({
            title: dive.title,
            details: dive.features,
            price: dive.price,
            priceNote: dive.priceLabel,
          }))}
        >
          <div className="price-card" data-reveal>
            <p className="eyebrow">Dive gear rental</p>
            <table className="price-card__table">
              <thead>
                <tr>
                  <th scope="col">Equipment</th>
                  <th scope="col">Per day</th>
                  <th scope="col">Per dive</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Full equipment</th>
                  <td>$20</td>
                  <td>$10</td>
                </tr>
                <tr>
                  <th scope="row">Dive computer</th>
                  <td>$10</td>
                  <td>$5</td>
                </tr>
              </tbody>
            </table>
            <p className="price-card__note">Planning several dives in a day? The daily rate works out cheaper.</p>
          </div>
        </Ledger>
        <Ledger
          id="padi-courses"
          eyebrow="PADI courses"
          lines={['From your first breath', 'to Divemaster.']}
          intro="Our team can introduce you to the world of diving, or take you on to advanced certification and beyond."
          rows={padiCoursesData.map(courseRow)}
        />
        <Ledger
          id="specialty-courses"
          eyebrow="PADI specialty courses"
          lines={['Go further,', 'go deeper.']}
          intro="Expand your diving skills and knowledge with a specialty course."
          rows={padiSpecialtyCoursesData.map(courseRow)}
        />
        <DiveEnquiry lines={['Book', 'a course.']} />
      </main>
      <BackToTop />
      <PageMotion />
    </>
  );
}
