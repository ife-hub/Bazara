// PendingApprovals.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import PendingApprovals from "@/components/PendingApprovals";
import dashboardData from "@/app/data/dashboard";

// Mock next/image to prevent errors in tests
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ alt }: { alt: string }) => <img alt={alt} />,
}));

describe("PendingApprovals Component", () => {
  it("renders the component with the correct heading", () => {
    render(<PendingApprovals />);
    const heading = screen.getByText(/Pending Approval - Me/i);
    expect(heading).toBeInTheDocument();
  });

  it("renders the correct pending approval count from dashboardData", () => {
    render(<PendingApprovals />);
    const count = screen.getByText(dashboardData.pendingApprovals.me.toString());
    expect(count).toBeInTheDocument();
  });

  it("renders the 'Pending Approvals' label", () => {
    render(<PendingApprovals />);
    const label = screen.getByText(/Pending Approvals/i);
    expect(label).toBeInTheDocument();
  });

  it("renders the MoreVertical icon button", () => {
    render(<PendingApprovals />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("renders the Image component", () => {
    render(<PendingApprovals />);
    const image = screen.getByAltText("Icon");
    expect(image).toBeInTheDocument();
  });
});
