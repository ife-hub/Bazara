import { render, screen } from '@testing-library/react';
import AverageIncidentResponseTime from '@/components/AverageIncidentResponseTime';
import dashboardData from '@/app/data/dashboard';
import React from 'react';

// Mock Recharts ResponsiveContainer to avoid jsdom errors
jest.mock('recharts', () => {
  const OriginalRecharts = jest.requireActual('recharts');
  return {
    ...OriginalRecharts,
    ResponsiveContainer: ({ children }: {children: React.ReactNode}) => <div data-testid="responsive-container">{children}</div>,
  };
});

describe('AverageIncidentResponseTime Component', () => {
  const mockData = [
    { value: 5 },
    { value: 8 },
    { value: 6 },
    { value: 10 },
  ];

  it('renders the component title', () => {
    render(<AverageIncidentResponseTime data={mockData} />);
    expect(screen.getByText(/Average Incident Response Time/i)).toBeInTheDocument();
  });

  it('renders the average hours value', () => {
    render(<AverageIncidentResponseTime data={mockData} />);
    expect(screen.getByText(new RegExp(`${dashboardData.avgIncidentResponse.hours}`, 'i'))).toBeInTheDocument();
  });

  it('renders the percentage change', () => {
    render(<AverageIncidentResponseTime data={mockData} />);
    const changeText = `+${dashboardData.avgIncidentResponse.changePercent}% Improving from this week`;
    expect(screen.getByText(changeText)).toBeInTheDocument();
  });

  it('renders the sparkline chart', () => {
    render(<AverageIncidentResponseTime data={mockData} />);
    expect(screen.getByTestId('responsive-container')).toBeInTheDocument();
  });
});