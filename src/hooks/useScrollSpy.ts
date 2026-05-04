import { useEffect, useRef, useState } from 'react';

export function useScrollSpy<T extends string>(ids: readonly T[], offset: number = 120): T {
  const [active, setActive] = useState<T>(ids[0]);
  const activeRef = useRef<T>(ids[0]);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const elements = ids
      .map((id) => ({ id, el: document.getElementById(id) }))
      .filter((x): x is { id: T; el: HTMLElement } => x.el !== null);

    let raf = 0;
    const compute = () => {
      raf = 0;
      const y = window.scrollY + offset;
      let current: T = ids[0];
      for (const { id, el } of elements) {
        if (el.offsetTop <= y) current = id;
      }
      if (current !== activeRef.current) {
        activeRef.current = current;
        setActive(current);
      }
    };

    const onScroll = () => {
      if (raf === 0) raf = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf !== 0) cancelAnimationFrame(raf);
    };
  }, [ids, offset]);

  return active;
}
