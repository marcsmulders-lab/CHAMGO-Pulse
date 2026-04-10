import React, { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'info', duration = 3000) => {
    const id = Date.now() + Math.random();
    setToasts(ts => [...ts, { id, message, type }]);
    setTimeout(() => {
      setToasts(ts => ts.filter(t => t.id !== id));
    }, duration);
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div style={{
        position: 'fixed',
        top: 24,
        right: 24,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
        {toasts.map(t => (
          <div key={t.id} style={{
            minWidth: 220,
            background: t.type === 'error' ? '#ff5252' : t.type === 'success' ? '#43a047' : '#1976d2',
            color: '#fff',
            padding: '0.8rem 1.5rem',
            borderRadius: 10,
            boxShadow: '0 2px 12px rgba(25,118,210,0.13)',
            fontWeight: 600,
            fontSize: 16,
            letterSpacing: 0.2
          }}>
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
