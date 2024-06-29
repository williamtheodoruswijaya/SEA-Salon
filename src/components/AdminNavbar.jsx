import { useNavigate } from "react-router-dom";
import Card from "./Card";

function AdminNavbar() {
  const navigate = useNavigate();
  const handleClick = (title) => {
    if (title === "Add Services") {
      navigate("/admin");
    } else if (title === "Add Branch") {
      navigate("/add-branch");
    } else if (title === "Logout") {
      navigate("/login");
    }
  };
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      ></link>
      <nav className=" bg-secondary drop-shadow-2xl min-h-screen pt-10 top-0 left-0 fixed p-5 w-fill flex flex-col">
        <div className="flex flex-col text-center ">
          <div className="text-3xl font-semibold mb-10 text-white">Admin</div>
          <Card title="Add Services" handleClick={handleClick} />
          <Card title="Add Branch" handleClick={handleClick} />
          <Card title="Logout" handleClick={handleClick} />
        </div>
      </nav>
    </>
  );
}

export default AdminNavbar;
