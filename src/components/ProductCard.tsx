import { motion, useReducedMotion } from 'framer-motion';
import { type Product, formatAED, productImage } from '../data';
import { revealMotionProps } from './Reveal';
import { VerifiedBadge } from './VerifiedBadge';

interface ProductCardProps {
  readonly product: Product;
  readonly delay?: number;
}

const HOVER = { y: -2, boxShadow: '0 14px 30px -16px rgba(20, 57, 43, 0.2)' };
const VIEWER_PULSE = {
  boxShadow: [
    '0 0 0 0 rgba(217,109,58,0.5)',
    '0 0 0 6px rgba(217,109,58,0)',
    '0 0 0 0 rgba(217,109,58,0)',
  ],
};
const VIEWER_PULSE_TRANSITION = { duration: 2, repeat: Infinity, ease: 'easeOut' as const };

export function ProductCard({ product: p, delay = 0 }: ProductCardProps) {
  const reduced = useReducedMotion();
  const reveal = reduced ? {} : revealMotionProps(delay);

  return (
    <motion.div
      className="product-card"
      {...reveal}
      whileHover={reduced ? undefined : HOVER}
    >
      <div className="top">
        <div className="tile-lg" style={{ backgroundImage: `url(${productImage(p.img, 320)})` }} />
        <span className="cat-pill">{p.cat}</span>
        <span className="left-pill">{p.left}</span>
      </div>

      <div>
        <div className="pn-row">
          <div className="pn">{p.name}</div>
          <VerifiedBadge />
        </div>
        <div className="pm">
          <span>{p.seller}</span>
          {p.halal && (
            <span className="halal-pill" title="Halal-certified supplier">
              <span className="ring" aria-hidden="true" />
              Halal
            </span>
          )}
        </div>
        <div className="meta-row">
          <span>{p.stock}</span>
          <span className="sep">·</span>
          <span>{p.moq}</span>
          <span className="sep">·</span>
          <span>Ships from {p.area}</span>
        </div>
      </div>

      <div className="price-row">
        <div>
          <div className="now">
            AED {formatAED(p.now)}
            <span className="unit">{p.unit}</span>
          </div>
          <div className="was">was AED {formatAED(p.was)}{p.unit}</div>
        </div>
        <span className="off-pill">−{p.off}%</span>
      </div>

      <div className="viewers">
        <motion.span
          className="dot"
          animate={reduced ? undefined : VIEWER_PULSE}
          transition={VIEWER_PULSE_TRANSITION}
        />
        {p.viewers} buyers viewing
      </div>
    </motion.div>
  );
}
