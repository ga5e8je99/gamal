# Gamal Ahmed | Full-Stack Web Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg?style=for-the-badge)](LICENSE)

A high-performance, modern developer portfolio showcasing full-stack web applications, RESTful API design, interactive UI/UX experiences, and an integrated appointment scheduling system.

---

## 🌟 Key Features

- **Single Solitary Identity**: Focused positioning as a **Full-Stack Web Developer** (React, Next.js, Node.js, Express, MongoDB, Tailwind CSS).
- **Interactive SVG Welcome Animation**: Lightweight vector SVG entrance animation replacing bulky GIFs for instant first-paint performance.
- **Cal.com-Style Appointment Scheduling**: Interactive 2-column modal supporting direct date/time slot selection, instant Cairo time conversion (GMT+2), Google Calendar deep linking, and 1-click WhatsApp booking.
- **Detailed Project Case Studies**: Every featured project includes a structured breakdown of:
  - **Challenge**: The business or engineering problem solved.
  - **My Role**: Specific architectural and frontend/backend contributions.
  - **Outcome**: Quantifiable performance, conversion, and UX impact.
- **Consolidated Skills Matrix**: Replaced arbitrary percentage bars with real-world experience tiers, key architecture concepts, and direct links to live applications where each technology is applied.
- **Client Testimonials & Engineering Pillars**: Real client feedback cards with 5-star ratings, coupled with core development standards (Clean Architecture, Web Vitals, Resilient APIs).
- **Modern Performance & SEO Suite**:
  - Semantic HTML with single solitary `<h1>` hierarchy.
  - Dynamic `sitemap.xml` (`app/sitemap.js`) and `robots.txt` (`app/robots.js`).
  - Schema.org structured data (`JSON-LD` of type `Person`).
  - OpenGraph & Twitter preview cards (`og:image`, canonical tags).
  - Next.js `<Image>` tags with precise responsive `sizes` and WebP compression.
  - Scraper-protected contact details with 1-click clipboard copy.
- **Decoupled Admin Dashboard Companion**: A standalone Next.js administrative dashboard running independently on port `3001` with full CRUD control over profile, projects, appointments, and messages via persistent JSON storage.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technologies |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **UI & Styling** | React 19, Tailwind CSS v4, Framer Motion |
| **Icons & Modals** | React Icons, Material UI Dialogs |
| **Date & Time** | Day.js |
| **Backend & Storage** | Next.js Route Handlers, LocalStorage external store synchronization, Node.js JSON file storage |
| **Tooling** | JavaScript (ES6+), `jsconfig.json`, ESLint |

---

## 📁 Repository Structure

```text
gamal/
├── app/
│   ├── components/
│   │   ├── About.js              # Bio, engineering pillars, client testimonials
│   │   ├── Contact.js            # Scraper-protected contact & message dispatch
│   │   ├── ExperienceEducation.js# Timeline & direct CV download
│   │   ├── Hero.js               # Primary viewport with solitary H1 & avatar
│   │   ├── Navbar.js             # Responsive navigation with CV download
│   │   ├── Picker.js             # Modern 2-column appointment booking modal
│   │   ├── Portfolio.js          # Project showcase with Challenge/Role/Outcome
│   │   ├── Services.js           # Refocused full-stack services & consultation CTA
│   │   ├── Skills.js             # Evidence-backed skills linked to projects
│   │   ├── Wave.js               # Decorative SVG divider
│   │   └── WelcomeAnimation.js   # Pure SVG vector intro animation
│   ├── api/
│   │   ├── bookings/route.js     # Appointment reservation endpoints
│   │   ├── data/route.js         # Centralized portfolio data endpoint
│   │   └── messages/route.js     # Contact inquiries endpoint
│   ├── layout.js                 # Global fonts, metadata, OpenGraph & JSON-LD
│   ├── page.js                   # Main single-page application entry
│   ├── robots.js                 # Dynamic robots.txt configuration
│   └── sitemap.js                # Dynamic sitemap.xml generator
├── data/
│   └── site-data.json            # Central JSON database for portfolio content
├── lib/
│   ├── siteData.js               # Initial state schema & sync external store
│   └── useSiteData.js            # Custom hook with cached server snapshot
├── public/                       # Optimized WebP assets, SVGs & CV PDF
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.18+ or v20+ recommended
- **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ga5e8je99/gamal.git
   cd gamal
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Building for Production

```bash
npm run build
npm run start
```

---

## 🔒 Standalone Admin Dashboard

The portfolio's content can be administered through a companion dashboard located in a separate dedicated workspace:
- **Location**: `gamal-dashboard/`
- **Default Port**: `3001`
- **Capabilities**: Manage appointments, inspect incoming messages, update project listings, and modify bio details without rebuilding the main client site.

---

## 📬 Contact & Connect

- **Developer**: Gamal Ahmed
- **Title**: Full-Stack Web Developer
- **Email**: [gamal.ahmed.dev@gmail.com](mailto:gamal.ahmed.dev@gmail.com)
- **LinkedIn**: [linkedin.com/in/gamal-ahmed--](https://linkedin.com/in/gamal-ahmed--)
- **GitHub**: [github.com/ga5e8je99](https://github.com/ga5e8je99)
- **WhatsApp**: [+20 128 564 5073](https://wa.me/201285645073)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
