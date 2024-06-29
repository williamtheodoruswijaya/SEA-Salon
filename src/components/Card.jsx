import { useLocation } from "react-router-dom";

function Card(props) {
  const location = useLocation();

  const pathMapping = {
    "/admin": "Add Services",
    "/add-branch": "Add Branch",
    "/login": "Logout",
  };
  const isActive = pathMapping[location.pathname] === props.title;
  const borderClass =
    props.title === "Logout"
      ? "border-4 border-red-500 text-white hover:bg-red-600 transition duration-300 ease-in-out"
      : "";
  const activeClass = isActive
    ? "bg-blue-500 text-white"
    : "bg-primary text-background";

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      ></link>
      <button
        className={`flex items-center rounded-3xl drop-shadow-2xl hover:bg-blue-500 transition duration-300 ease-in-out ${activeClass} ${borderClass} py-5 min-w-full my-3 px-10 overflow-hidden focus:bg-blue-500 focus:outline-none hover:`}
        onClick={() => props.handleClick(props.title)}
      >
        <div className="items-center justify-start font-medium mx-7 my-5 ml-3 text-lg">
          {props.title}
        </div>
      </button>
    </>
  );
}

export default Card;
