import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ContactForm } from "../components/ContactForm/ContactForm";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ message: "Success" }),
  }),
) as jest.Mock;

describe("ContactForm", () => {
  it("should submit the form", async () => {
    render(<ContactForm />);

    // Step 1
    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.click(screen.getByText("Next"));

    // Step 2
    fireEvent.change(screen.getByLabelText("Message"), {
      target: { value: "This is a test message" },
    });
    fireEvent.click(screen.getByText("Finish"));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "John Doe",
          email: "john.doe@example.com",
          message: "This is a test message",
          honeypot: "",
        }),
      });
    });
  });
});
