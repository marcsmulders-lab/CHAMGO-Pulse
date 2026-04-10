import { useParams } from 'react-router-dom';
import { useTheme } from '../../theme/ThemeContext';

const bio2Normen = [
  { id: 1, titel: 'Beveiligingsbeleid', uitleg: 'Het beleid voor informatiebeveiliging binnen de organisatie.' },
  { id: 2, titel: 'Risicomanagement', uitleg: 'Proces voor het identificeren en beheersen van risico’s.' },
  { id: 3, titel: 'Toegangsbeveiliging', uitleg: 'Regels en maatregelen voor toegang tot systemen en data.' },
];

export default function Bio2Detail() {
  const { id } = useParams();
  const { theme } = useTheme();
  const norm = bio2Normen.find(n => n.id === Number(id));
  if (!norm) return <div>Norm niet gevonden.</div>;
  return (
    <div
      style={{
        background: theme.card,
        color: theme.color,
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(25, 118, 210, 0.07)',
        border: `1.5px solid ${theme.border}`,
        maxWidth: 600,
        margin: '2rem auto',
        padding: '2rem',
      }}
    >
      <h2 style={{color: theme.navText}}>{norm.titel}</h2>
      <p>{norm.uitleg}</p>
      <p><em style={{color: theme.navTextActive}}>Meer uitleg en implementatievoorbeelden kunnen hier worden toegevoegd.</em></p>
    </div>
  );
}
