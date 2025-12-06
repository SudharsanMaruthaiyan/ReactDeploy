import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const values = {
    name: "Revamp 2025",
  };

  return <AppContext.Provider value={values}> {children} </AppContext.Provider>;
};
