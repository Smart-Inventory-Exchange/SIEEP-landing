import { Reveal } from './Reveal';
import { HeroCard } from './HeroCard';

const AVATARS = ['LC', 'FP', 'MR', 'BB'] as const;

export function Hero() {
  return (
    <section className="hero">
      <div className="shell hero-grid">
        <div>
          <Reveal as="span" className="pill">
            <span className="dot" /> Live across Dubai · 340 stores onboard from Deira to Marina
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display h-xxl">
              The marketplace for <em>near-expiry</em> inventory across the UAE.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="body-md">
              Expirium lets bakeries, supermarkets and restaurants from Jumeirah to Sharjah trade
              soon-to-expire stock with neighbours — recovering Dirhams before stock hits the bin.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="hero-cta">
              <a href="#join" className="btn btn-primary">Reserve your store</a>
              <a href="#how" className="btn btn-ghost">See how it works →</a>
            </div>
          </Reveal>
          <Reveal delay={280}>
            <div className="hero-trust">
              <div className="avatar-stack">
                {AVATARS.map((label) => <span key={label} className="avatar">{label}</span>)}
              </div>
              <span className="lbl">
                Trusted by independent grocers and HoReCa across the Emirates
              </span>
            </div>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <HeroCard />
        </Reveal>
      </div>
    </section>
  );
}
