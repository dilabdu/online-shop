import {
  collection,
  onSnapshot,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";

export const useCollection = (
  collectionName,
  filterOption = "asc",
  ownerFilter = false,
) => {
  const [data, setData] = useState(null);
  const userUid = auth.currentUser.uid;
  useEffect(() => {
    let q;
    if (ownerFilter) {
      q = query(
        collection(db, collectionName),
        orderBy("createdTime", filterOption),
        where("uid", "==", userUid),
      );
    } else {
      q = query(
        collection(db, collectionName),
        orderBy("createdTime", filterOption),
      );
    }
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
  }, [collectionName, filterOption, ownerFilter]);
  return { data };
};
