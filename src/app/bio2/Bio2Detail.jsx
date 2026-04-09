import { useParams } from 'react-router-dom';

const bio2Normen = [
  { id: 1, titel: 'Beveiligingsbeleid', uitleg: 'Het beleid voor informatiebeveiliging binnen de organisatie.' },
  { id: 2, titel: 'Risicomanagement', uitleg: 'Proces voor het identificeren en beheersen van risico’s.' },
  { id: 3, titel: 'Toegangsbeveiliging', uitleg: 'Regels en maatregelen voor toegang tot systemen en data.' },
];

export default function Bio2Detail() {
  const { id } = useParams();
  const norm = bio2Normen.find(n => n.id === Number(id));
  if (!norm) return <div>Norm niet gevonden.</div>;
  return (
    <div>
      <h2>{norm.titel}</h2>
      <p>{norm.uitleg}</p>
      <p><em>Meer uitleg en implementatievoorbeelden kunnen hier worden toegevoegd.</em></p>
    </div>
  );
}
