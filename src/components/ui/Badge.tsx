import type { HTMLAttributes } from 'react';
import './Badge.css';

type BadgeTone = 'brand' | 'amber' | 'red' | 'blue' | 'neutral' | 'discount' | 'dark';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
}

export function Badge({ tone = 'neutral', className = '', ...rest }: BadgeProps) {
  const classes = ['badge', `badge--${tone}`, className].filter(Boolean).join(' ');
  return <span className={classes} {...rest} />;
}
