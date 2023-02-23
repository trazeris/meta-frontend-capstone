import { fireEvent, render, screen } from '@testing-library/react';
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
    fireEvent.change(dateInput, { target: { value: '2023-05-12' } });

    expect(dispatchSelectedDate).toHaveBeenCalled();
  });
});
