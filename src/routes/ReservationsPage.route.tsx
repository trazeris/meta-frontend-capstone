import { Dispatch } from 'react';
import { FieldValues } from 'react-hook-form';
import ReservationForm from '../components/ReservationForm/ReservationForm';

interface ReservationsPageProps {
  availableTimes: string[];
  dispatchSelectedDate: Dispatch<string>;
  handleFormSubmit: (data: FieldValues) => void;
}

function ReservationsPage({
  availableTimes,
  dispatchSelectedDate,
  handleFormSubmit,
}: ReservationsPageProps) {
  return (
    <>
      <ReservationForm
        availableTimes={availableTimes}
        dispatchSelectedDate={dispatchSelectedDate}
        handleFormSubmit={handleFormSubmit}
      />
    </>
  );
}

export default ReservationsPage;
