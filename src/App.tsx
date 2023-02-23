import { useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './routes/Homepage.route';
import Layout from './routes/Layout.route';
import ReservationsPage from './routes/ReservationsPage.route';

export interface UpdateAvailableTimesAction {
  type: string;
  payload: string;
}

export function updateTimes(
  state: string[],
  action: UpdateAvailableTimesAction
) {
  switch (action.type) {
    case 'UPDATE_FOR_DATE':
      return ['18:00', '19:00', '22:00'];
    default:
      throw new Error();
  }
}

const initialState = ['17:00', '18:00', '19:00'];

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initialState);
  const dispatchSelectedDate = (newDate: string) => {
    dispatch({ type: 'UPDATE_FOR_DATE', payload: newDate });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route
            path="/reservations"
            element={
              <ReservationsPage
                availableTimes={availableTimes}
                dispatchSelectedDate={dispatchSelectedDate}
              />
            }></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
