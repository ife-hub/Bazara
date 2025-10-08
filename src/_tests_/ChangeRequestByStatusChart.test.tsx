import React from 'react';
import { render, screen } from '@testing-library/react';
import ChangeRequestByStatusChart from '@/components/ChangeRequestByStatusChart';
import dashboardData from '@/app/data/dashboard';

// Mock Recharts components
jest.mock('recharts', () => {
  const OriginalRecharts = jest.requireActual('recharts');
  return {
    ...OriginalRecharts,
    ResponsiveContainer: ({ children }: any) => <div>{children}</div>,
    LineChart: ({ children }: any) => <div>{children}</div>,
    Line: ({ children }: any) => <div>{children}</div>,
    XAxis: () => <div />,
    YAxis: () => <div />,
    CartesianGrid: () => <div />,
    Tooltip: () => <div />,
  };
});

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  Calendar: () => <span>CalendarIcon</span>,
}));

// Mock Next.js Image
jest.mock('next/image', () => (props: any) => <img {...props} alt={props.alt} />);

describe('ChangeRequestByStatusChart Component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    const rendered = render(<ChangeRequestByStatusChart />);
    container = rendered.container;
  });

  it('renders the main title', () => {
    expect(screen.getByText(/Change Request by Status/i)).toBeInTheDocument();
  });

  it('renders the legend labels', () => {
    const labels = ['Emergency', 'Normal', 'Standard'];
    labels.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it('renders the date button with Calendar icon', () => {
    expect(screen.getByText(/24\/04\/2025/i)).toBeInTheDocument();
    expect(screen.getByText(/CalendarIcon/i)).toBeInTheDocument();
  });

  it('renders the correct number of color boxes', () => {
    const colorBoxes = container.querySelectorAll('div.w-3.h-3.rounded-full');
    expect(colorBoxes.length).toBe(3); // Emergency, Normal, Standard
  });
});