import { useEffect, useState, ReactNode } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
