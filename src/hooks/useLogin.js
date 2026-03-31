import { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useGlobalContext } from "./useGlobal.context";
import { auth } from "../firebase/config";

export const useLogin = () => {
  const { dispatch } = useGlobalContext();
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const loginWithEmail = async (email, password) => {
    try {
      setIsPending(true);
      const req = await signInWithEmailAndPassword(auth, email, password);
      if (!req.user) {
        throw new Error("Could not complete login");
      }
      const user = req.user;
      dispatch({ type: "login", payload: user });
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsPending(false);
    }
  };
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      setIsPending(true);
      const req = await signInWithPopup(auth, provider);

      if (!req.user) {
        throw new Error("Could not complete registration");
      }
      const user = req.user;

      dispatch({ type: "login", payload: user });
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { data, isPending, loginWithEmail, loginWithGoogle };
};
