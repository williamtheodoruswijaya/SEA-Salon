import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const storeUserData = async () => {
    try {
      const docRef = await setDoc(doc(db, "MsUser", email), {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
      });
      console.log("Document written: ", docRef);
      alert("Account created successfully");
      navigate("/login");
    } catch (e) {
      console.log("Error adding document: ", e);
    }
  };
  const register = async () => {
    if (name === "" || email === "" || phoneNumber === "" || password === "") {
      alert("Please fill up all the fields");
      return;
    } else if (!email.endsWith("@gmail.com")) {
      alert("Please enter a valid email address");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await storeUserData();
    } catch (e) {
      console.log(e);
      alert("Error creating account");
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
      <div className="w-screen h-screen flex justify-center items-center bg-[url('./assets/authentication-background.png')]">
        <form className="form-content p-10 min-w-[40vh] rounded-3xl bg-secondary">
          <div className="font-semibold text-xl pb-5 w-full text-center text-background">
            Sign Up
          </div>
          <div className="form-group pb-5 w-full">
            <input
              type="name"
              id="formName"
              placeholder="full name"
              className="p-3 rounded-xl bg-bluefield text-black w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group pb-5 w-full">
            <input
              type="email"
              id="formEmail"
              placeholder="email"
              className="p-3 rounded-xl bg-bluefield text-black w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group pb-5 w-full">
            <input
              type="number"
              id="formPhoneNumber"
              placeholder="phone number"
              className="p-3 rounded-xl bg-bluefield text-black w-full"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="form-group pb-5 min-w-[20rem]">
            <input
              type="password"
              id="formPassword"
              placeholder="password"
              className="p-3 rounded-xl bg-bluefield text-black w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <div className="flex pt-3 mb-1">
              <div className="pr-2 text-sm text-background">
                Already have an account?
              </div>
              <Link to="/login" className="text-white text-sm underline">
                Sign In
              </Link>
            </div>
            <button
              onClick={register}
              type="button"
              className=" rounded-xl bg-tertiary text-background font-semibold min-w-[20rem]  p-2 hover:bg-background hover:text-black items-center justify-center"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
