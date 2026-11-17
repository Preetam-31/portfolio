# Preetam Kumar – Portfolio (React + Vite)

## Run locally
Requires Node.js 18+.
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
```

## Make it yours (all content lives in `src/data.js`)
- **Photo:** copy to `public/profile.jpg`, set `photo: '/profile.jpg'`.
- **Resume:** replace `public/resume.pdf` with your PDF (keep the name), or change `resume` in data.js.
- **GitHub / LinkedIn / email:** fill `github`, `linkedin`, `email`. Empty links are hidden.
- **Projects:** add repo/demo URLs in each project. Screenshots: put images in `public/` and add an `<img>` in `ProjectCard.jsx`.
- **Certificates:** put PDFs/images in `public/certificates/` and add entries, e.g. `{ title:'Name', issuer:'Issuer', year:'2025', link:'/certificates/name.pdf' }`.
- **Education:** set the graduation year in `education.year`.
- The contact form opens the visitor's email app addressed to your `email`. For a backend-based form, use Formspree.

## Upload to GitHub
```bash
git init && git add . && git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```
(Create the empty repo on github.com first.)

## Deploy on Vercel
1. Sign in at vercel.com with GitHub → **Add New → Project** → import the repo.
2. Framework preset: **Vite** (auto-detected). Build: `npm run build`, output: `dist`.
3. Click **Deploy**. You get a public `*.vercel.app` URL; every `git push` redeploys.
