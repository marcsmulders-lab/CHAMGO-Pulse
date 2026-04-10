import { useTheme } from '../../theme/ThemeContext';
import { useToast } from '../../components/ToastProvider';
import { exportToCSV, exportToPDF } from '../../utils/export';

export default function VergunningDetail() {
  const { theme } = useTheme();
  const { addToast } = useToast();
  // Voorbeelddata, normaal via API of props
  const vergunning = {
    nummer: 'V-2026-0012',
    type: 'Omgevingsvergunning',
    status: 'In behandeling',
    aanvrager: 'Bouwbedrijf De Toekomst',
    locatie: 'Stationsstraat 12, Utrecht',
    datum: '2026-04-10',
    geldigheid: 't/m 2027-04-10',
    toelichting: 'Vergunning voor nieuwbouw appartementencomplex.'
  };

  function handleExport(type) {
    const data = [vergunning];
    if (type === 'csv') {
      exportToCSV(data, `vergunning-${vergunning.nummer}.csv`);
      addToast('Vergunning geëxporteerd naar CSV!', 'success');
    } else {
      exportToPDF(data, `vergunning-${vergunning.nummer}.pdf`);
      addToast('Vergunning geëxporteerd naar PDF!', 'success');
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
      <h2 style={{textAlign: 'center', marginBottom: '2rem', color: theme.navText, letterSpacing: 1}}>Vergunning Detail</h2>
      <div style={{display: 'flex', justifyContent: 'flex-end', gap: 12, marginBottom: 18}}>
        <button
          onClick={() => handleExport('csv')}
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
          onClick={() => handleExport('pdf')}
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
        <tbody>
          <tr>
            <td style={{fontWeight: 500, padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>Nummer</td>
            <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>{vergunning.nummer}</td>
          </tr>
          <tr>
            <td style={{fontWeight: 500, padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>Type</td>
            <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>{vergunning.type}</td>
          </tr>
          <tr>
            <td style={{fontWeight: 500, padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>Status</td>
            <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>{vergunning.status}</td>
          </tr>
          <tr>
            <td style={{fontWeight: 500, padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>Aanvrager</td>
            <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>{vergunning.aanvrager}</td>
          </tr>
          <tr>
            <td style={{fontWeight: 500, padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>Locatie</td>
            <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>{vergunning.locatie}</td>
          </tr>
          <tr>
            <td style={{fontWeight: 500, padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>Datum aanvraag</td>
            <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>{vergunning.datum}</td>
          </tr>
          <tr>
            <td style={{fontWeight: 500, padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>Geldigheid</td>
            <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>{vergunning.geldigheid}</td>
          </tr>
          <tr>
            <td style={{fontWeight: 500, padding: '0.7rem'}}>Toelichting</td>
            <td style={{padding: '0.7rem'}}>{vergunning.toelichting}</td>
          </tr>
        </tbody>
      </table>
      <div style={{textAlign: 'center', color: theme.navText, fontSize: 15}}>
        Detailinformatie over de geselecteerde vergunning.<br />
        <span style={{fontSize: 13, color: theme.color}}>Data is fictief en ter illustratie.</span>
      </div>
    </div>
  );
}
