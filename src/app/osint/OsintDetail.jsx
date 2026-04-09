import { useParams } from 'react-router-dom';

const osintTopics = [
  { id: 1, titel: 'Wat is OSINT?', uitleg: 'OSINT staat voor Open Source Intelligence: het verzamelen en analyseren van publiek beschikbare informatie.' },
  { id: 2, titel: 'Tools', uitleg: 'Voorbeelden van OSINT-tools zijn Maltego, Shodan, theHarvester, en SpiderFoot.' },
  { id: 3, titel: 'Praktijkvoorbeeld', uitleg: 'Een gemeente gebruikt OSINT om openbare bronnen te monitoren op dreigingen of sentiment.' },
];

export default function OsintDetail() {
  const { id } = useParams();
  const topic = osintTopics.find(t => t.id === Number(id));
  if (!topic) return <div>Onderwerp niet gevonden.</div>;
  return (
    <div>
      <h2>{topic.titel}</h2>
      <p>{topic.uitleg}</p>
      <p><em>Meer verdieping en voorbeelden kunnen hier worden toegevoegd.</em></p>
    </div>
  );
}
