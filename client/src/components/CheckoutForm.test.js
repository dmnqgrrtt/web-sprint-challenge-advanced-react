import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);
    const header = getByText(/checkout form/i);
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const { getByLabelText, getByTestId, getByText } = render(<CheckoutForm />);

    fireEvent.change(getByLabelText(/first name:/i), { target: { value: "Dominique" } });
    fireEvent.change(getByLabelText(/last name:/i), { target: { value: "Garrett" } });
    fireEvent.change(getByLabelText(/address:/i), { target: { value: "123 Lambda Way" } });
    fireEvent.change(getByLabelText(/city:/i), { target: { value: "San Francisco" } });
    fireEvent.change(getByLabelText(/state:/i), { target: { value: "California" } });
    fireEvent.change(getByLabelText(/zip:/i), { target: { value: "70896" } });

    fireEvent.click(getByTestId("checkout"));

    expect(getByTestId("successMessage")).toBeInTheDocument();
    expect(getByText(/dominique/i)).toBeInTheDocument();
    expect(getByText(/garrett/i)).toBeInTheDocument();
    expect(getByText(/123 lambda way/i)).toBeInTheDocument();
    expect(getByText(/san francisco/i)).toBeInTheDocument();
    expect(getByText(/california/i)).toBeInTheDocument();
    expect(getByText(/70896/i)).toBeInTheDocument();
    
});
