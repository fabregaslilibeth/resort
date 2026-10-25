import {
  resortActivities,
  resortFoodBeverage,
  resortServices,
  roomComforts,
  roomEntertainment,
  roomFeatures,
} from '@/data/roomFeatures';

const ROOM = [
  { title: 'Features', items: roomFeatures },
  { title: 'Comforts', items: roomComforts },
  { title: 'To enjoy', items: roomEntertainment },
];

const RESORT = [
  { title: 'Services', items: resortServices },
  { title: 'Things to do', items: resortActivities },
  { title: 'Food & drink', items: resortFoodBeverage },
];

function Columns({ groups }: { groups: typeof ROOM }) {
  return (
    <div className="amenities__cols">
      {groups.map((group) => (
        <div className="amenities__col" key={group.title} data-reveal>
          <p className="amenities__group">{group.title}</p>
          <ul>
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/** What every room has; with `resort`, what the resort offers around it too. */
export function InEveryRoom({ resort = false }: { resort?: boolean }) {
  return (
    <section className="amenities" aria-labelledby="amenities-title">
      <div className="amenities__head">
        <p className="eyebrow" data-reveal>
          In every room
        </p>
        <h2 className="serif amenities__title" id="amenities-title" data-lines>
          <span className="line">
            <span>The small things,</span>
          </span>
          <span className="line">
            <span>
              <em>already taken care of.</em>
            </span>
          </span>
        </h2>
      </div>
      <Columns groups={ROOM} />
      {resort && (
        <>
          <p className="eyebrow amenities__sub" data-reveal>
            Around the resort
          </p>
          <Columns groups={RESORT} />
        </>
      )}
    </section>
  );
}
