import { useLocation } from "react-router-dom";
import React from "react";

function TransparentButton(props) {
  const location = useLocation();
  const currentPath = location.pathname;
  const pathMapping = {
    "/": "Home",
    "/review": "Review",
    "/reservation": "Reservation",
  };

  const isActive = pathMapping[currentPath] === props.title;
  const ActiveClass = isActive ? "text-accent" : "text-white";

  return (
    <button
      className={`mx-5 font-semibold text-1xl hover:text-accent transition duration-300 ease-in-out ${ActiveClass}`}
      onClick={() => props.handleClick(props.title)}
    >
      <div>{props.title}</div>
    </button>
  );
}

export default TransparentButton;
