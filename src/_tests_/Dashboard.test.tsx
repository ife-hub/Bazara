// __tests__/Dashboard.test.tsx
import React, { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '@/app/dashboard/page';
import dashboardData from '@/app/data/dashboard';

// ----------------------
// Mock Next.js Image
// ----------------------
jest.mock('next/image', () => {
  const NextImage = ({
    src,
    alt,
    width,
    height,
  }: {
    src: string;
    alt?: string;
    width?: number | string;
    height?: number | string;
  }) => <img src={src} alt={alt} width={width} height={height} />;
  NextImage.displayName = 'NextImage';
  return NextImage;
});

// ----------------------
// Mock Recharts components
// ----------------------
jest.mock('recharts', () => {
  const createMock = (name: string) => {
    const Comp: React.FC<{ children?: ReactNode }> = ({ children }) => (
      <div data-testid={name}>{children}</div>
    );
    Comp.displayName = name;
    return Comp;
  };

  return {
    LineChart: createMock('LineChart'),
    Line: createMock('Line'),
    BarChart: createMock('BarChart'),
    Bar: createMock('Bar'),
    PieChart: createMock('PieChart'),
    Pie: createMock('Pie'),
    Cell: createMock('Cell'),
    XAxis: createMock('XAxis'),
    YAxis: createMock('YAxis'),
    CartesianGrid: createMock('CartesianGrid'),
    Tooltip: createMock('Tooltip'),
    Legend: createMock('Legend'),
    ResponsiveContainer: createMock('ResponsiveContainer'),
  };
});

// ----------------------
// Mock child components (inline to avoid hoisting issues)
// ----------------------
jest.mock('@/components/Headers', () => {
  const Comp = () => <div>Headers Component</div>;
  Comp.displayName = 'Headers';
  return Comp;
});

jest.mock('@/components/TicketsResolved', () => {
  const Comp = () => <div>TicketsResolved Component</div>;
  Comp.displayName = 'TicketsResolved';
  return Comp;
});

jest.mock('@/components/PendingTickets', () => {
  const Comp = () => <div>PendingTickets Component</div>;
  Comp.displayName = 'PendingTickets';
  return Comp;
});

jest.mock('@/components/PendingApprovals', () => {
  const Comp = () => <div>PendingApprovals Component</div>;
  Comp.displayName = 'PendingApprovals';
  return Comp;
});

jest.mock('@/components/ChangeResultByCategory', () => {
  const Comp = () => <div>ChangeResultsByCategory Component</div>;
  Comp.displayName = 'ChangeResultsByCategory';
  return Comp;
});

jest.mock('@/components/AverageIncidentResponseTime', () => {
  const Comp = () => <div>AverageIncidentResponseTime Component</div>;
  Comp.displayName = 'AverageIncidentResponseTime';
  return Comp;
});

jest.mock('@/components/AverageChangeResponseTime', () => {
  const Comp = () => <div>AverageChangeResponseTime Component</div>;
  Comp.displayName = 'AverageChangeResponseTime';
  return Comp;
});

jest.mock('@/components/ChangeRequestByStatusChart', () => {
  const Comp = () => <div>ChangeRequestByStatusChart Component</div>;
  Comp.displayName = 'ChangeRequestByStatusChart';
  return Comp;
});

jest.mock('@/components/AwaitingApproval', () => {
  const Comp = () => <div>AwaitingApproval Component</div>;
  Comp.displayName = 'AwaitingApproval';
  return Comp;
});

jest.mock('@/components/IncidentTicketsTable', () => {
  const Comp = () => <div>IncidentTicketsTable Component</div>;
  Comp.displayName = 'IncidentTicketsTable';
  return Comp;
});

jest.mock('@/components/TicketResolutionChart', () => {
  const Comp = () => <div>TicketResolutionChart Component</div>;
  Comp.displayName = 'TicketResolutionChart';
  return Comp;
});

jest.mock('@/components/RequestTickets', () => {
  const Comp = () => <div>RequestTickets Component</div>;
  Comp.displayName = 'RequestTickets';
  return Comp;
});

// ----------------------
// Tests
// ----------------------
describe('Dashboard Component', () => {
  it('renders the header', async () => {
    render(<Dashboard />);
    expect(await screen.findByText(/Headers Component/i)).toBeInTheDocument();
  });

  it('renders metric cards with correct values', async () => {
    render(<Dashboard />);
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