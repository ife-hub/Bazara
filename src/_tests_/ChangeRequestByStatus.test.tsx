import React from 'react';
import { render, screen } from '@testing-library/react';
import ChangeRequestByStatus from '@/components/ChangeRequestByStatus';
import dashboardData from '@/app/data/dashboard';

// ----------------------
// Mock Recharts components
// ----------------------
jest.mock('recharts', () => {
  const React = require('react');

  const createMock = (name: string) => {
    const Comp: React.FC<any> = ({ children }) => <div data-testid={name}>{children}</div>;
    Comp.displayName = name;
    return Comp;
  };

  return {
    ResponsiveContainer: createMock('ResponsiveContainer'),
    BarChart: createMock('BarChart'),
    Bar: createMock('Bar'),
    Cell: createMock('Cell'),
    XAxis: createMock('XAxis'),
    YAxis: createMock('YAxis'),
  };
});

// ----------------------
// Mock lucide-react icons
// ----------------------
jest.mock('lucide-react', () => ({
  MoreVertical: () => <span>MoreVerticalIcon</span>,
}));

// ----------------------
// Tests
// ----------------------
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