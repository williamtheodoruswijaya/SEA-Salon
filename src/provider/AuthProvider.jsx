import { useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({
    email: "",
    name: "Not Signed In",
    password: "",
    phoneNumber: "",
  });
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
