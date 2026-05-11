# SennaFilter — Photography Portfolio

## Setup

This is a static HTML/CSS/JS website. No build step needed.

## Adding Your Photos

Drop your photos into the `assets/` folder:

- `assets/hero.jpg` — hero image on the homepage (full screen)
- `assets/feature.jpg` — the "Feature My Work" section image
- `assets/hotels/0.jpg` — Il Sereno cover photo
- `assets/hotels/1.jpg` — Hotel Miramalfi cover photo
- `assets/hotels/2.jpg` — Caesar Augustus cover photo
- `assets/hotels/3.jpg` — Casa Angelina cover photo
- `assets/hotels/4.jpg` — Hotel Regency cover photo
- `assets/hotels/5.jpg` — Alisal Ranch cover photo
- `assets/hotels/6.jpg` — Hotel Cerro cover photo
- `assets/hotels/7.jpg` — Casa Chameleon cover photo
- `assets/hotels/8.jpg` — Borgo 69 cover photo
- `assets/hotels/9.jpg` — Casa Monti cover photo

For gallery photos on each hotel page, add:
- `assets/hotels/0-1.jpg`, `assets/hotels/0-2.jpg` ... `assets/hotels/0-6.jpg` (for Il Sereno)
- Same pattern for each hotel (replace 0 with the hotel number)

If a photo is missing, the site will show a neutral color placeholder automatically.

## Deploy to Vercel

1. Push this folder to a GitHub repository
2. Go to vercel.com and sign in with GitHub
3. Click "New Project" → import your repo
4. Leave all settings as default and click Deploy
5. Your site will be live at `your-project.vercel.app`

To connect a custom domain (e.g. sennafilter.com):
- Go to your project in Vercel → Settings → Domains
- Add your domain and follow the DNS instructions

## Updating the Site

To make changes: edit the files → push to GitHub → Vercel auto-deploys.
Or ask Claude to make changes and paste in the updated files.
