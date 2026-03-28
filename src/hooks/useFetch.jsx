import { useEffect, useState } from "react";

export function useFetch(url, method = "GET") {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  let [newData, setNewData] = useState(null);

  const postData = (data) => {
    setNewData({
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  useEffect(() => {
    const getData = async (fetchData) => {
      try {
        setIsPending(true);
        const req = await fetch(url, { ...fetchData });
        if (!req.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await req.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsPending(false);
      }
    };

    if (method == "GET") getData(); // ✅ MUHIM
    if (method == "POST" && newData) getData(newData);
  }, [url, method, newData]);

  return { data, isPending, error, postData };
}
