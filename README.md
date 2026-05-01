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

### Step 1 — Install Git (skip if you already have it)

Open PowerShell and run:

```powershell
git --version
```

- If you see a version number → skip to Step 2.
- If you see "command not found" → download and install from https://git-scm.com/download/win (accept all defaults). Then **close and reopen PowerShell** and re-run `git --version` to confirm.

### Step 2 — Set your Git identity (one-time, only on first use)

```powershell
git config --global user.name "Nate Kebede"
git config --global user.email "youremail@gmail.com"
```

### Step 3 — Create a GitHub account & repository

1. If you don't have a GitHub account: https://github.com/signup
2. Once logged in, go to https://github.com/new
3. Fill in:
   - **Repository name**: `nate-kebede` (this becomes part of your URL)
   - **Description**: `Personal website` (optional)
   - **Public** ← required for GitHub Pages on free accounts
   - **Do NOT** check "Add a README file"
   - **Do NOT** add a `.gitignore` or license through the UI
4. Click **Create repository**

GitHub will show you a URL like `https://github.com/<your-username>/nate-kebede.git` — copy it for Step 5.

### Step 4 — Initialize the local repository

In PowerShell, navigate to the project folder:

```powershell
cd "C:\Users\kebede\Documents\My Web Page"
```

Then run:

```powershell
git init
git add .
git commit -m "Initial site"
git branch -M main
```

### Step 5 — Connect to GitHub and push

Replace the URL below with the one you copied in Step 3:

```powershell
git remote add origin https://github.com/<YOUR_USERNAME>/nate-kebede.git
git push -u origin main
```

The first push pops up a browser window asking you to authenticate with GitHub. Sign in and approve. When it finishes, refresh the GitHub repo page — all your files should be there.

### Step 6 — Enable GitHub Pages

1. On your repo's GitHub page, click **Settings** (top nav)
2. In the left sidebar, click **Pages**
3. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main`, folder `/ (root)`
4. Click **Save**

A banner appears saying "Your site is being deployed."

### Step 7 — Visit your live site

Wait about 60 seconds, then refresh the Pages settings screen. The banner turns green and shows your URL:

```
https://<YOUR_USERNAME>.github.io/nate-kebede/
```

Open it. That's your live site. Share that URL with anyone: recruiters, hiring managers, your network.

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
- **Contact info**: search for `youremail@gmail.com` and `(469) 623-XXXX`

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
