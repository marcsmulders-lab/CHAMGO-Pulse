import { useTheme } from '../../theme/ThemeContext';
import { useState } from 'react';

export default function ChamgoPulseDashboard() {
  const { theme } = useTheme();
  const [active, setActive] = useState(0);
  const sections = [
    {
      title: 'Gemeentelijk Dashboard',
      color: theme.accent,
      items: [
        'Lopende projecten',
        'Vergunningenstatus',
        'Zorgvraag per wijk',
        'Switch Home doorstroming',
      ],
    },
    {
      title: 'Investeerdersportaal',
      color: theme.primary,
      items: [
        'Projectrendement',
        'Risicoanalyse',
        'Due diligence',
        'Documentdownloads',
      ],
    },
    {
      title: 'Realtime Bouwmonitor',
      color: theme.warning,
      items: [
        'Bouwplanning',
        'Materiaalstatus',
        'Budget vs realisatie',
        'Foto-updates',
      ],
    },
    {
      title: 'Vergunningenoverzicht',
      color: '#7c3aed', // paars
      items: [
        'Omgevingsvergunningen',
        'Bezwaarprocedures',
        'Deadlines',
        'Juridische status',
      ],
    },
    {
      title: 'AI-Control Center',
      color: theme.success,
      items: [
        'AI meldingen',
        'Risicoherkenning',
        'Voorspellingen',
        'Automatische rapportages',
      ],
    },
  ];

  const statCards = [
    {
      title: 'Lopende Projecten',
      value: 12,
      color: theme.accent,
      text: 'Actieve projecten in behandeling',
    },
    {
      title: 'Vergunningen Open',
      value: 28,
      color: '#7c3aed',
      text: 'Dossiers in procedure',
    },
    {
      title: 'AI Meldingen',
      value: 7,
      color: theme.success,
      text: 'Nieuwe waarschuwingen beschikbaar',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', background: theme.background, display: 'flex' }}>
      {/* Sidebar */}
      <aside style={{
        width: 280,
        background: theme.primary,
        color: '#fff',
        padding: '2.5rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
      }}>
        <div>
          <h1 style={{ fontSize: 32, fontWeight: 900, letterSpacing: 1, margin: 0 }}>CHAMGO-Pulse</h1>
          <p style={{ color: '#cbd5e1', marginTop: 8, fontSize: 15 }}>
            Dashboard & Control Center
          </p>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 16 }}>
          {sections.map((s, i) => (
            <button
              key={s.title}
              onClick={() => setActive(i)}
              style={{
                textAlign: 'left',
                padding: '0.9rem 1.2rem',
                borderRadius: 16,
                background: active === i ? theme.card : theme.primary,
                color: active === i ? theme.primary : '#fff',
                fontWeight: 600,
                border: 'none',
                outline: 'none',
                cursor: 'pointer',
                transition: 'background 0.2s, color 0.2s',
                boxShadow: active === i ? '0 2px 12px rgba(16,24,39,0.10)' : 'none',
              }}
            >
              {s.title}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, padding: '3rem 3vw' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 40 }}>
          <div>
            <h2 style={{ fontSize: 38, fontWeight: 800, color: theme.color, margin: 0 }}>Overzicht Modules</h2>
            <p style={{ color: '#64748B', marginTop: 10, fontSize: 18 }}>
              Centrale omgeving voor beleid, bouw, vergunningen en AI-analyse.
            </p>
          </div>
          <button style={{
            background: theme.accent,
            color: '#fff',
            padding: '0.9rem 2.2rem',
            borderRadius: 20,
            fontWeight: 600,
            fontSize: 17,
            boxShadow: '0 2px 12px rgba(37,99,235,0.13)',
            border: 'none',
            cursor: 'pointer',
            transition: 'background 0.2s',
          }}>
            Nieuw Project
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 28,
        }}>
          {sections.map((section, idx) => (
            <div
              key={section.title}
              style={{
                background: theme.card,
                borderRadius: 28,
                boxShadow: '0 2px 16px rgba(15,23,42,0.07)',
                border: `1.5px solid ${theme.border}`,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                minHeight: 260,
              }}
            >
              <div style={{
                background: section.color,
                padding: '1.3rem 1.5rem',
                color: '#fff',
              }}>
                <h3 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>{section.title}</h3>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {section.items.map(item => (
                    <li
                      key={item}
                      style={{
                        background: '#F1F5F9',
                        border: '1.5px solid #E2E8F0',
                        borderRadius: 14,
                        padding: '0.8rem 1.2rem',
                        color: '#334155',
                        fontSize: 16,
                        margin: 0,
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <button style={{
                  marginTop: 24,
                  width: '100%',
                  background: theme.primary,
                  color: '#fff',
                  padding: '0.9rem 0',
                  borderRadius: 18,
                  fontWeight: 600,
                  fontSize: 16,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}>
                  Open Module
                </button>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 28,
          marginTop: 48,
        }}>
          {statCards.map(card => (
            <div key={card.title} style={{
              background: theme.card,
              borderRadius: 28,
              boxShadow: '0 2px 16px rgba(15,23,42,0.07)',
              border: `1.5px solid ${theme.border}`,
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: theme.color, marginBottom: 18 }}>{card.title}</h3>
              <div style={{ fontSize: 48, fontWeight: 900, color: card.color }}>{card.value}</div>
              <p style={{ color: '#64748B', marginTop: 10, fontSize: 17 }}>{card.text}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
