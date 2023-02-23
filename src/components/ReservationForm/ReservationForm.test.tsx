import { fireEvent, render, screen } from '@testing-library/react';
import { Dispatch } from 'react';
import ReservationForm from './ReservationForm';

describe('ReservationForm', () => {
  it('Renders the ReservationForm heading', () => {
    const dispatchSelectedDate: Dispatch<string> = jest.fn();
    render(
      <ReservationForm
        availableTimes={[]}
        dispatchSelectedDate={dispatchSelectedDate}
      />
    );
    const headingElement = screen.getByText('Reservation');
    expect(headingElement).toBeInTheDocument();
  });

  it('Dispatch action on date change', () => {
    const dispatchSelectedDate: Dispatch<string> = jest.fn();
    render(
      <ReservationForm
        availableTimes={[]}
        dispatchSelectedDate={dispatchSelectedDate}
      />
    );
    const dateInput = screen.getByLabelText('Choose date*');
    fireEvent.change(dateInput, { target: { value: '2023-05-12' } });

    expect(dispatchSelectedDate).toHaveBeenCalled();
  });
});
