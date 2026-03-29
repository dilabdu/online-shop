import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export const useCollection = (collectionName, filterOption = "asc") => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const q = query(
      collection(db, collectionName),
      orderBy("createdTime", filterOption),
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = [];
      snapshot.docs.forEach((doc) =>
        data.push({
          id: doc.id,
          ...doc.data(),
        }),
      );
      setData(data);
    });

    return () => unsubscribe();
  }, [collectionName, filterOption]);
  return { data };
};
