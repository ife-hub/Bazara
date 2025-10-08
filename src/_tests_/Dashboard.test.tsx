// __tests__/Dashboard.test.tsx
import { render, screen } from '@testing-library/react';
import Dashboard from '@/app/dashboard/page'; // adjust the path if needed
import dashboardData from '@/app/data/dashboard';

// ----------------------
// Mock Next.js Image
// ----------------------
jest.mock('next/image', () => (props: any) => <img {...props} />);
jest.mock('recharts', () => {
  const React = require('react');
  return {
    LineChart: (props: any) => <div data-testid="LineChart">{props.children}</div>,
    Line: (props: any) => <div data-testid="Line" />,
    BarChart: (props: any) => <div data-testid="BarChart">{props.children}</div>,
    Bar: (props: any) => <div data-testid="Bar" />,
    PieChart: (props: any) => <div data-testid="PieChart">{props.children}</div>,
    Pie: (props: any) => <div data-testid="Pie" />,
    Cell: (props: any) => <div data-testid="Cell" />,
    XAxis: (props: any) => <div data-testid="XAxis" />,
    YAxis: (props: any) => <div data-testid="YAxis" />,
    CartesianGrid: (props: any) => <div data-testid="CartesianGrid" />,
    Tooltip: (props: any) => <div data-testid="Tooltip" />,
    Legend: (props: any) => <div data-testid="Legend" />,
    ResponsiveContainer: (props: any) => <div data-testid="ResponsiveContainer">{props.children}</div>,
  };
});

// ----------------------
// Mock child components
// ----------------------
jest.mock('@/components/Headers', () => () => <div>Headers Component</div>);
jest.mock('@/components/TicketsResolved', () => () => <div>TicketsResolved Component</div>);
jest.mock('@/components/PendingTickets', () => () => <div>PendingTickets Component</div>);
jest.mock('@/components/PendingApprovals', () => () => <div>PendingApprovals Component</div>);
jest.mock('@/components/ChangeResultByCategory', () => () => <div>ChangeResultsByCategory Component</div>);
jest.mock('@/components/AverageIncidentResponseTime', () => () => <div>AverageIncidentResponseTime Component</div>);
jest.mock('@/components/AverageChangeResponseTime', () => () => <div>AverageChangeResponseTime Component</div>);
jest.mock('@/components/ChangeRequestByStatusChart', () => () => <div>ChangeRequestByStatusChart Component</div>);
jest.mock('@/components/AwaitingApproval', () => () => <div>AwaitingApproval Component</div>);
jest.mock('@/components/IncidentTicketsTable', () => () => <div>IncidentTicketsTable Component</div>);
jest.mock('@/components/TicketResolutionChart', () => () => <div>TicketResolutionChart Component</div>);
jest.mock('@/components/RequestTickets', () => () => <div>RequestTickets Component</div>);

describe('Dashboard Component', () => {
  it('renders the header', async () => {
    render(<Dashboard />);
    expect(await screen.findByText(/Headers Component/i)).toBeInTheDocument();
  });

  it('renders metric cards with correct values', async () => {
    render(<Dashboard />);

    // Wait for each metric card to render
    expect(await screen.findByText(dashboardData.metrics.totalUsers.value.toLocaleString())).toBeInTheDocument();
    expect(await screen.findByText(dashboardData.metrics.totalOpenTickets.value.toLocaleString())).toBeInTheDocument();
    expect(await screen.findByText(dashboardData.metrics.totalClosedTickets.value.toLocaleString())).toBeInTheDocument();
    expect(await screen.findByText(dashboardData.metrics.totalDueTickets.value.toLocaleString())).toBeInTheDocument();
  });

  it('renders child components', async () => {
    render(<Dashboard />);
    expect(await screen.findByText(/TicketsResolved Component/i)).toBeInTheDocument();
    expect(await screen.findByText(/PendingTickets Component/i)).toBeInTheDocument();
    expect(await screen.findByText(/PendingApprovals Component/i)).toBeInTheDocument();
    expect(await screen.findByText(/ChangeResultsByCategory Component/i)).toBeInTheDocument();
  });

  it('renders the dashboard title', async () => {
    render(<Dashboard />);
    expect(await screen.findByText(/Home/i)).toBeInTheDocument();
  });
});