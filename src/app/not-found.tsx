import { TransitionLink } from './components/site/Curtain';

// Any address with no page. No hero, so the header is solid from the top.
export default function NotFound() {
  return (
    <main id="main" className="lost">
      <p className="eyebrow">Error 404</p>
      <h1 className="serif lost__title">
        Lost at sea.
        <br />
        <em>This page isn’t here.</em>
      </h1>
      <p className="lost__text">It may have moved when the site was rebuilt. These will get you back to dry land:</p>
      <ul className="lost__links">
        <li>
          <TransitionLink className="text-link" href="/">
            Home
          </TransitionLink>
        </li>
        <li>
          <TransitionLink className="text-link" href="/villas">
            The villas
          </TransitionLink>
        </li>
        <li>
          <TransitionLink className="text-link" href="/diving">
            Diving
          </TransitionLink>
        </li>
        <li>
          <TransitionLink className="text-link" href="/contact">
            Contact
          </TransitionLink>
        </li>
      </ul>
    </main>
  );
}
