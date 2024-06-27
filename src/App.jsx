import Dashboard from "./pages/Dashboard.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Review from "./pages/Review.jsx";
import Reservation from "./pages/Reservation.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/review" element={<Review />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
