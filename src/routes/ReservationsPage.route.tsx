import { Dispatch } from 'react';
import ReservationForm from '../components/ReservationForm/ReservationForm';

interface ReservationsPageProps {
  availableTimes: string[];
  dispatchSelectedDate: Dispatch<string>;
}

function ReservationsPage({
  availableTimes,
  dispatchSelectedDate,
}: ReservationsPageProps) {
  return (
    <>
      <ReservationForm
        availableTimes={availableTimes}
        dispatchSelectedDate={dispatchSelectedDate}
      />
    </>
  );
}

export default ReservationsPage;
