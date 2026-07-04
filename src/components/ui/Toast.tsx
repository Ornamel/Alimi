import { useToast } from '../../context/ToastContext';
import './Toast.css';

export function Toast() {
  const { message } = useToast();
  if (!message) return null;
  return (
    <div className="toast scr">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="var(--color-brand)" />
        <path d="M8 12l2.5 2.5L16 9" stroke="var(--color-night-ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>{message}</span>
    </div>
  );
}
