import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';
import './Field.css';

export function Label({ children }: { children: ReactNode }) {
  return <label className="field">{children}</label>;
}

export function FieldHelp({ children }: { children: ReactNode }) {
  return <p className="field-help">{children}</p>;
}

export function Input({ className = '', ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={`input ${className}`} {...rest} />;
}

export function Textarea({ className = '', ...rest }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={`textarea ${className}`} {...rest} />;
}

export function Select({ className = '', children, ...rest }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={`select ${className}`} {...rest}>
      {children}
    </select>
  );
}

export function FormField({
  label,
  help,
  children,
}: {
  label?: string;
  help?: string;
  children: ReactNode;
}) {
  return (
    <div>
      {label && <Label>{label}</Label>}
      {help && <FieldHelp>{help}</FieldHelp>}
      {children}
    </div>
  );
}
