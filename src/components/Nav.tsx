import { useState, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, type NavId } from '../data';
import { useScrollSpy } from '../hooks/useScrollSpy';

const SCROLL_PAD = 80;
const NAV_IDS: readonly NavId[] = NAV_ITEMS.map((i) => i.id);
const BRAND_INTRO = { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] } as const;
const MOBILE_INTRO = { duration: 0.2, ease: [0.2, 0.7, 0.2, 1] } as const;

interface NavLinkProps {
  readonly item: { readonly id: string; readonly label: string };
  readonly active: boolean;
  readonly onAnchor: (e: MouseEvent<HTMLAnchorElement>, id: string) => void;
  readonly underline?: boolean;
}

function NavLink({ item, active, onAnchor, underline = false }: NavLinkProps) {
  return (
    <a
      href={`#${item.id}`}
      onClick={(e) => onAnchor(e, item.id)}
      className={active ? 'active' : ''}
    >
      {item.label}
      {underline && <span className="nav-underline" />}
    </a>
  );
}

export function Nav() {
  const active = useScrollSpy(NAV_IDS);
  const [open, setOpen] = useState(false);

  const handleAnchor = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - SCROLL_PAD, behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav className="nav">
      <div className="shell nav-inner">
        <div className="brand">
          <motion.span
            className="brand-mark"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={BRAND_INTRO}
          >
            E
          </motion.span>
          <span>Expirium.</span>
        </div>

        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.id}
              item={item}
              active={active === item.id}
              onAnchor={handleAnchor}
              underline
            />
          ))}
        </div>

        <div className="nav-actions">
          <a
            href="#join"
            onClick={(e) => handleAnchor(e, 'join')}
            className="btn btn-primary"
          >
            Join the pilot
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="nav-mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={MOBILE_INTRO}
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.id}
                item={item}
                active={active === item.id}
                onAnchor={handleAnchor}
              />
            ))}
            <a
              href="#join"
              onClick={(e) => handleAnchor(e, 'join')}
              className="btn btn-primary"
            >
              Join the pilot
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
