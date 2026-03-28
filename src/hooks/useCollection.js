import { collection, onSnapshot, QuerySnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export const useCollection = (collectionName) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, collectionName),
      (snapshot) => {
        const dat = [];
        QuerySnapshot.docs.forEach((doc) =>
          data.push({
            id: doc.id,
            ...doc.data(),
          }),
        );
        setData(data);
      },
    );

    return () => unsubscribe();
  }, [collectionName]);
  return { data };
};
