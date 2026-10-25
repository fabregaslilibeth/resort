// First visit of the session only (the layout's head script adds .intro):
// the name rises letter by letter while a hairline fills, then the sheet
// lifts off the hero like a tide going out.
const NAME = 'Lalaguna';

export function Loader() {
  return (
    <div className="loader" data-loader aria-hidden="true">
      <p className="serif loader__name">
        {[...NAME].map((letter, i) => (
          <span className="loader__mask" key={i}>
            <span data-loader-letter>{letter}</span>
          </span>
        ))}
      </p>
      <p className="loader__sub" data-loader-sub>
        Villas · Sabang, Puerto Galera
      </p>
      <div className="loader__bar">
        <span data-loader-count>0</span>
        <span className="loader__track">
          <span className="loader__fill" data-loader-fill />
        </span>
        <span>100</span>
      </div>
    </div>
  );
}
