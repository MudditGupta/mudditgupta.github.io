# Muddit Gupta — Product & Business Analyst Portfolio

A responsive, static portfolio website. No build step, framework, database, or paid service is required.

## Before publishing

1. Open `script.js`.
2. Replace `YOUR_EMAIL@example.com` with the email address you want public.
3. Replace `https://www.linkedin.com/in/YOUR-LINKEDIN-HANDLE/` with your public LinkedIn profile URL.
4. Review every project description and make sure the wording matches your actual ownership and what you are permitted to disclose.

## Deploy to Netlify (manual drag and drop)

1. Sign in to Netlify.
2. Open **Add new site** → **Deploy manually** (or the Netlify Drop page).
3. Drag the entire `muddit-portfolio` folder into the deploy area. Do not upload only `index.html`; keep `styles.css`, `script.js`, `netlify.toml`, and the `assets` folder together.
4. Netlify will publish the site and provide a `*.netlify.app` URL.
5. In **Site configuration** → **Change site name**, choose your preferred subdomain if available.
6. For a custom domain, use **Domain management** → **Add a domain** and follow Netlify's DNS instructions.

## Deploy using Git (optional)

Push this folder to a GitHub repository, then in Netlify choose **Add new site** → **Import an existing project**. Set the publish directory to `.` and leave the build command blank.

## Files

- `index.html` — page content and SEO metadata
- `styles.css` — responsive design and visual styling
- `script.js` — experience filters, mobile navigation, contact links and small animations
- `netlify.toml` — publish directory and basic security headers
- `assets/favicon.svg` — site icon

## Notes

- The portfolio intentionally omits employer and client names.
- Product proposals and feasibility work are labelled separately from production delivery.
- No performance metrics, customer names, or launch claims have been invented.
- Google Fonts are loaded remotely; system fonts remain as fallbacks.
