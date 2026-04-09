import { Link } from 'react-router-dom';

const dummySlms = [
  { id: 1, naam: 'SLM Contract 2026', status: 'Actief' },
  { id: 2, naam: 'SLM Contract 2025', status: 'Afgerond' },
  { id: 3, naam: 'SLM Pilot', status: 'In voorbereiding' },
];

export default function SlmOverview() {
  return (
    <div>
      <h2>SLM Overzicht</h2>
      <ul>
        {dummySlms.map(slm => (
          <li key={slm.id}>
            <Link to={`/slm/${slm.id}`}>{slm.naam}</Link> - <em>{slm.status}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}
