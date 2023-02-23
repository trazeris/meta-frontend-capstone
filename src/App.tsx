import { Reducer, useEffect, useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './routes/Homepage.route';
import Layout from './routes/Layout.route';
import ReservationsPage from './routes/ReservationsPage.route';
import { fetchAPI } from './utils/api';

export interface UpdateAvailableTimesAction {
  type: string;
  payload: string | string[];
}

export interface TimesState {
  availableTimes: string[];
}

export const updateTimes: Reducer<TimesState, UpdateAvailableTimesAction> = (
  state,
  action
) => {
  switch (action.type) {
    case 'UPDATE_FOR_DATE':
      return { availableTimes: fetchAPI(new Date(action.payload as string)) };
    case 'INIT':
      return {
        availableTimes: action.payload as string[],
      };
    default:
      throw new Error();
  }
};

const initialState: TimesState = {
  availableTimes: ['17:00', '18:00', '19:00'],
};

function App() {
  const [timesState, dispatch] = useReducer(updateTimes, initialState);

  const dispatchSelectedDate = (newDate: string) => {
    dispatch({ type: 'UPDATE_FOR_DATE', payload: newDate });
  };

  useEffect(() => {
    const availableTimesInit = fetchAPI(new Date());
    dispatch({ type: 'INIT', payload: availableTimesInit });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route
            path="/reservations"
            element={
              <ReservationsPage
                availableTimes={timesState.availableTimes}
                dispatchSelectedDate={dispatchSelectedDate}
              />
            }></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
