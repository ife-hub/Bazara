// PendingTickets.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import PendingTickets from "@/components/PendingTickets";
import dashboardData from "@/app/data/dashboard";

// Mock next/image to prevent errors in tests
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ alt }: { alt: string }) => <img alt={alt} />,
}));

describe("PendingTickets Component", () => {
  it("renders the component with the correct heading", () => {
    render(<PendingTickets />);
    const heading = screen.getByText(/Pending Tickets - Team/i);
    expect(heading).toBeInTheDocument();
  });

  it("renders the correct pending tickets count from dashboardData", () => {
    render(<PendingTickets />);
    const count = screen.getByText(dashboardData.pendingTickets.team.toString());
    expect(count).toBeInTheDocument();
  });

  it("renders the 'Pending Tickets' label", () => {
    render(<PendingTickets />);
    // Use exact match to avoid matching the heading
    const label = screen.getByText(/^Pending Tickets$/i);
    expect(label).toBeInTheDocument();
  });

  it("renders the MoreVertical icon button", () => {
    render(<PendingTickets />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("renders the Image component", () => {
    render(<PendingTickets />);
    const image = screen.getByAltText("Icon");
    expect(image).toBeInTheDocument();
  });
});