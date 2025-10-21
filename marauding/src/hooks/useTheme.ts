import { useLocalStorage } from './useLocalStorage';
import { Theme } from '@/types';

// Custom hook for theme management
export function useTheme() {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return { theme, setTheme, toggleTheme };
}
