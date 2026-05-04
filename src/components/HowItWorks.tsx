import { Reveal } from './Reveal';
import { STEPS } from '../data';

export function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="shell how-grid">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2 className="display h-lg">From shelf to neighbor in under an hour.</h2>
          <p className="body-sm section-head-lede">
            Three steps. AED-priced. Pickup before closing.
            Onboarding takes 12 minutes — your first listing goes live the same day.
          </p>
        </div>
        <div>
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 100} className="how-step">
              <div className="n">{s.n}</div>
              <div>
                <div className="t">{s.t}</div>
                <div className="d">{s.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
