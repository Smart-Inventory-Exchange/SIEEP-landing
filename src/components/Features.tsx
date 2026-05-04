import { Reveal } from './Reveal';
import { FEATURES } from '../data';

export function Features() {
  return (
    <section className="section" id="features">
      <div className="shell">
        <div className="features-head">
          <span className="eyebrow">Built for the back of house</span>
          <h2 className="display h-xl">
            Tools that pay for themselves <em>by Tuesday.</em>
          </h2>
        </div>
        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <Reveal key={f.t} delay={i * 90} className="feature">
              <div className="e">{f.e}</div>
              <div className="t">{f.t}</div>
              <div className="d">{f.d}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
