# HEMEH Technologies

## Project Overview
HEMEH Technologies is a crypto advisory platform for family offices. The website features:
- Landing page showcasing 12 crypto/DeFi services
- Interactive dashboard for tracking company revenue and profit analytics
- Dark/light mode support
- Responsive design inspired by TrustMRR

## Tech Stack
- **Language:** JavaScript (React)
- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Charts:** Recharts
- **Icons:** Lucide React

## Project Structure
```
Hemeh AI/
├── index.html              # Entry HTML
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Router setup
    ├── index.css           # Global styles
    ├── components/
    │   ├── Navbar.jsx      # Navigation bar
    │   ├── Hero.jsx        # Hero section
    │   ├── Services.jsx    # Services grid (12 offerings)
    │   ├── About.jsx       # About section
    │   ├── Contact.jsx     # Contact form
    │   └── Footer.jsx      # Footer
    └── pages/
        ├── LandingPage.jsx # Main landing page
        └── Dashboard.jsx   # Analytics dashboard
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
cd "Hemeh AI"
npm install
```

### Running the Project
```bash
npm run dev
```
Opens at http://localhost:5173

### Building for Production
```bash
npm run build
npm run preview
```

## Build Commands
| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Key Features

### Landing Page
- Hero with stats and CTAs
- 12 service cards with icons
- About section with feature list
- Contact form with AUM dropdown
- Dark/light mode toggle

### Dashboard
- Summary cards (total revenue, profit, companies, top performer)
- Line chart for revenue/profit trends
- Pie chart for revenue distribution
- Company table with sorting
- Add/delete company functionality
- Company detail view with bar charts

## Services Offered
1. Revenue-Driven Assets (HYPE, LIT)
2. Prediction Markets (Polymarket, Kalshi, Opinion)
3. Real-World Asset Trading (trade.xyz)
4. PerpDEX Liquidity (Lighter, Extended, Paradex)
5. Hedging Strategies
6. DeFi Mechanics (Aave, Spark)
7. Sovereign Ownership (BTC, ETH, SOL)
8. Institutional Credit (Maple Finance)
9. On-Chain Treasuries (Ondo Finance)
10. Custody Security (Safe multisig)
11. Unified Chain Experience (Infinex)
12. Early Stage Investing (Pre-Seed, Series A, OTC)

## Architecture Notes
- Single-page application with client-side routing
- Component-based architecture
- Dark mode persisted to localStorage
- Chart data uses sample data (replace with API in production)

## Important Files
- `src/pages/Dashboard.jsx` - Main analytics dashboard with charts and company management
- `src/components/Services.jsx` - All 12 service offerings
- `src/index.css` - Global styles including dark mode, animations
- `tailwind.config.js` - Custom colors and font configuration

## Common Tasks

### Add a new service
Edit `src/components/Services.jsx` and add to the `services` array.

### Modify dashboard sample data
Edit the `initialCompanies` array in `src/pages/Dashboard.jsx`.

### Change color scheme
Update `tailwind.config.js` and `src/index.css` for brand colors.

### Connect to backend API
Replace sample data in Dashboard.jsx with API calls using fetch or axios.
