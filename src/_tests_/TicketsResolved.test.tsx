// __tests__/TicketsResolved.test.tsx
import { render, screen } from '@testing-library/react';
import TicketsResolved from '@/components/TicketsResolved';
import '@testing-library/jest-dom';
import dashboardData from '@/app/data/dashboard';

// Mock Next.js Image component
jest.mock('next/image', () => ({ src, alt, width, height }: any) => {
  return <img src={src} alt={alt} width={width} height={height} />;
});

// Mock lucide-react icons
jest.mock('lucide-react', () => {
  return {
    MoreVertical: (props: any) => <svg data-testid="more-vertical" {...props} />
  };
});

describe('TicketsResolved Component', () => {
  it('renders the main heading', () => {
    render(<TicketsResolved />);
    expect(screen.getByText('Tickets Resolved by Agent - Team')).toBeInTheDocument();
  });

  it('renders the MoreVertical button', () => {
    render(<TicketsResolved />);
    expect(screen.getByTestId('more-vertical')).toBeInTheDocument();
  });

  it('renders all agents with correct progress widths', () => {
    render(<TicketsResolved />);

    dashboardData.ticketsByAgent.forEach((agent) => {
      // Agent name
      expect(screen.getByText(agent.agent)).toBeInTheDocument();

      // Progress bar
      const progressDiv = screen.getByText(agent.agent).nextSibling?.firstChild as HTMLElement;
      const expectedWidth = `${(agent.count / 500) * 100}%`;
      expect(progressDiv).toHaveStyle(`width: ${expectedWidth}`);
    });
  });
});