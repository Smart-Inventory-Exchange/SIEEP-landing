import { PRODUCTS } from '../data';
import { ProductCard } from './ProductCard';

export function Market() {
  return (
    <section className="section" id="market">
      <div className="shell">
        <div className="market-head">
          <div>
            <span className="eyebrow">Trade exchange · live</span>
            <h2 className="display h-xl">
              Wholesale lots, hours before they're written off.
            </h2>
          </div>
          <span className="right">8 active lots · UAE distributors</span>
        </div>
        <div className="market-grid">
          {PRODUCTS.map((p, i) => (
            <ProductCard key={p.name} product={p} delay={(i % 4) * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}
