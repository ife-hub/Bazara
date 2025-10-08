import React from 'react';
import { render, screen } from '@testing-library/react';
import ChangeResultsByCategory from '@/components/ChangeResultByCategory';
import dashboardData from '@/app/data/dashboard';

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  MoreVertical: () => <span>MoreVerticalIcon</span>,
}));

// Mock Next.js Image
jest.mock('next/image', () => (props: any) => <img {...props} alt={props.alt} />);

describe('ChangeResultsByCategory Component', () => {
  let container: HTMLElement;

  beforeEach(() => {
    const rendered = render(<ChangeResultsByCategory />);
    container = rendered.container;
  });

  it('renders the main title', () => {
    expect(screen.getByText(/Change Result by Category/i)).toBeInTheDocument();
  });

  it('renders the total raised value', () => {
    const totalText = `$${dashboardData.changeByCategory.total.toLocaleString()}`;
    expect(screen.getByText(totalText)).toBeInTheDocument();
  });

  it('renders the category legend', () => {
    dashboardData.changeByCategory.categories.forEach((cat) => {
      expect(screen.getByText(cat.name)).toBeInTheDocument();
    });
  });

  it('renders the correct number of colored dots', () => {
    const dots = container.querySelectorAll('div.w-3.h-3.rounded-full');
    expect(dots.length).toBe(dashboardData.changeByCategory.categories.length);
  });

  it('renders the MoreVertical icon button', () => {
    expect(screen.getByText(/MoreVerticalIcon/i)).toBeInTheDocument();
  });

  it('renders the SVG with 4 circles', () => {
    const circles = container.querySelectorAll('svg circle');
    expect(circles.length).toBe(4);
  });
});