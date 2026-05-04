import { Reveal } from './Reveal';
import { STATS } from '../data';

export function Stats() {
  return (
    <section className="stats-band">
      <div className="shell">
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <Reveal key={s.l} delay={i * 90} className="stat">
              <div className="v">{s.v}</div>
              <div className="l">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
