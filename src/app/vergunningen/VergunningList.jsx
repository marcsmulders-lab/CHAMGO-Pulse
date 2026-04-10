import { useTheme } from '../../theme/ThemeContext';
import { useToast } from '../../components/ToastProvider';
import { vergunningenData } from './vergunningenData';
import { exportToCSV, exportToPDF } from '../../utils/export';
import { Link } from 'react-router-dom';

export default function VergunningList() {
  const { theme } = useTheme();
  const { addToast } = useToast();

  return (
    <div style={{
      maxWidth: 900,
      margin: '2rem auto',
      padding: '2rem',
      background: theme.card,
      borderRadius: 16,
      boxShadow: '0 4px 24px rgba(25, 118, 210, 0.07)',
      border: `1.5px solid ${theme.border}`,
      color: theme.color
    }}>
      <h2 style={{textAlign: 'center', marginBottom: '2rem', color: theme.navText, letterSpacing: 1}}>Vergunningen Overzicht</h2>
      <div style={{display: 'flex', justifyContent: 'flex-end', gap: 12, marginBottom: 18}}>
        <button
          onClick={() => {
            exportToCSV(vergunningenData, 'vergunningen-overzicht.csv');
            addToast('Vergunningen geëxporteerd naar CSV!', 'success');
          }}
          style={{
            background: theme.accent,
            color: '#fff',
            border: `1.5px solid ${theme.border}`,
            borderRadius: 8,
            padding: '0.5rem 1.2rem',
            fontWeight: 600,
            fontSize: 15,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(37,99,235,0.10)',
            transition: 'background 0.2s, color 0.2s',
          }}
        >
          📄 Export CSV
        </button>
        <button
          onClick={() => {
            exportToPDF(vergunningenData, 'vergunningen-overzicht.pdf');
            addToast('Vergunningen geëxporteerd naar PDF!', 'success');
          }}
          style={{
            background: theme.accent,
            color: '#fff',
            border: `1.5px solid ${theme.border}`,
            borderRadius: 8,
            padding: '0.5rem 1.2rem',
            fontWeight: 600,
            fontSize: 15,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(37,99,235,0.10)',
            transition: 'background 0.2s, color 0.2s',
          }}
        >
          🖨️ Export PDF
        </button>
      </div>
      <table style={{width: '100%', borderCollapse: 'collapse', marginBottom: 24}}>
        <thead>
          <tr style={{background: theme.background}}>
            <th style={{textAlign: 'left', padding: '0.7rem', borderBottom: `2px solid ${theme.border}`}}>Nummer</th>
            <th style={{textAlign: 'left', padding: '0.7rem', borderBottom: `2px solid ${theme.border}`}}>Type</th>
            <th style={{textAlign: 'left', padding: '0.7rem', borderBottom: `2px solid ${theme.border}`}}>Status</th>
            <th style={{textAlign: 'left', padding: '0.7rem', borderBottom: `2px solid ${theme.border}`}}>Aanvrager</th>
            <th style={{textAlign: 'left', padding: '0.7rem', borderBottom: `2px solid ${theme.border}`}}>Locatie</th>
            <th style={{textAlign: 'center', padding: '0.7rem', borderBottom: `2px solid ${theme.border}`}}>Datum</th>
            <th style={{textAlign: 'center', padding: '0.7rem', borderBottom: `2px solid ${theme.border}`}}>Detail</th>
          </tr>
        </thead>
        <tbody>
          {vergunningenData.map((v, i) => (
            <tr key={v.nummer} style={{background: i % 2 ? theme.background : theme.card}}>
              <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>{v.nummer}</td>
              <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>{v.type}</td>
              <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>{v.status}</td>
              <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>{v.aanvrager}</td>
              <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>{v.locatie}</td>
              <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`, textAlign: 'center'}}>{v.datum}</td>
              <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`, textAlign: 'center'}}>
                <Link to={`/vergunningen/${v.nummer}`} style={{
                  background: theme.accent,
                  color: '#fff',
                  padding: '0.3rem 1rem',
                  borderRadius: 8,
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: 14,
                  boxShadow: '0 2px 8px rgba(37,99,235,0.10)',
                  border: `1.5px solid ${theme.border}`
                }}>Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{textAlign: 'center', color: theme.navText, fontSize: 15}}>
        Overzicht van alle vergunningen.<br />
        <span style={{fontSize: 13, color: theme.color}}>Data is fictief en ter illustratie.</span>
      </div>
    </div>
  );
}
