
import { useParams } from 'react-router-dom';
import { useTheme } from '../../theme/ThemeContext';
import { useToast } from '../../components/ToastProvider';
import { exportToCSV, exportToPDF } from '../../utils/export';

export default function BezwaarschriftDetail() {
  const { id } = useParams();
  const { theme } = useTheme();
  const { addToast } = useToast();
  // Voorbeelddata, normaal via API
  const bezwaar = {
    id,
    status: id % 2 === 0 ? 'Behandeld' : 'Open',
    indiener: 'Jan Jansen',
    datum: '2026-04-01',
    omschrijving: 'Het bezwaar betreft de geplande bouw van een appartementencomplex.',
    opvolging: 'In behandeling',
    reactie: 'Uw bezwaar is in behandeling genomen.'
  };

  function handleExport(type) {
    const data = [bezwaar];
    if (type === 'csv') {
      exportToCSV(data, `bezwaar-${id}.csv`);
      addToast('Bezwaarschrift geëxporteerd naar CSV!', 'success');
    } else {
      exportToPDF(data, `bezwaar-${id}.pdf`);
      addToast('Bezwaarschrift geëxporteerd naar PDF!', 'success');
    }
  }

  return (
    <div style={{
      maxWidth: 600,
      margin: '2rem auto',
      padding: '2rem',
      background: theme.card,
      borderRadius: 16,
      boxShadow: '0 4px 24px rgba(25, 118, 210, 0.07)',
      border: `1.5px solid ${theme.border}`,
      color: theme.color
    }}>
      <h2 style={{textAlign: 'center', marginBottom: '2rem', color: theme.navText, letterSpacing: 1}}>Bezwaarschrift Detail</h2>
      <div style={{display: 'flex', justifyContent: 'flex-end', gap: 12, marginBottom: 18}}>
        <button
          onClick={() => handleExport('csv')}
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
          onClick={() => handleExport('pdf')}
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
        <tbody>
          <tr>
            <td style={{fontWeight: 500, padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>ID</td>
            <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>{bezwaar.id}</td>
          </tr>
          <tr>
            <td style={{fontWeight: 500, padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>Status</td>
            <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>{bezwaar.status}</td>
          </tr>
          <tr>
            <td style={{fontWeight: 500, padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>Indiener</td>
            <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>{bezwaar.indiener}</td>
          </tr>
          <tr>
            <td style={{fontWeight: 500, padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>Datum indiening</td>
            <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>{bezwaar.datum}</td>
          </tr>
          <tr>
            <td style={{fontWeight: 500, padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>Omschrijving</td>
            <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>{bezwaar.omschrijving}</td>
          </tr>
          <tr>
            <td style={{fontWeight: 500, padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>Juridische opvolging</td>
            <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>{bezwaar.opvolging}</td>
          </tr>
          <tr>
            <td style={{fontWeight: 500, padding: '0.7rem'}}>Reactie</td>
            <td style={{padding: '0.7rem'}}>{bezwaar.reactie}</td>
          </tr>
        </tbody>
      </table>
      <div style={{textAlign: 'center', color: theme.navText, fontSize: 15}}>
        Detailinformatie over het geselecteerde bezwaarschrift.<br />
        <span style={{fontSize: 13, color: theme.color}}>Data is fictief en ter illustratie.</span>
      </div>
    </div>
  );
}
