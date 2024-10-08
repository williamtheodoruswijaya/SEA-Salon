import Dashboard from "./pages/Dashboard.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Review from "./pages/Review.jsx";
import Reservation from "./pages/Reservation.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Admin from "./pages/Admin.jsx";
import AddBranch from "./pages/AddBranch.jsx";

function App() {
  return (
    <>
      <Router basename="/SEA-Salon">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/review" element={<Review />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/add-branch" element={<AddBranch />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
