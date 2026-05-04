import { motion } from 'framer-motion';
import { PRODUCTS, formatAED, productImage } from '../data';

const LIVE_DOT_ANIMATE = { opacity: [1, 0.4, 1] };
const LIVE_DOT_TRANSITION = { duration: 1.6, repeat: Infinity, ease: 'easeInOut' as const };

export function HeroCard() {
  const featured = PRODUCTS.slice(0, 3);

  return (
    <div className="hero-card">
      <div className="hero-card-head">
        <span>Live near you</span>
        <span className="live">
          <motion.span className="d" animate={LIVE_DOT_ANIMATE} transition={LIVE_DOT_TRANSITION} />
          Updating
        </span>
      </div>

      {featured.map((p) => (
        <div key={p.name} className="hero-card-row">
          <div className="tile" style={{ backgroundImage: `url(${productImage(p.img, 160)})` }} />
          <div>
            <div className="hcr-name">{p.name}</div>
            <div className="hcr-meta">
              {p.seller} · {p.area} · {p.left}
            </div>
          </div>
          <div className="hcr-price">AED {formatAED(p.now)}</div>
        </div>
      ))}

      <a href="#market" className="btn btn-primary">
        Open marketplace →
      </a>
    </div>
  );
}
