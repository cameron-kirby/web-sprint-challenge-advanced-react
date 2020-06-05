import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

// Remember, Arrange, Act, Assert

test("form header renders", () => {
    // Arrange
    const { getByText } = render(<CheckoutForm />);
    // Act
    const header = getByText(/checkout form/i);
    // Assert
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    // Arrange
    const { getByLabelText, getByRole, getByTestId } = render(<CheckoutForm />);
    // Act
    const firstNameInput = getByLabelText(/first name/i);
    const lastNameInput = getByLabelText(/last name/i);
    const addressInput = getByLabelText(/address/i);
    const cityInput = getByLabelText(/city/i);
    const stateInput = getByLabelText(/state/i);
    const zipcodeInput = getByLabelText(/zip/i);
    const submitButton = getByRole(/button/i);

    fireEvent.change(firstNameInput, {
        target: { name: "firstName", value: "John" }
    });
    fireEvent.change(lastNameInput, {
        target: { name: "lastName", value: "Doe" }
    });
    fireEvent.change(addressInput, {
        target: { name: "address", value: "1234 N Sheridan Rd" }
    });
    fireEvent.change(cityInput, {
        target: { name: "city", value: "Chicago" }
    });
    fireEvent.change(stateInput, {
        target: { name: "state", value: "Illinois" }
    });
    fireEvent.change(zipcodeInput, {
        target: { name: "zip", value: "60640" }
    });

    fireEvent.click(submitButton);
    fireEvent.click(submitButton);

    const successMessage = getByTestId('successMessage')
    // Assert
    expect(successMessage).toBeInTheDocument();
});
