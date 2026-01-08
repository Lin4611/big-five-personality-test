import { useContext } from "react";
import { BigFiveContext } from "../context/BigFiveContext";

export const useBigFiveData = () => {
  const context = useContext(BigFiveContext);
  if (!context) {
    throw new Error("useBigFiveData must be used within BigFiveProvider");
  }
  return context;
};