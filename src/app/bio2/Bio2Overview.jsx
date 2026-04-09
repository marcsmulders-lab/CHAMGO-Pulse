import { Link } from 'react-router-dom';

const bio2Normen = [
  { id: 1, titel: 'Beveiligingsbeleid' },
  { id: 2, titel: 'Risicomanagement' },
  { id: 3, titel: 'Toegangsbeveiliging' },
];

export default function Bio2Overview() {
  return (
    <div>
      <h2>BIO2 - Baseline Informatiebeveiliging Overheid 2</h2>
      <p>Deze pagina geeft een overzicht van de BIO2-normen en implementatie binnen de organisatie.</p>
      <ul>
        {bio2Normen.map(norm => (
          <li key={norm.id}>
            <Link to={`/bio2/${norm.id}`}>{norm.titel}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
