# Bazara Dashboard Project

## Overview
A comprehensive IT Service Management dashboard built with React, TypeScript, and Recharts. The dashboard provides real-time insights into tickets, incidents, approvals, and team performance metrics.

## Table of Contents
- [Setup Instructions](#setup-instructions)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Mock Data Location](#mock-data-location)
- [Architecture Decisions](#architecture-decisions)
- [Testing](#testing)
- [Technologies Used](#technologies-used)

---

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bazara-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

---

## Available Scripts

### Development
```bash
npm run dev
```
Runs the app in development mode with hot reloading enabled.

### Build
```bash
npm run build
```
Creates an optimized production build in the `build` folder.

### Test
```bash
npm test
```
Launches the test runner in interactive watch mode.

```bash
npm run test:coverage
```
Runs tests with coverage report.

### Lint
```bash
npm run lint
```
Checks code quality and formatting issues.

```bash
npm run lint:fix
```
Automatically fixes linting issues where possible.

### Type Check
```bash
npm run type-check
```
Runs TypeScript compiler to check for type errors without emitting files.

### Tests
```bash
npm test
```

---

## Project Structure

```
bazara-dashboard/
├── public/
│   └── images/
│       ├── file.svg
│       ├── globe.svg
│       ├── next.svg
│       ├── vercel.svg
│       └── window.svg
├── src/
│   ├── _tests_/                     # Test files for components
│   │   ├── AverageIncidentResponseTime.test.tsx
│   │   ├── AverageResponseTime.test.tsx
│   │   ├── ChangeRequestByStatus.test.tsx
│   │   ├── ChangeRequestByStatusChart.test.tsx
│   │   ├── ChangeResultsByCategory.test.tsx
│   │   ├── Dashboard.test.tsx
│   │   ├── IncidentTicketsTable.test.tsx
│   │   ├── Input.test.tsx
│   │   ├── PendingApprovals.test.tsx
│   │   ├── PendingTickets.test.tsx
│   │   ├── RequestTickets.test.tsx
│   │   └── TicketsResolved.test.tsx
│   ├── app/                         # App directory for routes and pages
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   ├── routes.ts
│   │   │   │   └── logout/
│   │   │   │       └── routes.ts
│   │   ├── dashboard/
│   │   │   ├── data/
│   │   │   │   └── dashboard.ts
│   │   │   └── page.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── error.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/                  # Reusable UI components
│   │   ├── AverageChangeResponseTime.tsx
│   │   ├── AverageIncidentResponseTime.tsx
│   │   ├── AwaitingApproval.tsx
│   │   ├── ChangeRequestByStatus.tsx
│   │   ├── ChangeRequestByStatusChart.tsx
│   │   ├── ChangeResultByCategory.tsx
│   │   ├── Headers.tsx
│   │   ├── IncidentTicketsTable.tsx
│   │   ├── Input.tsx
│   │   ├── PendingApprovals.tsx
│   │   ├── PendingTickets.tsx
│   │   ├── ProfilePopup.tsx
│   │   ├── RequestTickets.tsx
│   │   ├── TicketResolutionChart.tsx
│   │   └── TicketsResolved.tsx
│   ├── lib/
│   │   ├── auth-client.ts
│   │   ├── store.ts
│   │   └── validation.ts
│   ├── styles/
│   │   └── Input.css
│   └── App.tsx
├── .gitignore
├── jest.config.js
├── jest.setup.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── README.md
└── ARCHITECTURE.md

```

---

## Mock Data Location
/src/app/data/dashboard.ts

### Primary Mock Data File
dashboard.ts