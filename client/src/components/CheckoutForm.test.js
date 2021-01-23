import React from "react";

import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);

    screen.getByText(/checkout form/i);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const fName = screen.getByLabelText(/first name:/i);
    const lName = screen.getByLabelText(/last name:/i);
    const address = screen.getByLabelText(/address:/i);
    const city = screen.getByLabelText(/city:/i);
    const state = screen.getByLabelText(/state:/i);
    const zip = screen.getByLabelText(/zip:/i);
    const submit = screen.getByRole(/button/i);

    userEvent.type(fName, 'matt');
    userEvent.type(lName, 'kilroy');
    userEvent.type(address, '123 fake street');
    userEvent.type(city, 'springfield');
    userEvent.type(state, 'kansas');
    userEvent.type(zip, '77483');
    userEvent.click(submit);

    const message = screen.getByTestId(/successmessage/i);

    expect(message).toBeTruthy();



});
