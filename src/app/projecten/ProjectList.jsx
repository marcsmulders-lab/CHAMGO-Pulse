import { Link } from 'react-router-dom';
import { useTheme } from '../../theme/ThemeContext';

// Voorbeeld projectdata (in echte app uit API)
const projecten = [
  {
    id: '1',
    naam: 'Nieuwbouw Gemeentehuis',
    status: 'In uitvoering',
    locatie: 'Centrum, Stad',
  },
  {
    id: '2',
    naam: 'Renovatie Brug',
    status: 'Voorbereiding',
    locatie: 'Kanaalzone',
  },
];

export default function ProjectList() {
  const { theme } = useTheme();
  return (
    <div
      style={{
        background: theme.card,
        color: theme.color,
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(25, 118, 210, 0.07)',
        border: `1.5px solid ${theme.border}`,
        maxWidth: 700,
        margin: '2rem auto',
        padding: '2rem',
      }}
    >
      <h2 style={{color: theme.navText, marginBottom: 18}}>Projecten Overzicht</h2>
      <ul style={{listStyle: 'none', padding: 0}}>
        {projecten.map(project => (
          <li key={project.id} style={{
            marginBottom: 18,
            padding: '1rem',
            borderRadius: 10,
            background: theme.background,
            boxShadow: '0 1px 6px rgba(25,118,210,0.07)'
          }}>
            <Link to={`/projecten/${project.id}`} style={{color: theme.navText, fontWeight: 600, fontSize: 18}}>{project.naam}</Link>
            <div style={{fontSize: 15, color: theme.color}}>
              Status: <span style={{color: theme.navTextActive}}>{project.status}</span> | Locatie: {project.locatie}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
