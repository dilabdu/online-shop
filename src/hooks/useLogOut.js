import { signOut } from "firebase/auth";
import { useState } from "react";
import { toast } from "sonner";
import { auth } from "../firebase/config";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export function useLogOut() {
  const { dispatch } = useContext(GlobalContext);
  const [isPending, setIsPending] = useState(false);

  const _logout = async () => {
    console.log(_logout);
    try {
      setIsPending(true);
      await signOut(auth);
      toast.success("Logged out successfully!");
      dispatch({ type: "logout" });
    } catch {
      toast.error("Could not log out");
    } finally {
      setIsPending(false);
    }
  };
  return { isPending, _logout };
}
