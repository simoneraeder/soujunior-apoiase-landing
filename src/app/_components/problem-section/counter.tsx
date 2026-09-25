"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

type CounterProps = {
  value: number;
  prefix?: string;
  duration?: number; // ms
};

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  // No servidor assumimos "sem preferência" — é só um palpite.
  // O React usa este valor também na hydration, evitando mismatch.
  return false;
}

export function Counter({ value, prefix, duration = 1500 }: CounterProps) {
  const prefersReducedMotion = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  // Estado do valor "animado". Sempre começa em 0 no servidor E no cliente
  // (durante a hydration), então não há divergência.
  const [animated, setAnimated] = useState(0);

  const frameRef = useRef<number | null>(null);

  // O valor exibido é *derivado*, não setado via setState no effect.
  // Se o usuário pediu menos movimento, mostramos `value` direto.
  const display = prefersReducedMotion ? value : animated;

  useEffect(() => {
    if (prefersReducedMotion) return;

    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimated(Math.round(eased * value)); // chamado dentro de rAF → async, ok

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [value, duration, prefersReducedMotion]);

  return (
    <span>
      {prefix}
      {display.toLocaleString("pt-BR")}
    </span>
  );
}
