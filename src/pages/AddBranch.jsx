import { useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { v4 as uuidv4 } from "uuid";

function AddBranch() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [openingTime, setOpeningTime] = useState("");
  const [closingTime, setClosingTime] = useState("");
  const addToDatabase = async () => {
    try {
      const docRef = await setDoc(doc(db, "MsBranches", uuidv4()), {
        name: name,
        location: location,
        openingTime: openingTime,
        closingTime: closingTime,
      });
      console.log("Document written: ", docRef);
    } catch (error) {
      console.log("Error adding document: ", error);
      alert("Error adding branch");
    }
  };
  const addBranch = async () => {
    if (
      name === "" ||
      location === "" ||
      openingTime === "" ||
      closingTime === ""
    ) {
      alert("Please fill in all fields");
      return;
    }
    try {
      await addToDatabase();
      alert("Branch added successfully");
    } catch (e) {
      console.log(e);
      alert("Error adding branch");
    } finally {
      setName("");
      setLocation("");
      setOpeningTime("");
      setClosingTime("");
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
        <form className="form-content items-center justify-center p-10 min-w-[50vh] rounded-3xl bg-secondary">
          <div className="font-semibold text-xl pb-5 w-full text-center text-background">
            Add Branch
          </div>
          <div className="form-group pb-5 w-full">
            <input
              type="text"
              id="formName"
              placeholder="Branch Name"
              className="p-3 rounded-xl bg-bluefield text-black w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group pb-3 w-full">
            <input
              type="text"
              id="formLocation"
              placeholder="Branch Location"
              className="p-3 rounded-xl bg-bluefield text-black w-full"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="form-group pb-3 w-full">
            <div className="text-white text-sm ml-2">Opening Time:</div>
            <input
              type="time"
              id="formOpeningTime"
              placeholder="Opening Time"
              className="p-3 rounded-xl bg-bluefield text-black w-full"
              value={openingTime}
              onChange={(e) => setOpeningTime(e.target.value)}
            />
          </div>
          <div className="form-group pb-5 w-ful">
            <div className="text-white text-sm ml-2">Closing Time:</div>
            <input
              type="time"
              id="formClosingTime"
              placeholder="Closing Time"
              className="p-3 rounded-xl bg-bluefield text-black w-full"
              value={closingTime}
              onChange={(e) => setClosingTime(e.target.value)}
            />
          </div>
          <button
            onClick={addBranch}
            type="button"
            className=" rounded-xl bg-tertiary text-background font-semibold min-w-[20rem]  p-3 hover:bg-background hover:text-black items-center justify-center"
          >
            Add Branch
          </button>
        </form>
      </div>
    </>
  );
}

export default AddBranch;
