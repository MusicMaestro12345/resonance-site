// Hand-drawn border component. Every instance gets its own seed, so each
// card, button, and chip in the UI has a unique, stable wobble — like a
// page where every box was drawn separately by hand.

import {
  createElement, useLayoutEffect, useMemo, useRef, useState,
  type ElementType, type ReactNode,
} from 'react';
import rough from 'roughjs/bin/rough';

const generator = rough.generator();
let seedCounter = 12345;

export interface RoughBoxProps {
  as?: ElementType;
  color?: string;
  strokeWidth?: number;
  roughness?: number;
  bowing?: number;
  /** Optional sketchy fill (hachure scribble) behind the content. */
  fillColor?: string;
  fillStyle?: 'hachure' | 'solid' | 'zigzag' | 'cross-hatch' | 'scribble';
  /** Draw the outline twice, offset, for a heavier hand-inked look. */
  doublePass?: boolean;
  dashed?: boolean;
  inset?: number;
  className?: string;
  children?: ReactNode;
  [key: string]: unknown;
}

export function RoughBox({
  as = 'div',
  color = 'rgba(233,231,225,0.85)',
  strokeWidth = 1.5,
  roughness = 1.6,
  bowing = 1.6,
  fillColor,
  fillStyle = 'hachure',
  doublePass = false,
  dashed = false,
  inset = 3,
  className = '',
  children,
  ...rest
}: RoughBoxProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [dim, setDim] = useState({ w: 0, h: 0 });
  const seed = useMemo(() => {
    seedCounter = (seedCounter * 48271) % 2147483647;
    return seedCounter;
  }, []);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      setDim((d) => (d.w === w && d.h === h ? d : { w, h }));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const paths = useMemo(() => {
    if (dim.w < 8 || dim.h < 8) return [];
    const opts = {
      seed,
      roughness,
      bowing,
      stroke: color,
      strokeWidth,
      fill: fillColor,
      fillStyle,
      fillWeight: 0.9,
      hachureGap: 5,
      strokeLineDash: dashed ? [7, 6] : undefined,
      disableMultiStroke: !doublePass,
    };
    const out = generator.toPaths(
      generator.rectangle(inset, inset, dim.w - inset * 2, dim.h - inset * 2, opts),
    );
    return out;
  }, [dim, seed, color, strokeWidth, roughness, bowing, fillColor, fillStyle, doublePass, dashed, inset]);

  return createElement(
    as,
    { ...rest, ref, className: `rough ${className}` },
    <svg className="rough-border" aria-hidden width={dim.w} height={dim.h}>
      {paths.map((p, i) => (
        <path
          key={i}
          d={p.d}
          stroke={p.stroke}
          strokeWidth={p.strokeWidth}
          strokeDasharray={dashed && p.fill === 'none' ? '7 6' : undefined}
          fill={p.fill && p.fill !== 'none' ? p.fill : 'none'}
          strokeLinecap="round"
        />
      ))}
    </svg>,
    children,
  );
}
