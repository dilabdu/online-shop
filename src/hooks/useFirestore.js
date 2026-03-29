import { db } from "../firebase/config";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { toast } from "sonner";
import { useState } from "react";

export const useFirestore = (collectionName) => {
  const [isPending, setIsPending] = useState(false);
  const deleteDocument = async (id) => {
    setIsPending(true);
    try {
      await deleteDoc(doc(db, collectionName, id));
      toast.success("Products deleted successfully!");
    } catch (error) {
      console.log(error.message);
      toast.error("Error deleting product!");
    } finally {
      setIsPending(false);
    }
  };
  const updateDocument = (id, data) => {};
  const addDocument = async (id = null, data) => {
    const newDocument = { ...data, createdTime: serverTimestamp() };
    if (id) {
      setIsPending(true);

      try {
        await setDoc(doc(db, collectionName, id), newDocument);
        toast.success("Products created successfully!");
      } catch (error) {
        console.log(error.message);
        toast.error("Error creating product!");
      } finally {
        setIsPending(false);
      }
    } else {
      setIsPending(true);
      try {
        await addDoc(collection(db, collectionName), newDocument);
        toast.success("Products created successfully!");
      } catch (error) {
        console.log(error.message);
        toast.error("Error creating product!");
      } finally {
        setIsPending(false);
      }
    }
  };

  return { deleteDocument, updateDocument, addDocument, isPending };
};
