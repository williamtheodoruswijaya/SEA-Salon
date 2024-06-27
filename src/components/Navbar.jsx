import { useNavigate } from "react-router-dom";

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
      <div className="flex bg-secondary fixed w-full drop-shadow-2xl z-10">
        <div>
          <h1 className="font-semibold flex flex-start text-xl px-10 py-5 text-white">
            SEA Salon
          </h1>
        </div>
      </div>
    </>
  );
}

export default Navbar;
