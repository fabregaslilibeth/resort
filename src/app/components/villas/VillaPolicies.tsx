import { policies } from '@/data/policies';

const pad = (n: number) => String(n).padStart(2, '0');

// The booking terms as an accordion: native <details>, so it works and
// reads well without any script.
export function VillaPolicies() {
  return (
    <section className="vpolicies" aria-labelledby="vpolicies-title">
      <div className="vpolicies__head">
        <p className="eyebrow" data-reveal>
          Good to know
        </p>
        <h2 className="serif vpolicies__title" id="vpolicies-title" data-lines>
          <span className="line">
            <span>Cancellation &amp;</span>
          </span>
          <span className="line">
            <span>
              <em>weather guarantee.</em>
            </span>
          </span>
        </h2>
      </div>
      <div className="vpolicies__list" data-reveal>
        {policies.map((policy, i) => (
          <details className="vpolicy" key={policy.title}>
            <summary>
              <span className="vpolicy__num">{pad(i + 1)}</span>
              <span className="subhead vpolicy__title">{policy.title}</span>
              <span className="vpolicy__icon" aria-hidden="true" />
            </summary>
            <div className="vpolicy__body">
              {policy.quote && <p className="serif vpolicy__quote">“{policy.quote}”</p>}
              {policy.text?.map((line) => (
                <p key={line}>{line}</p>
              ))}
              {policy.items && (
                <ul>
                  {policy.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {policy.note && <p className="vpolicy__note">{policy.note}</p>}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
