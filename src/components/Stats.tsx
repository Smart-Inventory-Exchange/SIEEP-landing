import { Reveal } from './Reveal';
import { STATS } from '../data';

const renderValue = (v: string) => {
  if (v.startsWith('AED ')) {
    return (
      <>
        <span className="cur">AED</span>
        {v.slice(4)}
      </>
    );
  }
  return v;
};

export function Stats() {
  return (
    <section className="stats-band">
      <div className="shell">
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <Reveal key={s.l} delay={i * 90} className="stat">
              <div className="v">{renderValue(s.v)}</div>
              <div className="l">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
