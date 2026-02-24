# Karthik Profile Portfolio

A personal portfolio website built with React to showcase Karthik V's profile, experience, skills, and selected projects.

## Features

- Dark theme UI matching profile branding
- Hero section with profile photo and contact links
- Experience timeline
- Core skills section
- Project details in a card-style slider
- Resume link to PDF in `public/`

## Tech Stack

- React (Create React App)
- CSS (custom styling)

## Project Assets

- Profile photo: `public/profile-photo.png`
- Resume PDF: `public/2393630-Karthik Velou.pdf`

## Getting Started

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm start
```

Create production build:

```bash
npm run build
```

## Notes

- This project uses `NODE_OPTIONS=--openssl-legacy-provider` in npm scripts for compatibility with the current CRA/Webpack setup.
- Deployment is configured to use npm (`package-lock.json`) instead of yarn.

## Deployment

This app can be deployed to Vercel or any static hosting platform after running:

```bash
npm run build
```

Output will be available in the `build/` folder.
