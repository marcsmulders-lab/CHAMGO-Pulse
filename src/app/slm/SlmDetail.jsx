import { useParams } from 'react-router-dom';

export default function SlmDetail() {
  const { id } = useParams();
  // Dummy-data voor SLM detail
  return (
    <div>
      <h2>SLM Detail Pagina</h2>
      <p>SLM ID: {id}</p>
      <ul>
        <li>Status: <em>Actief</em></li>
        <li>Naam: <em>Voorbeeld SLM</em></li>
        <li>Beschrijving: <em>Beschrijving van SLM...</em></li>
        <li>Startdatum: <em>01-01-2026</em></li>
        <li>Einddatum: <em>31-12-2026</em></li>
      </ul>
    </div>
  );
}
