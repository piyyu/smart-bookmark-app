'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className={`w-9 h-9 flex items-center justify-center rounded-full bg-landing-forest/5 dark:bg-white/10 ${className}`}>
        <span className="material-icons text-lg opacity-40">contrast</span>
      </div>
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`relative w-9 h-9 flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 hover:bg-landing-forest/5 dark:hover:bg-white/10 active:scale-90 ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className={`absolute transition-all duration-500 ease-spring ${isDark ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`}>
        <span className="material-icons text-lg">light_mode</span>
      </div>
      <div className={`absolute transition-all duration-500 ease-spring ${isDark ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}>
        <span className="material-icons text-lg">dark_mode</span>
      </div>
    </button>
  );
}
