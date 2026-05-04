import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Stats } from './components/Stats';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { Market } from './components/Market';
import { Quote } from './components/Quote';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <Nav />
      <Hero />
      <TrustStrip />
      <Stats />
      <HowItWorks />
      <Features />
      <Market />
      <Quote />
      <CTA />
      <Footer />
    </>
  );
}
