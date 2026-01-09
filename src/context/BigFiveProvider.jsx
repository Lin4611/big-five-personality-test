import { useEffect, useState } from "react";
import { getBigFiveTestData } from "../api/bigFive";
import { BigFiveContext } from "./BigFiveContext";

export const BigFiveProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getBigFiveTestData();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <BigFiveContext.Provider value={{ data, loading, error }}>
      {children}
    </BigFiveContext.Provider>
  );
};