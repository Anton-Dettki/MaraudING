import { ButtonProps } from '@/types';
import { cn } from '@/lib/utils';
import styles from './Button.module.css';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  disabled = false 
}: ButtonProps) {
  return (
    <button
      className={cn(
        styles.button,
        styles[variant],
        styles[size],
        disabled ? styles.disabled : undefined
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
