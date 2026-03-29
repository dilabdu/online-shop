import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { auth } from "../firebase/config";

export const useLogin = () => {
  const { dispatch } = useContext(GlobalContext);
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

  return { data, isPending, loginWithEmail };
};
