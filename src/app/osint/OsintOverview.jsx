import { Link } from 'react-router-dom';

const osintTopics = [
  { id: 1, titel: 'Wat is OSINT?' },
  { id: 2, titel: 'Tools' },
  { id: 3, titel: 'Praktijkvoorbeeld' },
];

export default function OsintOverview() {
  return (
    <div>
      <h2>OSINT - Open Source Intelligence</h2>
      <p>Deze pagina geeft een overzicht van open source intelligence (OSINT): het verzamelen en analyseren van publiek beschikbare informatie.</p>
      <ul>
        {osintTopics.map(topic => (
          <li key={topic.id}>
            <Link to={`/osint/${topic.id}`}>{topic.titel}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
