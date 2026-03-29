import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { auth } from "../firebase/config";

export const useRegister = () => {
  const { dispatch } = useContext(GlobalContext);
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const registerWithEmail = async (displayName, email, password) => {
    try {
      setIsPending(true);
      const req = await createUserWithEmailAndPassword(auth, email, password);
      console.log(auth);
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

  return { data, isPending, registerWithEmail };
};
