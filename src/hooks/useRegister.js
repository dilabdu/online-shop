import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { useGlobalContext } from "./useGlobal.context";

export const useRegister = () => {
  const { dispatch } = useGlobalContext;
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);

  // register with email and password
  const registerWithEmail = async (displayName, photo, email, password) => {
    try {
      setIsPending(true);
      const req = await createUserWithEmailAndPassword(auth, email, password);

      if (!req.user) {
        throw new Error("Could not complete registration");
      }
      const user = req.user;
      await updateProfile(auth.currentUser, {
        photoURL: photo,
        displayName,
      });
      dispatch({ type: "login", payload: user });
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsPending(false);
    }
  };

  // register with Google account
  const registerWithGoogle = async () => {
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

  return { data, isPending, registerWithEmail, registerWithGoogle };
};
