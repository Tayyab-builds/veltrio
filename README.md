# Veltrio — Client & Sales Management SaaS

Veltrio is a premium B2B CRM SaaS frontend built with **React 18, Vite, and Tailwind CSS v4**. It provides a complete sales and client management workspace with a modern landing page, full CRM dashboard, authentication pages, and an AI assistant (frontend-ready).

## ✨ Highlights

- **Landing page** with premium SaaS design, responsive layout, and micro-interactions
- **Authentication pages** — Login, Signup, Forgot Password (frontend only, ready for backend)
- **Full CRM Dashboard** — KPIs, revenue chart, pipeline overview, recent activity, upcoming tasks, top customers
- **CRM Pages** — Contacts, Leads, Deals, Pipeline, Tasks, Analytics, Reports, Team, Settings
- **Veltrio AI Assistant** — floating chat with mock responses, service abstraction for future real AI integration
- **Light theme** with custom Tailwind design tokens and subtle glassmorphism
- **Fully responsive** — works on 375px to 1600px+ devices
- **Accessible** — semantic HTML, keyboard navigation, focus states, reduced-motion support
- **No backend required** — all data is mock, easily replaceable with real APIs

## 🛠 Tech Stack

- **React 18** (JavaScript)
- **Vite** (latest stable)
- **Tailwind CSS v4**
- **Custom hooks** for scroll reveal and pointer glow
- **Mock service layer** for AI

## 🚀 Live Demo

🔗 [Veltrio Live](https://veltrio-chi.vercel.app)

## 📦 Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm or yarn

### Installation

```bash
git clone https://github.com/Tayyab-builds/veltrio.git
cd veltrio
npm install
```

### Run Development Server

```bash
npm run dev
```

Open `http://localhost:3000` to view it.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/
│   ├── hero.png
│   ├── react.svg
│   └── vite.svg
├── components/
│   ├── ai/
│   │   ├── AIButton.jsx
│   │   ├── AIChatHeader.jsx
│   │   ├── AIChatPanel.jsx
│   │   ├── AIInput.jsx
│   │   ├── AIMessage.jsx
│   │   ├── AISuggestion.jsx
│   │   ├── AITypingIndicator.jsx
│   │   └── VeltrioAI.jsx
│   ├── auth/
│   │   ├── AuthLayout.jsx
│   │   ├── FormField.jsx
│   │   ├── LoginForm.jsx
│   │   ├── PasswordInput.jsx
│   │   ├── PasswordStrength.jsx
│   │   ├── RecoveryForm.jsx
│   │   ├── RecoverySuccess.jsx
│   │   ├── SignupForm.jsx
│   │   └── SocialLoginButton.jsx
│   ├── crm/
│   │   ├── Modal.jsx
│   │   ├── PageHeader.jsx
│   │   └── StatusBadge.jsx
│   ├── Dashboard/
│   │   ├── DashboardLayout.jsx
│   │   ├── EmptyState.jsx
│   │   ├── KpiCard.jsx
│   │   ├── KpiGrid.jsx
│   │   ├── NotificationPanel.jsx
│   │   ├── ProfileMenu.jsx
│   │   ├── RecentActivity.jsx
│   │   ├── RevenueOverview.jsx
│   │   ├── SalesPipeline.jsx
│   │   ├── Sidebar.jsx
│   │   ├── SkeletonLoader.jsx
│   │   ├── TopCustomers.jsx
│   │   ├── TopHeader.jsx
│   │   ├── UpcomingTasks.jsx
│   │   └── WelcomeSection.jsx
│   ├── features/
│   │   ├── Analytics.jsx
│   │   ├── Benefits.jsx
│   │   ├── Collaboration.jsx
│   │   ├── Features.jsx
│   │   ├── FinalCTA.jsx
│   │   ├── Hero.jsx
│   │   ├── HeroProductPreview.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Pipeline.jsx
│   │   ├── ProductOverview.jsx
│   │   └── SocialProof.jsx
│   ├── layout/
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   └── ui/
│       ├── ContactFloatingButton.jsx
│       ├── FeatureCard.jsx
│       ├── icons.jsx
│       ├── Logo.jsx
│       └── Reveal.jsx
├── data/
│   ├── analyticsData.js
│   ├── contactsData.js
│   ├── dashboardData.js
│   ├── dealsData.js
│   ├── leadsData.js
│   ├── mockData.js
│   ├── reportsData.js
│   ├── tasksData.js
│   └── teamData.js
├── hooks/
│   ├── usePointerGlow.js
│   └── useReveal.js
├── pages/
│   ├── About.jsx
│   ├── Analytics.jsx
│   ├── BookDemoPage.jsx
│   ├── Clients.jsx
│   ├── Contact.jsx
│   ├── Contacts.jsx
│   ├── Dashboard.jsx
│   ├── DashboardPage.jsx
│   ├── Deals.jsx
│   ├── ForgotPasswordPage.jsx
│   ├── Home.jsx
│   ├── InfoPage.jsx
│   ├── Leads.jsx
│   ├── LoginPage.jsx
│   ├── Pipeline.jsx
│   ├── Pricing.jsx
│   ├── Reports.jsx
│   ├── Settings.jsx
│   ├── SignupPage.jsx
│   ├── Tasks.jsx
│   └── Team.jsx
├── services/
│   └── aiService.js
├── styles/
│   ├── App.css
│   └── index.css
├── App.jsx
├── main.jsx
└── index.css
```

## 🤖 AI Assistant (Veltrio AI)

Veltrio AI is a **frontend-only** assistant that uses a local mock response engine (`src/services/aiService.js`).  
It can answer questions about your CRM data, such as:

- "Summarize my sales activity"
- "Which deals need attention?"
- "Show me my pipeline insights"
- "What should I follow up on?"
- "What are my top customers?"

The UI is built so that the mock service can later be replaced with a real AI API without changing the chat components.

## 📄 License

This project is open source and available for portfolio/demo purposes.

---

Built with ❤️ by [Tayyab](https://github.com/Tayyab-builds)
