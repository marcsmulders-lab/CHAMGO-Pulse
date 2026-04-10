import { useTheme } from '../../theme/ThemeContext';

const icons = {
  'Projecten': '📁',
  'Bezwaren': '⚖️',
  'Vergunningen': '📄',
  'Participaties': '🤝',
};

export default function DashboardCard({ title, value, color }) {
  const { theme } = useTheme();
  return (
    <div
      style={{
        background: color || theme.card,
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
        padding: '2rem',
        minWidth: '180px',
        textAlign: 'center',
        margin: '1rem',
        flex: 1,
        transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
        color: theme.color,
        border: `1.5px solid ${theme.border}`,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.04)';
        e.currentTarget.style.boxShadow = '0 6px 24px rgba(25,118,210,0.13)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.07)';
      }}
    >
      <div style={{fontSize: '2.5rem', marginBottom: 8}}>{icons[title] || '📊'}</div>
      <div style={{fontSize: '2.5rem', fontWeight: 700, color: theme.color}}>{value}</div>
      <div style={{fontSize: '1.1rem', color: theme.navText, marginTop: '0.5rem'}}>{title}</div>
      <div style={{fontSize: '0.95rem', color: theme.navTextActive, marginTop: 8}}>
        {/* Extra details, eventueel dynamisch */}
        Laatste update: vandaag<br />
        Status: actief
      </div>
    </div>
  );
}
