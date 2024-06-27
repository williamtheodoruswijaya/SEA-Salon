import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = () => {};

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      ></link>
      <div className="w-screen h-screen flex justify-center items-center bg-[url('./assets/reservation-background.png')]">
        <form className="form-content p-10 min-w-[40vh] rounded-3xl bg-secondary">
          <div className="font-semibold text-xl pb-5 w-full text-center text-background">
            Sign In
          </div>
          <div className="form-group pb-5 w-full">
            <input
              type="email"
              id="formEmail"
              placeholder="email"
              className="p-3 rounded-xl bg-bluefield text-white w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group pb-5 min-w-[20rem]">
            <input
              type="password"
              id="formPassword"
              placeholder="password"
              className="p-3 rounded-xl bg-bluefield text-white w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <div className="flex pt-3">
              <div className="pr-2 text-sm text-background">
                Dont have an account?
              </div>
              <Link to="/register" className="text-white text-sm underline">
                Register here
              </Link>
            </div>
            <button
              onClick={signIn}
              type="button"
              className=" rounded-xl bg-tertiary text-background font-semibold min-w-[20rem]  p-2 hover:bg-background hover:text-black items-center justify-center"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
