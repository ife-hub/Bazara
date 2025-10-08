// src/_tests_/IncidentTicketsTable.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import IncidentTicketsTable from '@/components/IncidentTicketsTable';
import dashboardData from '@/app/data/dashboard';

describe('IncidentTicketsTable Component', () => {
  beforeEach(() => {
    render(<IncidentTicketsTable />);
  });

  it('renders the table headers', () => {
    const headers = [
      'Title',
      'ID',
      'Category',
      'Priority',
      'Created By',
      'Created On',
      'Assigned To',
      'Status',
    ];
    headers.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });

  it('renders the search input', () => {
    const searchInput = screen.getByPlaceholderText('Search by user name');
    expect(searchInput).toBeInTheDocument();
    fireEvent.change(searchInput, { target: { value: 'John' } });
    expect(searchInput).toHaveValue('John');
  });

  it('renders the filter and export buttons', () => {
    // Use getAllByText and pick the first match (the button)
    const calendarBtn = screen.getAllByText('24/04/2025')[0];
    const moreFiltersBtn = screen.getByText('More Filters');
    const exportBtn = screen.getByText('Export');

    expect(calendarBtn).toBeInTheDocument();
    expect(moreFiltersBtn).toBeInTheDocument();
    expect(exportBtn).toBeInTheDocument();
  });

  it('renders table rows based on dashboardData', () => {
    dashboardData.incidentTickets.forEach((ticket) => {
  expect(screen.getAllByText(ticket.title)[0]).toBeInTheDocument();
  expect(screen.getAllByText(ticket.id)[0]).toBeInTheDocument();
  expect(screen.getAllByText(ticket.category)[0]).toBeInTheDocument();
  expect(screen.getAllByText(ticket.priority)[0]).toBeInTheDocument();
  expect(screen.getAllByText(ticket.createdBy)[0]).toBeInTheDocument();
  expect(screen.getAllByText(ticket.createdOn)[0]).toBeInTheDocument();
  expect(screen.getAllByText(ticket.assignedTo)[0]).toBeInTheDocument();
  expect(screen.getAllByText(ticket.status)[0]).toBeInTheDocument();
});

  });

  it('renders MoreVertical buttons in each row', () => {
    const rowButtons = screen.getAllByRole('button', { name: '' }); // empty name buttons are MoreVertical icons
    expect(rowButtons.length).toBeGreaterThanOrEqual(dashboardData.incidentTickets.length);
  });
});
