# CHAMGO-Pulse – React-project met meerdere pagina's en routing

## Mappenstructuur inclusief Router
```
chamgo-pulse/
├── package.json
├── public/
│   └── index.html
├── src/
│   ├── app/
│   │   ├── Router.jsx
│   │   ├── dashboard/
│   │   │   ├── page.jsx
│   │   │   ├── DashboardCard.jsx
│   │   │   └── DashboardOverview.jsx
│   │   ├── projecten/
│   │   │   ├── ProjectList.jsx
│   │   │   └── ProjectDetail.jsx
│   │   ├── participatie/
│   │   │   ├── ParticipatieForm.jsx
│   │   │   └── ParticipatieOverview.jsx
│   │   ├── bezwaren/
│   │   │   ├── BezwaarschriftList.jsx
│   │   │   └── BezwaarschriftDetail.jsx
│   │   ├── vergunningen/
│   │   │   ├── VergunningList.jsx
│   │   │   └── VergunningDetail.jsx
│   │   ├── openNorm/
│   │   │   └── OpenNormScore.jsx
│   │   └── settings/
│   │       └── UserSettings.jsx
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   └── Footer.jsx
│   ├── services/
│   │   └── api.js
│   └── assets/
│       └── icons/
└── README.md
```

## Router.jsx
```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardOverview from './dashboard/DashboardOverview';
import ProjectList from './projecten/ProjectList';
import ParticipatieOverview from './participatie/ParticipatieOverview';
import BezwaarschriftList from './bezwaren/BezwaarschriftList';
import VergunningList from './vergunningen/VergunningList';
import OpenNormScore from './openNorm/OpenNormScore';
import Navbar from '../components/Navbar';

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<DashboardOverview />} />
        <Route path="/projecten" element={<ProjectList />} />
        <Route path="/participatie" element={<ParticipatieOverview />} />
        <Route path="/bezwaren" element={<BezwaarschriftList />} />
        <Route path="/vergunningen" element={<VergunningList />} />
        <Route path="/opennorm" element={<OpenNormScore />} />
      </Routes>
    </Router>
  );
}
```

## Navbar.jsx
```jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/projecten">Projecten</Link></li>
        <li><Link to="/participatie">Participatie</Link></li>
        <li><Link to="/bezwaren">Bezwaren</Link></li>
        <li><Link to="/vergunningen">Vergunningen</Link></li>
        <li><Link to="/opennorm">Open Norm</Link></li>
      </ul>
    </nav>
  );
}
```

## index.jsx
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './app/Router';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
```

## Starten in VS Code
1. `npm install` – installeer dependencies
2. `npm start` – start de lokale server
3. Open [http://localhost:3000](http://localhost:3000) om het dashboard en de verschillende pagina's te bekijken

## Toekomstige uitbreidingen
- Per pagina tabellen, formulieren, grafieken en KPI-dashboards
- Database-verbinding via Supabase/PostgreSQL
- Rollen- en rechtenbeheer
- Notificaties en waarschuwingen
- Exportfunctionaliteit naar PDF/CSV

---

# Volledige platformversie – volgende bouwlaag

## Extra pagina's

### Projectdetail
- Algemene projectinformatie
- Locatiekaart
- Betrokken partijen
- Projecttijdlijn
- Risicoprofiel
- Status per fase

### Participatiepagina
- Gespreksverslagen
- Stakeholderoverzicht
- Openstaande actiepunten
- Draagvlakscore
- Notities en uploads

### Bezwarenpagina
- Overzicht bezwaren
- Status per bezwaar
- Juridische opvolging
- Trendanalyse
- Doorlooptijden
- Export naar PDF

### Vergunningenpagina
- Lopende vergunningen
- Benodigde onderzoeken
- Deadlines
- Termijnen
- Waarschuwingen

### Open Norm-pagina
- Maatschappelijke impact
- Doorstroming woningmarkt
- Zorgcomponent
- Sociale cohesie
- Duurzaamheid
- Eindscore

---

# Database-opzet

## Tabellen

### projects
- id
- naam
- locatie
- fase
- type
- aantal_woningen
- zorgcomponent
- status

### risks
- id
- project_id
- type
- niveau
- omschrijving
- status

### permits
- id
- project_id
- vergunning_type
- deadline
- status
- ontbrekende_stukken

### objections
- id
- project_id
- type
- status
- datum
- juridische_opmerking

### participation
- id
- project_id
- stakeholder
- datum
- onderwerp
- actiepunt

### open_norm
- id
- project_id
- leefbaarheid
- zorg
- duurzaamheid
- doorstroming
- eindscore

---

# Dashboard-widgets

## Widgetvoorbeelden
- Totaal aantal projecten
- Lopende bezwaren
- Hoogste risico’s
- Vergunningdeadlines
- Participatiescore
- Open norm-score
- Projecten per gemeente
- Gemiddelde doorlooptijd

---

# Rollenstructuur

## Rollen
- Beheerder
- Gemeente
- Beleidsmedewerker
- Jurist
- Projectleider
- Adviseur
- Viewer

Iedere rol ziet alleen de informatie die relevant is.

---

# Technische vervolgstap

## Fase 1
- Database opzetten
- Inlogsysteem bouwen
- Navigatie afronden
- Pagina's vullen met voorbeelddata

## Fase 2
- Formulieren toevoegen
- Opslaan en ophalen van data
- PDF-export
- Zoekfunctie
- Filters

## Fase 3
- Grafieken
- GIS-kaarten
- Automatische waarschuwingen
- AI-samenvattingen
- Externe koppelingen

---

# Resultaat

Met deze uitbreiding ontstaat een volledige eerste werkende versie van CHAMGO-Pulse waarmee projecten, risico’s, participatie, vergunningen, bezwaren en open norm integraal beheerd kunnen worden.

---

# Voorbeeldschermen per pagina

## Dashboard

### Onderdelen
- Totaal aantal projecten
- Lopende vergunningen
- Openstaande bezwaren
- Hoogste risico’s
- Open norm-score
- Projectstatus per gemeente

### Widgets
- KPI-kaarten
- Risicoblokken
- Tijdlijn
- Grafiek doorlooptijd
- Kaartweergave projecten

---

## Projectdetailpagina

### Blokken
- Algemene gegevens
- Tijdlijn
- Betrokken partijen
- Documenten
- Locatiekaart
- Risico-overzicht
- Openstaande acties

### Voorbeeldvelden
- Projectnaam
- Gemeente
- Adres
- Projectfase
- Aantal woningen
- Zorgcomponent
- Status

---

## Bezwarenmodule

### Tabelkolommen
- Dossiernummer
- Type bezwaar
- Datum
- Status
- Behandelaar
- Juridische opmerking
- Actie vereist

### Filters
- Gemeente
- Project
- Status
- Datum
- Type bezwaar

---

## Participatiemodule

### Tabelkolommen
- Stakeholder
- Gespreksdatum
- Onderwerp
- Belangrijkste zorg
- Actiepunt
- Status

### Extra functies
- Upload gespreksverslag
- Actiepunt toevoegen
- E-mailnotitie opslaan
- Participatiescore berekenen

---

## Vergunningenmodule

### Tabelkolommen
- Vergunningtype
- Project
- Deadline
- Status
- Ontbrekende documenten
- Verantwoordelijke

### Waarschuwingen
- Deadline binnen 7 dagen
- Ontbrekend onderzoek
- Incomplete aanvraag

---

## Open Norm-module

### Scores
- Leefbaarheid
- Zorgtoevoeging
- Doorstroming
- Duurzaamheid
- Sociale cohesie
- Regionale impact

### Einduitkomst
- Totale projectscore
- Beleidsadvies
- Risico-inschatting
- Repliceerbaarheid

---

# UI-opbouw

## Linker menu
- Dashboard
- Projecten
- Participatie
- Vergunningen
- Bezwaren
- Open Norm
- Rapportages
- Instellingen

## Bovenbalk
- Zoekfunctie
- Meldingen
- Gebruikersprofiel
- Gemeenteselectie
- Exportknop

---

# Eerste echte ontwikkelvolgorde

1. Loginpagina
2. Dashboard
3. Projectenoverzicht
4. Projectdetailpagina
5. Bezwarenmodule
6. Participatiemodule
7. Vergunningenmodule
8. Open Norm-module
9. Rapportages
10. Exportfunctie

---

# Eerste benodigde npm-packages

```bash
npm install react-router-dom
npm install axios
npm install recharts
npm install react-icons
npm install jspdf
npm install html2canvas
npm install @supabase/supabase-js
npm install react-hook-form
```

---

# Eerste databaseverbinding

## Supabase voorbeeld

```jsx
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project.supabase.co';
const supabaseKey = 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseKey);
```

---

# Eerste API-voorbeeld

```jsx
import axios from 'axios';

export async function getProjects() {
  const response = await axios.get('/api/projects');
  return response.data;
}
```

---

# Eindbeeld

CHAMGO-Pulse groeit hiermee uit tot een compleet bestuurlijk, juridisch en projectmatig platform waarin gemeenten, projectteams en adviseurs integraal kunnen samenwerken op basis van één centrale waarheid.

---

# Realtime milieumodule

CHAMGO-Pulse kan worden uitgebreid met een realtime milieumodule die actuele sensordata, satellietbeelden en lokale metingen koppelt aan projectlocaties. Hierdoor beschikken gemeenten, bewoners en initiatiefnemers over objectieve en actuele informatie binnen bezwaarprocedures, vergunningverlening en openbaarheid.

## Onderdeel 1 – Realtime sensordata

### Meetwaarden
- PM2.5
- PM10
- NO₂
- CO₂
- CH₄
- N₂O
- Temperatuur
- Windrichting
- Neerslag

---

## Onderdeel 2 – Databronnen

### Externe bronnen
- RIVM Samen Meten sensoren
- NASA satellietdata
- ESA satellietdata
- Copernicus satellietdata

### Interne bronnen
- CHAMGO-Pulse sensoren op erf- en wijkniveau
- Dronevluchten met lokale emissiemetingen
- Tijdelijke sensormasten per projectlocatie

---

## Onderdeel 3 – Toepassing binnen bezwaarprocedures

Per projectlocatie kan CHAMGO-Pulse automatisch inzicht geven in:
- actuele milieusituatie
- historische gemiddelden
- afwijkende stikstof-, methaan- of CO₂-waarden
- invloed van verkeer, landbouw, windrichting of industrie
- feitelijke onderbouwing van bezwaren
- verschillen tussen gemeten data en aannames

Hierdoor ontstaat een objectief overzicht dat juridisch, bestuurlijk en maatschappelijk bruikbaar is.

---

## Onderdeel 4 – Openbaarheid en transparantie

Binnen het platform kunnen bewoners, gemeenten en initiatiefnemers dezelfde actuele kaartlaag bekijken.

### Resultaat
- meer vertrouwen
- minder discussie over aannames
- betere onderbouwing van vergunningen
- snellere besluitvorming
- minder kans op langdurige bezwaarprocedures

---

## Onderdeel 5 – Kaartlaag Montferland

Voor Montferland kan een speciale milieukaartlaag worden ingericht met:
- actuele sensormetingen per boerenerf-locatie
- trendgrafieken per gebied
- historische vergelijking
- risicozones
- projectscenario’s
- automatische signalering bij afwijkende emissies

---

# Nieuwe database-tabellen

## sensor_data
- id
- project_id
- datum_tijd
- pm25
- pm10
- no2
- co2
- ch4
- n2o
- temperatuur
- windrichting
- neerslag

## satellite_data
- id
- project_id
- bron
- datum
- stikstof_index
- vegetatie_index
- bodemvocht
- emissie_index

## drone_measurements
- id
- project_id
- datum
- locatie
- emissiewaarde
- bron
- opmerkingen

## risk_zones
- id
- project_id
- gebied
- risico_type
- risico_score
- trend

---

# Nieuwe dashboard-widgets milieumodule

- Realtime luchtkwaliteit
- Windrichting en verspreiding
- Historische vergelijking
- Emissietrends
- Risicozones
- Kaart met meetpunten
- Dronevluchten
- Satellietanalyse

---

# Mogelijke technische koppelingen

## API's
- RIVM Samen Meten API
- OpenWeather API
- Copernicus API
- NASA EarthData API
- ESA Sentinel Hub API

## Visualisatiebibliotheken
- Leaflet
- React Leaflet
- Mapbox
- Chart.js
- Recharts

---

# Strategische waarde

De milieumodule maakt CHAMGO-Pulse onderscheidend doordat het platform niet alleen beleid, vergunningen en bezwaren beheert, maar ook realtime kan aantonen hoe een locatie functioneert. Hierdoor ontstaat een objectieve digitale milieulaag waarmee gemeenten, bewoners en initiatiefnemers direct kunnen zien hoe een projectgebied zich ontwikkelt – zowel nu als richting de toekomst.
