"use client";

import { createContext, useContext, useState } from "react";

const initialState = {
  currentUser: null,
};

export const GlobalContext = createContext(initialState);

const GlobalContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        setState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  return context;
};
