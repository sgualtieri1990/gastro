# Gastro – Sicitalia Web App

Moderne Angular-Webanwendung für **Sicitalia** – Italienischer Genuss für Gastronomie und Feinkosthandel.

## Tech Stack

- Angular 20 (Standalone Components)
- Glassmorphism UI
- SCSS
- Deployment: GitHub + Vercel

## Entwicklung

```bash
npm install
npm start
```

Öffne [http://localhost:4200](http://localhost:4200).

## Build

```bash
npm run build
```

Output: `dist/gastro/browser`

## Deployment (Vercel)

1. Repository auf GitHub: `sgualtieri1990/gastro`
2. Auf [vercel.com](https://vercel.com) → **Add New Project**
3. GitHub-Repo `gastro` importieren
4. Vercel erkennt `vercel.json` automatisch
5. Deploy

## Seiten

| Route | Inhalt |
|-------|--------|
| `/` | Willkommen, Downloads, Instagram |
| `/ueber-uns` | Geschichte, Philosophie, Mission |
| `/produkte` | Produktkategorien |
| `/la-perfetta` | Pizzabasen |
| `/gastrogeraete` | Gastrogeräte |
| `/termin` | Termin buchen |
| `/kunde-werden` | B2B-Registrierung |
