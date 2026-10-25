import type { Metadata } from 'next';
import { DiveEnquiry } from '../../components/dive/DiveEnquiry';
import { divemasterSteps } from '@/data/divemaster';
import { DivemasterPackages, DivemasterPhases } from '../../components/dive/Divemaster';
import { Facts } from '../../components/sections/Facts';
import { Numbered } from '../../components/sections/Numbered';
import { Statement } from '../../components/sections/Statement';
import { BackToTop } from '../../components/site/BackToTop';
import { PageHero } from '../../components/site/PageHero';
import { PageMotion } from '../../components/site/PageMotion';
import '../../styles/dive.css';

export const metadata: Metadata = {
  title: 'PADI Divemaster internship · LLV Divers, Puerto Galera',
  description:
    'A four-week PADI Divemaster internship in Puerto Galera: unlimited diving, accommodation at our DM Lodge and an IDC prep course, from $1550 at a PADI 5 Star Instructor Development Center.',
};

export default function DivemasterPage() {
  return (
    <>
      <main id="main">
        <PageHero
          eyebrow="(Dive) Go professional"
          lines={['Become', 'a Divemaster.']}
          lead="A comprehensive one-month PADI Divemaster course in the heart of Puerto Galera, built to give you the skills, knowledge and certification for a career in diving."
          image="/images/home/speedboat.jpg"
          alt="A dive speedboat crossing the bay at Sabang"
        />
        <Statement
          eyebrow="Why train with us"
          lines={['Comfort, adventure', 'and real training.']}
          text={[
            'Lalaguna Villas offers the perfect blend of comfort, adventure and professional training: affordable accommodation in state-of-the-art facilities, with unparalleled hospitality.',
            'We’re also a PADI 5 Star Instructor Development Center. Your training is run by instructors who understand the next level and will prepare you for it, and if you go on to Open Water Scuba Instructor, you can join our PADI IDC in the same facility.',
          ]}
        />
        <Facts
          label="The internship at a glance"
          facts={[
            { value: '4 weeks', label: 'A comprehensive program' },
            { value: 'Unlimited', label: 'Diving during the course' },
            { value: 'DM Lodge', label: 'Accommodation included' },
            { value: '5 Star IDC', label: 'PADI Instructor Development Center' },
          ]}
        />
        <DivemasterPackages />
        <Numbered
          eyebrow="Course details"
          lines={['A month of', 'real diving.']}
          intro="Led by seasoned PADI instructors, you’ll work through dive theory, practical skills, leadership and environmental awareness."
          items={divemasterSteps}
        />
        <DivemasterPhases />
        <DiveEnquiry
          lines={['Ready', 'to enrol?']}
          text="Secure your spot for a month of excitement, growth and exploration in one of the most renowned diving destinations in the Philippines."
          course="Divemaster Course - Bronze"
        />
      </main>
      <BackToTop />
      <PageMotion />
    </>
  );
}
