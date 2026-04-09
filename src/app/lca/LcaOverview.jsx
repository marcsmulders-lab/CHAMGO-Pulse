import { Link } from 'react-router-dom';

const lcaTopics = [
  { id: 1, titel: 'Wat is LCA?' },
  { id: 2, titel: 'CO₂-cyclus' },
  { id: 3, titel: 'Stikstof-cyclus' },
  { id: 4, titel: 'Tools en methodieken' },
  { id: 5, titel: 'Praktijkvoorbeeld bouwproject' },
  { id: 6, titel: 'Praktijkvoorbeeld infra' },
  { id: 7, titel: 'EcoInvent' },
  { id: 8, titel: 'OpenLCA' },
  { id: 9, titel: 'Nationale Milieudatabase' },
  { id: 10, titel: 'Milieu-impactberekening' },
];

export default function LcaOverview() {
  return (
    <div>
      <h2>LCA - Levenscyclusanalyse (CO₂ & Stikstof)</h2>
      <p>Deze pagina geeft inzicht in de cyclus van CO₂ en stikstof binnen projecten en processen.</p>
      <ul>
        {lcaTopics.map(topic => (
          <li key={topic.id}>
            <Link to={`/lca/${topic.id}`}>{topic.titel}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
