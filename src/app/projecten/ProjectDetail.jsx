import { useParams } from 'react-router-dom';
import { useTheme } from '../../theme/ThemeContext';

// Voorbeeld projectdata (in echte app uit API)
const projecten = [
  {
    id: '1',
    naam: 'Nieuwbouw Gemeentehuis',
    status: 'In uitvoering',
    start: '2026-01-15',
    eind: '2027-06-30',
    locatie: 'Centrum, Stad',
    beschrijving: 'Bouw van een duurzaam en energiezuinig gemeentehuis.',
    manager: 'J. de Vries',
    budget: '€ 4.200.000',
  },
  {
    id: '2',
    naam: 'Renovatie Brug',
    status: 'Voorbereiding',
    start: '2026-05-01',
    eind: '2026-12-15',
    locatie: 'Kanaalzone',
    beschrijving: 'Renovatie van de historische brug over het kanaal.',
    manager: 'A. Janssen',
    budget: '€ 950.000',
  },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const { theme } = useTheme();
  const project = projecten.find(p => p.id === id);
  if (!project) return <div>Project niet gevonden.</div>;
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
      <h2 style={{color: theme.navText, marginBottom: 12}}>{project.naam}</h2>
      <ul style={{listStyle: 'none', padding: 0, marginBottom: 18}}>
        <li><strong>Status:</strong> <span style={{color: theme.navTextActive}}>{project.status}</span></li>
        <li><strong>Startdatum:</strong> {project.start}</li>
        <li><strong>Einddatum:</strong> {project.eind}</li>
        <li><strong>Locatie:</strong> {project.locatie}</li>
        <li><strong>Projectmanager:</strong> {project.manager}</li>
        <li><strong>Budget:</strong> {project.budget}</li>
      </ul>
      <div style={{marginBottom: 12}}><strong>Beschrijving:</strong><br />{project.beschrijving}</div>
    </div>
  );
}
