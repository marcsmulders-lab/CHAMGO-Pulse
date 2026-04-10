import { useTheme } from '../../theme/ThemeContext';
import { useToast } from '../../components/ToastProvider';
import { openNormData } from './openNormData';
import { exportToCSV, exportToPDF } from '../../utils/export';

export default function OpenNormScore() {
  const { theme } = useTheme();
  const { addToast } = useToast();
  const avg = (openNormData.reduce((sum, n) => sum + n.score, 0) / openNormData.length).toFixed(2);

  return (
    <div style={{
      maxWidth: 700,
      margin: '2rem auto',
      padding: '2rem',
      background: theme.card,
      borderRadius: 16,
      boxShadow: '0 4px 24px rgba(25, 118, 210, 0.07)',
      border: `1.5px solid ${theme.border}`,
      color: theme.color
    }}>
      <h2 style={{textAlign: 'center', marginBottom: '2rem', color: theme.navText, letterSpacing: 1}}>Open Norm Score</h2>
      <div style={{display: 'flex', justifyContent: 'flex-end', gap: 12, marginBottom: 18}}>
        <button
          onClick={() => {
            exportToCSV(openNormData, 'open-norm-score.csv');
            addToast('Open Norm geëxporteerd naar CSV!', 'success');
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
            exportToPDF(openNormData, 'open-norm-score.pdf');
            addToast('Open Norm geëxporteerd naar PDF!', 'success');
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
            <th style={{textAlign: 'left', padding: '0.7rem', borderBottom: `2px solid ${theme.border}`}}>Norm</th>
            <th style={{textAlign: 'center', padding: '0.7rem', borderBottom: `2px solid ${theme.border}`}}>Score</th>
            <th style={{textAlign: 'left', padding: '0.7rem', borderBottom: `2px solid ${theme.border}`}}>Toelichting</th>
          </tr>
        </thead>
        <tbody>
          {openNormData.map((n, i) => (
            <tr key={i} style={{background: i % 2 ? theme.background : theme.card}}>
              <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>{n.norm}</td>
              <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`, textAlign: 'center', fontWeight: 600}}>{n.score}</td>
              <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>{n.toelichting}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td style={{padding: '0.7rem', fontWeight: 700}}>Gemiddelde</td>
            <td style={{padding: '0.7rem', textAlign: 'center', fontWeight: 700}}>{avg}</td>
            <td />
          </tr>
        </tfoot>
      </table>
      <div style={{textAlign: 'center', color: theme.navText, fontSize: 15}}>
        De Open Norm Score geeft een indicatie van de mate van openheid en participatie.<br />
        <span style={{fontSize: 13, color: theme.color}}>Scores zijn fictief en ter illustratie.</span>
      </div>
    </div>
  );
}
