import { useNavigate } from "react-router-dom";
import TransparentButton from "./TransparentButton";

function Navbar() {
  const navigate = useNavigate();
  const handleClick = (title) => {
    if (title === "Home") {
      navigate("/");
    } else if (title === "Review") {
      navigate("/review");
    } else if (title === "Reservation") {
      navigate("/reservation");
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between bg-secondary fixed w-full drop-shadow-2xl z-10">
        <div className="flex items-center justify-start md:justify-center px-10 py-5">
          <h1 className="font-semibold text-2xl text-white">SEA Salon</h1>
        </div>
        <div className="flex items-center justify-end md:justify-center w-full md:w-auto px-5 py-2 md:py-5">
          <TransparentButton title="Home" handleClick={handleClick} />
          <TransparentButton title="Review" handleClick={handleClick} />
          <TransparentButton title="Reservation" handleClick={handleClick} />
        </div>
      </div>
    </>
  );
}

export default Navbar;
