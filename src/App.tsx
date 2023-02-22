import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './routes/Homepage.route';
import Layout from './routes/Layout.route';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          {/* <Route path="/booking" element={<BookingPage />}></Route> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
