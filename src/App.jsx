import Dashboard from "./pages/Dashboard.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Review from "./pages/Review.jsx";
import Reservation from "./pages/Reservation.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/review" element={<Review />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
