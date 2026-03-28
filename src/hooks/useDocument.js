import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";

export const useDocument = (collectionName, id) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const unsub = onSnapshot(doc(db, collectionName, id), (doc) => {
      setData({ id: doc.id, ...doc.data() });
    });
    return () => unsub();
  }, [collectionName, id]);
  return { data };
};
