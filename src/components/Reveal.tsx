import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealTag = 'div' | 'span';

interface RevealProps {
  readonly children: ReactNode;
  readonly delay?: number;
  readonly as?: RevealTag;
  readonly className?: string;
  readonly y?: number;
  readonly amount?: number;
}

const REVEAL_EASE = [0.2, 0.7, 0.2, 1] as const;
const REVEAL_VIEWPORT = { once: true, amount: 0.12, margin: '0px 0px -60px 0px' as const };

export interface RevealMotionProps {
  readonly initial: { opacity: number; y: number };
  readonly whileInView: { opacity: number; y: number };
  readonly viewport: typeof REVEAL_VIEWPORT;
  readonly transition: { duration: number; ease: typeof REVEAL_EASE; delay: number };
}

export function revealMotionProps(delay: number = 0, y: number = 18): RevealMotionProps {
  return {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: REVEAL_VIEWPORT,
    transition: { duration: 0.7, ease: REVEAL_EASE, delay: delay / 1000 },
  };
}

export function Reveal({ children, delay = 0, as = 'div', className, y = 18, amount }: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return as === 'span'
      ? <span className={className}>{children}</span>
      : <div className={className}>{children}</div>;
  }

  const props = revealMotionProps(delay, y);
  const viewport = amount === undefined ? props.viewport : { ...props.viewport, amount };
  const sharedProps = { className, ...props, viewport };

  return as === 'span'
    ? <motion.span {...sharedProps}>{children}</motion.span>
    : <motion.div {...sharedProps}>{children}</motion.div>;
}
