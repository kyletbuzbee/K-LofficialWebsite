import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SchedulePickupPage from "./schedule-pickup";

jest.mock("next/router");

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ message: "Success" }),
  }),
) as jest.Mock;

describe("SchedulePickupPage", () => {
  it("should submit the form", async () => {
    render(<SchedulePickupPage />);

    // Step 1
    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Phone"), {
      target: { value: "123-456-7890" },
    });
    fireEvent.click(screen.getByText("Next"));

    // Step 2
    fireEvent.change(screen.getByLabelText("Address"), {
      target: { value: "123 Main St" },
    });
    fireEvent.change(screen.getByLabelText("City"), {
      target: { value: "Anytown" },
    });
    fireEvent.change(screen.getByLabelText("State"), {
      target: { value: "CA" },
    });
    fireEvent.change(screen.getByLabelText("Zip Code"), {
      target: { value: "12345" },
    });
    fireEvent.click(screen.getByText("Next"));

    // Step 3
    fireEvent.change(screen.getByLabelText("Desired Pickup Date"), {
      target: { value: "2025-12-31" },
    });
    fireEvent.change(screen.getByLabelText("Materials for Pickup"), {
      target: { value: "Copper, Aluminum" },
    });
    fireEvent.click(screen.getByText("Finish"));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith("/api/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "John Doe",
          email: "john.doe@example.com",
          phone: "123-456-7890",
          address: "123 Main St",
          city: "Anytown",
          state: "CA",
          zip: "12345",
          pickupDate: "2025-12-31",
          materials: "Copper, Aluminum",
          honeypot: "",
        }),
      });
    });
  });
});
