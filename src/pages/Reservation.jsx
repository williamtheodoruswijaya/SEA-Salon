import Navbar from "../components/Navbar";
import reservation from "../assets/reservation.png";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

function Reservation() {
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [service, setService] = useState("");
  const [branch, setBranch] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [services, setServices] = useState([]);
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const MsBranches = collection(db, "MsBranches");
        const snapshot = await getDocs(MsBranches);
        const branches = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBranches(branches);
      } catch (error) {
        console.error("Error getting document:", error);
        return;
      }
    };
    fetchBranches();
  }, []);

  useEffect(() => {
    const fetchServices = async (branch) => {
      try {
        const MsServices = collection(db, "MsServices");
        const branchName = branch;
        console.log(branchName);
        const q = query(MsServices, where("branch", "==", branchName));
        const snapshot = await getDocs(q);
        const servicesId = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setServices(servicesId);
      } catch (error) {
        console.error("Error getting document:", error);
        return;
      }
    };
    fetchServices(branch);
  }, [branch]);

  const submitReservation = () => {
    if (
      fullName === "" ||
      phoneNumber === "" ||
      branch === "" ||
      service === "" ||
      date === "" ||
      time === ""
    ) {
      alert("Please fill up all the fields");
    } else if (userData.email === "") {
      alert("Please login to reserve");
      navigate("/login");
    } else {
      alert("Reservation Successful!");
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
      <Navbar />
      <div className="bg-[url('./assets/dashboard-background.png')] bg-cover w-full h-auto">
        <div className="flex flex-row items-center justify-center">
          <div className="ml-10 mt-10 md:mt-[10vh]">
            <img
              src={reservation}
              alt="salon_dashboard"
              className="w-1/3 md:w-[90vh] h-auto"
            />
          </div>
          <div className="mx-10 my-2">
            <h1 className="text-[6vh] font-bold text-primary">
              Pamper Yourself at Sea Salon <br></br>Book Now! Feel the Beauty!
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-gradient-to-r from-primary to-secondary w-full h-auto ">
          <h1 className="text-[9vh] font-bold text-background mx-10 my-10">
            Reserve Now!
          </h1>
          <div className=" pb-5 flex">
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Full Name"
              className="bg-white text-black rounded-lg min-w-[70vh] h-10 px-2"
            />
          </div>
          <div className="pb-5 flex">
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="number"
              placeholder="Phone Number"
              className="bg-white text-black rounded-lg min-w-[70vh] h-10 px-2"
            />
          </div>
          <div className="pb-5 flex">
            <select
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className="bg-white text-black rounded-lg min-w-[70vh] h-10 px-2"
            >
              <option value="">Select Branches</option>
              {branches.map((branche) => (
                <option key={branche.id} value={branche.name}>
                  {branche.name}
                </option>
              ))}
            </select>
          </div>
          <div className="pb-5 flex">
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="bg-white text-black rounded-lg min-w-[70vh] h-10 px-2"
            >
              <option value="">Select your services</option>
              {services.map((service) => (
                <option key={service.id} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-row">
            <div className="pb-5 flex px-5">
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Date"
                className="bg-white text-black rounded-lg min-w-[32vh] h-10 px-2"
              />
            </div>
            <div className="pb-5 flex px-5">
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="Time"
                className="bg-white text-black rounded-lg min-w-[32vh] h-10 px-2"
              />
            </div>
          </div>
          {/* End of reservation forms */}
          <div className="flex flex-row mb-10">
            <button
              className="bg-primary text-background text-[3vh] rounded-3xl min-h-[8vh] px-5 mx-5 min-w-[50vh] w-full border border-primary hover:border-tertiary transition duration-300 ease-in-out"
              onClick={submitReservation}
            >
              Reserve
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reservation;
