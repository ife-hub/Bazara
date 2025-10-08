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

---

## Project Structure

```
bazara-dashboard/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Dashboard.tsx          # Main dashboard component
│   │   ├── DashboardHeader.tsx    # Top navigation header
│   │   ├── ServiceRequestBar.tsx  # Search and filter bar
│   │   ├── MetricCard.tsx         # Reusable metric display card
│   │   └── charts/                # Chart components
│   │       ├── TicketsByAgent.tsx
│   │       ├── ChangeByStatus.tsx
│   │       └── TicketResolution.tsx
│   ├── data/
│   │   └── dashboardData.ts       # Mock data source
│   ├── types/
│   │   └── dashboard.types.ts     # TypeScript interfaces
│   ├── utils/
│   │   └── formatters.ts          # Utility functions
│   ├── App.tsx                    # Root component
│   ├── index.tsx                  # Entry point
│   └── index.css                  # Global styles
├── package.json
├── tsconfig.json
├── README.md
└── ARCHITECTURE.md                # Architecture Decision Record
```

---

## Mock Data Location
/src/app/data/dashboard.ts

### Primary Mock Data File
dashboard.ts