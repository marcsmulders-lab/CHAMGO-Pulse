import React from 'react';
import { useTheme } from '../theme/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, switchTheme } = useTheme();
  return (
    <div style={{ textAlign: 'right', margin: '1rem 2rem 0 0' }}>
      <button
        onClick={() => switchTheme(theme.name === 'light' ? 'dark' : 'light')}
        style={{
          background: theme.navActive,
          color: theme.navTextActive,
          border: `1.5px solid ${theme.border}`,
          borderRadius: 8,
          padding: '0.5rem 1.2rem',
          fontWeight: 600,
          fontSize: 16,
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(25, 118, 210, 0.10)',
          transition: 'background 0.2s, color 0.2s',
        }}
        aria-label="Wissel thema"
      >
        {theme.name === 'light' ? '🌙 Donker' : '☀️ Licht'}
      </button>
    </div>
  );
}
