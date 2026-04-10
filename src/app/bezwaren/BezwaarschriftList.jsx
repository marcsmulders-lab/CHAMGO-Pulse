import { useTheme } from '../../theme/ThemeContext';
import { Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '../../components/ToastProvider';
import { bezwarenData } from './bezwarenData';
import { exportToCSV, exportToPDF } from '../../utils/export';
import { Link } from 'react-router-dom';

export default function BezwaarschriftList() {
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
      {/* Extra kaart bovenaan */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background: '#fff',
          borderRadius: 20,
          boxShadow: '0 2px 16px rgba(15,23,42,0.07)',
          padding: '1.5rem',
          border: '1.5px solid #E2E8F0',
          marginBottom: 32,
          display: 'flex',
          alignItems: 'center',
          gap: 18
        }}
      >
        <Building2 size={28} color="#2563EB" style={{flexShrink: 0}} />
        <div>
          <h2 style={{fontSize: 22, fontWeight: 600, color: '#1E293B', marginBottom: 4}}>Lopende Projecten</h2>
          <p style={{color: '#64748B', fontSize: 16, margin: 0}}>12 actieve projecten in behandeling</p>
        </div>
      </motion.div>

      {/* ...bestaande inhoud... */}
      <div style={{display: 'flex', justifyContent: 'flex-end', gap: 12, marginBottom: 18}}>
        <button
          onClick={() => {
            exportToCSV(bezwarenData, 'bezwaren-overzicht.csv');
            addToast('Bezwaren geëxporteerd naar CSV!', 'success');
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
            exportToPDF(bezwarenData, 'bezwaren-overzicht.pdf');
            addToast('Bezwaren geëxporteerd naar PDF!', 'success');
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
            <th style={{textAlign: 'center', padding: '0.7rem', borderBottom: `2px solid ${theme.border}`}}>ID</th>
            <th style={{textAlign: 'left', padding: '0.7rem', borderBottom: `2px solid ${theme.border}`}}>Status</th>
            <th style={{textAlign: 'left', padding: '0.7rem', borderBottom: `2px solid ${theme.border}`}}>Indiener</th>
            <th style={{textAlign: 'center', padding: '0.7rem', borderBottom: `2px solid ${theme.border}`}}>Datum</th>
            <th style={{textAlign: 'left', padding: '0.7rem', borderBottom: `2px solid ${theme.border}`}}>Omschrijving</th>
            <th style={{textAlign: 'center', padding: '0.7rem', borderBottom: `2px solid ${theme.border}`}}>Detail</th>
          </tr>
        </thead>
        <tbody>
          {bezwarenData.map((b, i) => (
            <tr key={b.id} style={{background: i % 2 ? theme.background : theme.card}}>
              <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`, textAlign: 'center'}}>{b.id}</td>
              <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>{b.status}</td>
              <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>{b.indiener}</td>
              <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`, textAlign: 'center'}}>{b.datum}</td>
              <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`}}>{b.omschrijving}</td>
              <td style={{padding: '0.7rem', borderBottom: `1px solid ${theme.border}`, textAlign: 'center'}}>
                <Link to={`/bezwaren/${b.id}`} style={{
                  background: theme.navActive,
                  color: theme.navTextActive,
                  padding: '0.3rem 1rem',
                  borderRadius: 8,
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: 14,
                  boxShadow: '0 2px 8px rgba(25, 118, 210, 0.10)',
                  border: `1.5px solid ${theme.border}`
                }}>Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{textAlign: 'center', color: theme.navText, fontSize: 15}}>
        Overzicht van alle bezwaarschriften.<br />
        <span style={{fontSize: 13, color: theme.color}}>Data is fictief en ter illustratie.</span>
      </div>
    </div>
  );
}
