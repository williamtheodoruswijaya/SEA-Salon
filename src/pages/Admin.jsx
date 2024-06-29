import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import AdminNavbar from "../components/AdminNavbar";

function Admin() {
  const [branch, setBranch] = useState("");
  const [branches, setBranches] = useState([]);
  const [services, setServices] = useState("");
  const [duration, setDuration] = useState();
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

  const addToDatabase = async () => {
    try {
      const docRef = await setDoc(doc(db, "MsServices", uuidv4()), {
        branch: branch,
        name: services,
        duration: duration,
      });
      console.log("Document written: ", docRef);
      alert("Service added successfully");
    } catch (error) {
      console.log("Error adding document: ", error);
      alert("Error adding service");
    }
  };
  const addService = async () => {
    if (services === "" || duration === "" || branch === "") {
      alert("Please fill in all fields");
      return;
    }
    try {
      await addToDatabase();
    } catch (e) {
      console.log(e);
      alert("Error adding service");
    } finally {
      setServices("");
      setDuration("");
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
      <AdminNavbar />
      <div className="w-screen h-screen items-center justify-center bg-primary flex">
        <form className="form-content p-10 min-w-[50vh] rounded-3xl items-center justify-center bg-secondary">
          <div className="font-semibold text-xl pb-5 w-full text-center text-background">
            Add Services
          </div>
          <div className="form-group pb-5 w-full">
            <select
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className="bg-white p-3 rounded-xl bg-bluefield text-black w-full"
            >
              <option value="">Select Branch</option>
              {branches.map((branch) => (
                <option key={branch.id} value={branch.name}>
                  {branch.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group pb-5 w-full">
            <input
              type="text"
              id="formServices"
              placeholder="Add Services"
              className="p-3 rounded-xl bg-bluefield text-black w-full"
              value={services}
              onChange={(e) => setServices(e.target.value)}
            />
          </div>
          <div className="form-group pb-5 w-full">
            <input
              type="number"
              id="formDuration"
              placeholder="Set Duration (in minutes)"
              className="p-3 rounded-xl bg-bluefield text-black w-full"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <button
            onClick={addService}
            type="button"
            className=" rounded-xl bg-tertiary text-background font-semibold min-w-[20rem]  p-2 hover:bg-background hover:text-black items-center justify-center"
          >
            Add Service
          </button>
        </form>
      </div>
    </>
  );
}

export default Admin;
