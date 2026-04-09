import { useParams } from 'react-router-dom';

const lcaTopics = [
  { id: 1, titel: 'Wat is LCA?', uitleg: 'LCA (Levenscyclusanalyse) is een methode om de milieueffecten van een product, proces of dienst gedurende de hele levenscyclus te beoordelen. Het helpt bij het maken van duurzame keuzes.' },
  { id: 2, titel: 'CO₂-cyclus', uitleg: 'De CO₂-cyclus beschrijft de uitstoot en opname van koolstofdioxide gedurende het project. Denk aan productie, transport, gebruik en afvalfase.' },
  { id: 3, titel: 'Stikstof-cyclus', uitleg: 'De stikstof-cyclus richt zich op de uitstoot en impact van stikstof in verschillende fasen. Belangrijk voor bouwprojecten en vergunningen.' },
  { id: 4, titel: 'Tools en methodieken', uitleg: 'Tools: EcoInvent (database), OpenLCA (software), Nationale Milieudatabase. Methodieken: EN15804, ISO14040.' },
  { id: 5, titel: 'Praktijkvoorbeeld bouwproject', uitleg: 'Een bouwproject gebruikt LCA om de totale CO₂- en stikstofimpact van materiaalkeuzes te berekenen. Bijvoorbeeld: beton vs. hout.' },
  { id: 6, titel: 'Praktijkvoorbeeld infra', uitleg: 'Bij aanleg van infrastructuur (wegen, bruggen) wordt LCA gebruikt om milieuwinst aan te tonen bij alternatieve ontwerpen.' },
  { id: 7, titel: 'EcoInvent', uitleg: 'EcoInvent is een internationale database met milieugegevens voor LCA-berekeningen.' },
  { id: 8, titel: 'OpenLCA', uitleg: 'OpenLCA is een open source softwarepakket voor het uitvoeren van levenscyclusanalyses.' },
  { id: 9, titel: 'Nationale Milieudatabase', uitleg: 'De NMD bevat milieudata van bouwmaterialen en is verplicht bij bouwprojecten in Nederland.' },
  { id: 10, titel: 'Milieu-impactberekening', uitleg: 'Een milieu-impactberekening kwantificeert de effecten van een project op CO₂, stikstof en andere milieufactoren.' },
];

export default function LcaDetail() {
  const { id } = useParams();
  const topic = lcaTopics.find(t => t.id === Number(id));
  if (!topic) return <div>Onderwerp niet gevonden.</div>;
  return (
    <div>
      <h2>{topic.titel}</h2>
      <p>{topic.uitleg}</p>
      <p><em>Meer verdieping en voorbeelden kunnen hier worden toegevoegd.</em></p>
    </div>
  );
}
