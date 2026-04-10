import React, { createContext, useContext, useState } from 'react';

const themes = {
  light: {
    name: 'light',
    background: '#F8FAFC', // lichtgrijs
    color: '#1E293B', // donkergrijs tekst
    card: '#fff',
    nav: '#fff',
    navActive: '#2563EB', // accent lichtblauw
    navText: '#0F172A', // primair donkerblauw
    navTextActive: '#fff',
    border: '#E5E7EB',
    primary: '#0F172A',
    accent: '#2563EB',
    success: '#16A34A',
    warning: '#EA580C',
  },
  dark: {
    name: 'dark',
    background: '#0F172A', // primair donkerblauw
    color: '#F8FAFC', // lichtgrijs tekst
    card: '#1E293B', // donkergrijs
    nav: '#1E293B',
    navActive: '#2563EB', // accent lichtblauw
    navText: '#F8FAFC',
    navTextActive: '#fff',
    border: '#2563EB',
    primary: '#0F172A',
    accent: '#2563EB',
    success: '#16A34A',
    warning: '#EA580C',
  }
};

const ThemeContext = createContext({
  theme: themes.light,
  setTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.light);
  const switchTheme = name => setTheme(themes[name] || themes.light);
  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
