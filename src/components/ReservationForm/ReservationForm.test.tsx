import { act, fireEvent, render, screen } from '@testing-library/react';
import { Dispatch } from 'react';
import { FieldValues } from 'react-hook-form';
import ReservationForm from './ReservationForm';

describe('ReservationForm', () => {
  it('Renders the ReservationForm heading', () => {
    const dispatchSelectedDate: Dispatch<string> = jest.fn();
    const handleFormSubmitMock: Dispatch<FieldValues> = jest.fn();
    render(
      <ReservationForm
        availableTimes={[]}
        dispatchSelectedDate={dispatchSelectedDate}
        handleFormSubmit={handleFormSubmitMock}
      />
    );
    const headingElement = screen.getByText('Reservation');
    expect(headingElement).toBeInTheDocument();
  });

  it('Dispatch action on date change', () => {
    const dispatchSelectedDate: Dispatch<string> = jest.fn();
    const handleFormSubmitMock: Dispatch<FieldValues> = jest.fn();
    render(
      <ReservationForm
        availableTimes={[]}
        dispatchSelectedDate={dispatchSelectedDate}
        handleFormSubmit={handleFormSubmitMock}
      />
    );
    const dateInput = screen.getByLabelText('Choose date*');
    act(() => {
      fireEvent.change(dateInput, { target: { value: '2023-05-12' } });
    });

    expect(dispatchSelectedDate).toHaveBeenCalled();
  });

  it('has built-in validation on fields', () => {
    const dispatchSelectedDate: Dispatch<string> = jest.fn();
    const handleFormSubmitMock: Dispatch<FieldValues> = jest.fn();
    render(
      <ReservationForm
        availableTimes={[]}
        dispatchSelectedDate={dispatchSelectedDate}
        handleFormSubmit={handleFormSubmitMock}
      />
    );
    const nameInput = screen.getByLabelText('Your name*');
    expect(nameInput).toHaveAttribute('type', 'text');
    const emailInput = screen.getByLabelText('Your e-mail*');
    expect(emailInput).toHaveAttribute('type', 'email');
    const dateInput = screen.getByLabelText('Choose date*');
    expect(dateInput).toHaveAttribute('type', 'date');
    const timeInput = screen.getByLabelText('Number of guests*');
    expect(timeInput).toHaveAttribute('type', 'number');
  });

  it('signals invalid email', async () => {
    const dispatchSelectedDate: Dispatch<string> = jest.fn();
    const handleFormSubmitMock: Dispatch<FieldValues> = jest.fn();
    render(
      <ReservationForm
        availableTimes={[]}
        dispatchSelectedDate={dispatchSelectedDate}
        handleFormSubmit={handleFormSubmitMock}
      />
    );
    const emailInput = screen.getByLabelText('Your e-mail*');
    fireEvent.change(emailInput, { target: { value: 'invalidmail' } });
    fireEvent.blur(emailInput);

    const spanAlert = await screen.findByText('Invalid email');
    expect(spanAlert).toBeInTheDocument();
  });

  it('validates valid email', () => {
    const dispatchSelectedDate: Dispatch<string> = jest.fn();
    const handleFormSubmitMock: Dispatch<FieldValues> = jest.fn();
    render(
      <ReservationForm
        availableTimes={[]}
        dispatchSelectedDate={dispatchSelectedDate}
        handleFormSubmit={handleFormSubmitMock}
      />
    );
    const emailInput = screen.getByLabelText('Your e-mail*');
    fireEvent.change(emailInput, { target: { value: 'valid@mail.com' } });
    fireEvent.blur(emailInput);

    const spanAlert = screen.queryByText('Invalid email');
    expect(spanAlert).not.toBeInTheDocument();
  });
});
