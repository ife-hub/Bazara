import { render, screen } from '@testing-library/react';
import ChangeRequestByStatus from '@/components/ChangeRequestByStatus';
import dashboardData from '@/app/data/dashboard';
import React from 'react';

// Mock Recharts components
jest.mock('recharts', () => {
  const OriginalRecharts = jest.requireActual('recharts');
  return {
    ...OriginalRecharts,
    ResponsiveContainer: ({ children }: any) => <div>{children}</div>,
    BarChart: ({ children }: any) => <div>{children}</div>,
    Bar: ({ children }: any) => <div>{children}</div>,
    Cell: ({ children }: any) => <div>{children}</div>,
    XAxis: () => <div />,
    YAxis: () => <div />,
  };
});

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  MoreVertical: () => <span>MoreVerticalIcon</span>,
}));

describe('ChangeRequestByStatus Component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    const rendered = render(<ChangeRequestByStatus />);
    container = rendered.container;
  });

  it('renders the component title', () => {
    expect(screen.getByText(/Change Request By Status/i)).toBeInTheDocument();
  });

  it('renders legend/status labels', () => {
    dashboardData.changeByStatusSummary.forEach((item) => {
      expect(screen.getByText(item.status)).toBeInTheDocument();
    });
  });

  it('renders the correct number of legend color boxes', () => {
    const colorBoxes = container.querySelectorAll('div.w-3.h-3.rounded'); 
    expect(colorBoxes.length).toBe(dashboardData.changeByStatusSummary.length);
  });

  it('renders the MoreVertical button', () => {
    expect(screen.getByText(/MoreVerticalIcon/i)).toBeInTheDocument();
  });
});
