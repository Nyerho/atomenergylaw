# Atom Energy Law Advisory

A professional website for **Atom Energy Law Advisory**, a boutique energy law firm offering exclusive tier-1 legal and strategic advisory services across the energy and natural resources value chain.

## Overview

This project showcases the firm's expertise in navigating complex legal landscapes within the energy sector. The website features a modern, clean design that reflects the firm's commitment to precision, clarity, and results.

## Key Features

-   **Responsive Design**: Fully responsive layout built with **Bootstrap 5.3**, ensuring optimal viewing on all devices (mobile, tablet, desktop).
-   **Modern UI/UX**: Utilizes **glassmorphism** design elements (blur effects, semi-transparent panels) for a contemporary look.
-   **Interactive Elements**:
    -   **3D Flip Cards**: Engaging flip animations for the Hero section, Practice Areas, Services, and Sectors to present information dynamically.
    -   **Hero Carousel**: A fading background image carousel on the homepage.
    -   **Smooth Navigation**: Sticky navbar with active state highlighting and smooth transitions.
-   **Comprehensive Sections**:
    -   **Home**: Introduction, hero statement, and overview.
    -   **About Us**: Firm profile, mission, and values.
    -   **Practice Areas**: Detailed breakdown of legal services (Corporate Advisory, Dispute Resolution, etc.).
    -   **Our Services**: Specific offerings like Deal Advisory and Regulatory Compliance.
    -   **Our Sectors**: Focus on Oil & Gas, Power, Mining, and Maritime.
    -   **Contact**: Contact information and inquiry form.

## Technologies Used

-   **HTML5**: Semantic markup for structure.
-   **CSS3**: Custom styling, animations, gradients, and responsive layouts.
-   **JavaScript**: Interactive behavior and DOM manipulation.
-   **Bootstrap 5.3**: CSS framework for responsiveness and components.
-   **Font Awesome 6.4.0**: Scalable vector icons.
-   **Google Fonts**: Typography (Montserrat and Playfair Display).

## Setup & Usage
1.  Clone the repository:
    ```bash
    git clone https://github.com/Nyerho/atomenergylaw.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd atomenergylaw
    ```
3.  Open `www.atom-energylaw.com/index.html` in your web browser to view the site.

## Cloudflare Pages deployment

This repository is prepared for Cloudflare Pages. It is a no-build static deployment whose output directory is `www.atom-energylaw.com`. The repository also includes a Pages Function at `functions/api/mailing-list.js`, which preserves the mailing-list API contract at `/api/mailing-list`.

### Git-integrated Pages project

Create a Cloudflare Pages project connected to this repository with these settings:

- **Framework preset:** None
- **Build command:** leave blank, or use `exit 0`
- **Build output directory:** `www.atom-energylaw.com`
- **Root directory:** `/`

The committed `wrangler.toml` contains the same output-directory setting for Wrangler-based deployments. Because the project uses Pages Functions, deploy through Git integration or Wrangler rather than the Cloudflare dashboard's drag-and-drop upload.

### Wrangler deployment

From the repository root, authenticate and deploy with:

```bash
npx wrangler login
npx wrangler pages deploy www.atom-energylaw.com --project-name atomenergylaw
```

The `functions/` directory is kept at repository root so Pages can discover and bundle the API function.

### Required environment variable

The mailing-list function forwards subscriptions to the Google Apps Script endpoint already used by the project. Add this variable in **Workers & Pages → atomenergylaw → Settings → Variables and Secrets** for both Preview and Production:

```text
MAILING_LIST_APPS_SCRIPT_URL=https://script.google.com/macros/s/<deployment-id>/exec
```

For local testing, copy `.dev.vars.example` to `.dev.vars`, set the real endpoint, and run:

```bash
npx wrangler pages dev www.atom-energylaw.com
```

Do not commit `.dev.vars` or any private deployment credentials.

The `_redirects` and `_headers` files in `www.atom-energylaw.com` preserve the existing clean URLs and add safe browser/cache defaults on Cloudflare Pages.

## License

This project is proprietary to **Atom Energy Law Advisory**. All rights reserved.
