// __tests__/RequestTickets.test.tsx
import { render, screen } from '@testing-library/react';
import RequestTickets from '@/components/RequestTickets';
import '@testing-library/jest-dom';

// Mock Next.js Image component
jest.mock('next/image', () => ({ src, alt, width, height }: any) => {
  return <img src={src} alt={alt} width={width} height={height} />;
});

describe('RequestTickets Component', () => {
  it('renders the main heading', () => {
    render(<RequestTickets />);
    const heading = screen.getByText('Request Tickets');
    expect(heading).toBeInTheDocument();
  });

  it('renders the table headers', () => {
    render(<RequestTickets />);
    expect(screen.getByText('Form Title')).toBeInTheDocument();
    expect(screen.getByText('Data Created')).toBeInTheDocument();
    expect(screen.getByText('Owner')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
  });

  it('renders the empty state message', () => {
    render(<RequestTickets />);
    expect(screen.getByText('No Item found')).toBeInTheDocument();
    expect(screen.getByText('No item found in this Request Form...')).toBeInTheDocument();
  });
});
