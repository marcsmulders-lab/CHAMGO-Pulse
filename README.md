# CHAMGO-PULSE

Een React-platform voor participatie, projecten, bezwaren en vergunningen.

## Projectstructuur

- **src/app/**: Pagina's en routing
- **src/components/**: Herbruikbare UI-componenten (Navbar, Sidebar, Footer)
- **src/services/**: API-calls en services
- **src/assets/**: Afbeeldingen en iconen

## Belangrijkste pagina's
- Dashboard
- Projecten (overzicht & detail)
- Participatie
- Bezwaren (overzicht & detail)
- Vergunningen
- Open Norm
- Gebruikersinstellingen

## Snel starten

1. Installeer dependencies:
   ```bash
   npm install
   ```
2. Start de ontwikkelserver:
   ```bash
   npm start
   ```
3. Open [http://localhost:3000](http://localhost:3000)

## Features
- Meerdere pagina's met React Router
- Uitbreidbaar met tabellen, formulieren, grafieken
- Voorbereid op koppeling met Supabase/PostgreSQL
- Rollen- en rechtenbeheer mogelijk
- Notificaties, waarschuwingen, export (PDF/CSV)

## Deployment
Push naar GitHub: `git push`

## Deployen op Vercel

1. Installeer de Vercel CLI (eenmalig):
   ```bash
   npm install -g vercel
   ```
2. Login bij Vercel:
   ```bash
   vercel login
   ```
3. Deploy het project:
   ```bash
   vercel
   ```
4. Volg de prompts voor project- en buildinstellingen.

De configuratie staat in `vercel.json`.