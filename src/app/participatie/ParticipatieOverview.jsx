import { useTheme } from '../../theme/ThemeContext';
import { useToast } from '../../components/ToastProvider';
import { participatieData } from './participatieData';
import { exportToCSV, exportToPDF } from '../../utils/export';

export default function ParticipatieOverview() {
  const { theme } = useTheme();
  const { addToast } = useToast();

  return (
    <div style={{
      maxWidth: 800,
      margin: '2rem auto',
      padding: '2rem',
      background: theme.card,
      borderRadius: 16,
      boxShadow: '0 4px 24px rgba(25, 118, 210, 0.07)',
      border: `1.5px solid ${theme.border}`,
      color: theme.color
    }}>
      <h2 style={{textAlign: 'center', marginBottom: '2rem', color: theme.navText, letterSpacing: 1}}>Participatie Overzicht</h2>
      <div style={{display: 'flex', justifyContent: 'flex-end', gap: 12, marginBottom: 18}}>
        <button
          onClick={() => {
            exportToCSV(participatieData, 'participatie-overzicht.csv');
            addToast('Participatie geëxporteerd naar CSV!', 'success');
          }}
          style={{
            background: theme.navActive,
            color: theme.navTextActive,
            border: `1.5px solid ${theme.border}`,
            borderRadius: 8,
            padding: '0.5rem 1.2rem',
            fontWeight: 600,
            fontSize: 15,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(25, 118, 210, 0.10)',
            transition: 'background 0.2s, color 0.2s',
          }}
        >
          📄 Export CSV
        </button>
        <button
          onClick={() => {
            exportToPDF(participatieData, 'participatie-overzicht.pdf');
            addToast('Participatie geëxporteerd naar PDF!', 'success');
          }}
          style={{
            background: theme.navActive,
            color: theme.navTextActive,
            border: `1.5px solid ${theme.border}`,
            borderRadius: 8,
            padding: '0.5rem 1.2rem',
            fontWeight: 600,
            fontSize: 15,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(25, 118, 210, 0.10)',
            transition: 'background 0.2s, color 0.2s',
          }}
        >
          🖨️ Export PDF
        </button>
      </div>
      <table style={{width: '100%', borderCollapse: 'collapse', marginBottom: 24}}>
        <thead>
          <tr style={{background: theme.background}}>
            <th style={{textAlign: 'left', padding: '0.7rem', borderBottom: `2px solid ${theme.border}`}}>Naam</th>
            <th style={{textAlign: 'left', padding: '0.7rem', borderBottom: `2px solid ${theme.border}`}}>E-mail</th>
            <th style={{textAlign: 'left', padding: '0.7rem', borderBottom: `2px solid ${theme.border}`}}>Mening</th>
            <th style={{textAlign: 'center', padding: '0.7rem', borderBottom: `2px solid ${theme.border}`}}>Datum</th>
          </tr>
        </thead>
        <tbody>
          {participatieData.map((p, i) => (
            <tr key={i} style={{background: i % 2 ? theme.background : theme.card}}>
              <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>{p.naam}</td>
              <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>{p.email}</td>
              <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>{p.mening}</td>
              <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`, textAlign: 'center'}}>{p.datum}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{textAlign: 'center', color: theme.navText, fontSize: 15}}>
        Overzicht van alle participatie-inzendingen.<br />
        <span style={{fontSize: 13, color: theme.color}}>Data is fictief en ter illustratie.</span>
      </div>
    </div>
  );
}
