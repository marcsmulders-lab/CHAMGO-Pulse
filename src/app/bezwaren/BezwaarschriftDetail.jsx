import { useParams } from 'react-router-dom';

export default function BezwaarschriftDetail() {
  const { id } = useParams();
  // Placeholder for fetching bezwaar details by id
  return (
    <div>
      <h2>Bezwaarschrift Detail Pagina</h2>
      <p>Bezwaarschrift ID: {id}</p>
      <ul>
        <li>Status: <em>Open/Behandeld</em></li>
        <li>Indiener: <em>Naam indiener</em></li>
        <li>Datum indiening: <em>01-01-2026</em></li>
        <li>Omschrijving: <em>Omschrijving van het bezwaar...</em></li>
        <li>Juridische opvolging: <em>In behandeling</em></li>
      </ul>
      {/* Voeg meer detailvelden toe indien nodig */}
    </div>
  );
}
