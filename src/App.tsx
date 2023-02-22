import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './routes/Homepage.route';
import Layout from './routes/Layout.route';
import ReservationsPage from './routes/ReservationsPage.route';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="/reservations" element={<ReservationsPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
