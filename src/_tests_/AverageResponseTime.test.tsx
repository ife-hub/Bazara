import { render, screen } from '@testing-library/react';
import AverageChangeResponseTime from '@/components/AverageChangeResponseTime';
import dashboardData from '@/app/data/dashboard';
import React from 'react';

// Mock Recharts ResponsiveContainer to avoid rendering issues in Jest
jest.mock('recharts', () => {
  const OriginalRecharts = jest.requireActual('recharts');
  return {
    ...OriginalRecharts,
    ResponsiveContainer: ({ children }: {children: React.ReactNode}) => <div data-testid="responsive-container">{children}</div>,
  };
});

describe('AverageChangeResponseTime Component', () => {
  const mockData = [
    { value: 10 },
    { value: 20 },
    { value: 15 },
    { value: 25 },
  ];

  it('renders the component title', () => {
    render(<AverageChangeResponseTime data={mockData} />);
    expect(screen.getByText(/Average Change Response Time/i)).toBeInTheDocument();
  });

  it('renders the average minutes value', () => {
    render(<AverageChangeResponseTime data={mockData} />);
    expect(screen.getByText(new RegExp(`${dashboardData.avgChangeResponse.minutes}`, 'i'))).toBeInTheDocument();
  });

  it('renders the percentage change', () => {
    render(<AverageChangeResponseTime data={mockData} />);
    const changeText = `+${Math.abs(dashboardData.avgChangeResponse.changePercent)}% Improving from this week`;
    expect(screen.getByText(changeText)).toBeInTheDocument();
  });

  it('renders the sparkline chart', () => {
    render(<AverageChangeResponseTime data={mockData} />);
    expect(screen.getByTestId('responsive-container')).toBeInTheDocument();
  });
});