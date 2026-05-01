# Nate Kebede · Personal Website

A fast, modern, single-page personal site built with plain HTML, CSS, and JavaScript. No build step. No frameworks. Drops straight onto GitHub Pages (or any static host).

Live URL (after deployment): `https://<your-username>.github.io/<repo-name>/`

## What's on the page

- **Hero** with headshot, animated tagline, status pill ("Open to what's next"), and ten floating tech chips around the photo (5G, Cloud AI-RAN, O-RAN, Kubernetes, Cloud Eng, AI/ML, Automation, NPI, CI/CD, Cybersecurity)
- **About** — narrative summary
- **Experience** — timeline of roles at Nokia, Trend Micro, and Lion Re:Sources
- **Skills** — categorized technical skills (Languages, Cloud & Platforms, Security & DevSecOps, Telecom & RAN, Frameworks & Tools, Operating Systems)
- **Projects** — featured work
- **Education & Certifications** — M.S. Cybersecurity, B.S. Computer Science, plus AI / Cloud / Security / Telecom certs
- **Testimonials** — quotes from colleagues and managers
- **Contact** — direct links (email, phone, LinkedIn, GitHub, location) plus a `mailto:`-powered form

## Features

- Responsive layout (mobile, tablet, desktop)
- Light and dark theme with system-preference detection and persistence in `localStorage`
- Smooth scroll, active-section nav highlight, scroll-to-top button
- Reveal-on-scroll animations and animated stat counters
- Three downloadable resume variants (General, AI/Cloud/Telecom, Cybersecurity)
- Contact form that opens the visitor's email client (no backend needed)
- Accessibility: semantic HTML, ARIA labels, `prefers-reduced-motion` support

## Project structure

```
.
├── index.html              ← all sections / content
├── css/
│   └── styles.css          ← design system + components + responsive
├── js/
│   └── main.js             ← theme, nav, animations, form, etc.
├── assets/
│   ├── nate-headshot.png   ← hero photo
│   └── resumes/
│       ├── Natnael_Kebede_General_Professional.pdf
│       ├── Natnael_Kebede_AI_Cloud_Telecom.pdf
│       └── Natnael_Kebede_Cybersecurity.pdf
└── README.md
```

> Resume filenames keep the formal name "Natnael" because that's what appears inside the documents themselves. The site uses "Nate" everywhere visible to the visitor.

## Run locally

Just open `index.html` in your browser. That's it.

If you prefer a local web server (recommended for clean asset loading):

```powershell
# Python 3
python -m http.server 5500

# OR Node
npx serve .
```

Then visit http://localhost:5500.

## Deploy to GitHub Pages (free, takes 5 minutes)

You'll get a public URL like `https://<your-username>.github.io/<repo-name>/` that anyone with the link can view.

### Pre-deployment checklist

Before pushing, double-check these in `index.html`:

- [ ] Email and phone in the Contact section
- [ ] LinkedIn URL (currently `linkedin.com/in/natnael-kebede`)
- [ ] GitHub URL (currently `github.com/NatMk`)
- [ ] Resume PDFs in `assets/resumes/` are the latest versions
- [ ] Headshot in `assets/nate-headshot.png` is the one you want public
- [ ] `<meta>` description and Open Graph tags reflect the current pitch

### One-time setup

1. **Create a GitHub account** if you don't have one: https://github.com/signup
2. **Create a new repository** at https://github.com/new
   - Name it something like `nate-kebede` or `portfolio` (a short slug that becomes part of your URL)
   - Set it to **Public**
   - Do NOT initialize with a README (we already have one)
3. **Install Git** if you haven't already: https://git-scm.com/download/win

### Push your site

Open PowerShell in the project folder (`C:\Users\kebede\Documents\My Web Page`) and run:

```powershell
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
git push -u origin main
```

Replace `<YOUR_USERNAME>` and `<REPO_NAME>` with your actual values.

### Enable GitHub Pages

1. On GitHub, open your repo
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Build and deployment**:
   - **Source**: *Deploy from a branch*
   - **Branch**: `main`, folder `/ (root)`
4. Click **Save**
5. Wait ~1 minute. Your site will be live at:

   `https://<YOUR_USERNAME>.github.io/<REPO_NAME>/`

Share that URL with anyone: recruiters, hiring managers, your network.

### (Optional) Use a custom domain

If you own a domain like `natekebede.com`:

1. Add a `CNAME` file at the project root with just your domain on one line.
2. In your DNS provider, add `A` records for the apex domain pointing to GitHub Pages IPs:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. (Optional) Add a `CNAME` record for `www` pointing to `<YOUR_USERNAME>.github.io`.
4. Back in GitHub **Settings → Pages**, enter the custom domain and check **Enforce HTTPS**.

DNS can take up to 24 hours to propagate but usually finishes in minutes.

## Updating content

All text content lives in `index.html`. Common edits:

- **Tagline / hero**: search for `class="hero-title"` and `class="hero-tagline"`
- **Floating tech chips on photo**: search for `photo-chip` (each chip is a single `<span>` line)
- **Experience**: search for `<!-- Experience -->` and edit the `<div class="timeline-item">` blocks
- **Skills**: search for `<!-- Skills -->` and edit any `<div class="skill-category">`
- **Projects**: search for `<!-- Projects -->` and edit any `<a class="project-card">`
- **Education / Certs**: search for `<!-- Education -->`
- **Testimonials**: search for `<!-- Testimonials -->`
- **Contact info**: search for `nkebe9@gmail.com` and `(469) 623-4298`

To swap a resume, just replace the PDF in `assets/resumes/` (keep the filename the same).

After any change, push again:

```powershell
git add .
git commit -m "Update content"
git push
```

GitHub Pages redeploys automatically in under a minute.

## Tech notes

- No build, no bundler, no dependencies. Every byte is yours.
- Theme tokens live in CSS variables at the top of `styles.css`. Tweaking colors is a one-line change.
- The 10 floating chips around the photo are positioned on a 5-row × 2-column percentage grid (rows at 4 / 23 / 42 / 61 / 80%) so they stay perfectly aligned at any frame size.
- Animations use `IntersectionObserver` and respect `prefers-reduced-motion`.
- Fonts loaded from Google Fonts: Inter + JetBrains Mono.

## Browser support

Tested on the latest two versions of Chrome, Edge, Firefox, and Safari (desktop and mobile).

---

Built with care in Dallas, TX.
