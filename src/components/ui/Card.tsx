import type { HTMLAttributes } from 'react';
import './Card.css';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'dark' | 'featured';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export function Card({ variant = 'default', padding = 'md', className = '', ...rest }: CardProps) {
  const classes = ['card', `card--${variant}`, `card--pad-${padding}`, className].filter(Boolean).join(' ');
  return <div className={classes} {...rest} />;
}
