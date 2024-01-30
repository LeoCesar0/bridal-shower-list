"use client";

import { handleStorage } from "@/helpers/handleStorage";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const initialState = {
  currentUser: null,
};

export const GlobalContext = createContext(initialState);

const GlobalContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const router = useRouter();

  const { setStorage, getStorage } = handleStorage();

  const currentUserSlug = state.currentUser?.slug || null;

  const setCurrentUser = (user) => {
    setStorage("currentUser", user);
    setState((prev) => ({
      ...prev,
      currentUser: user,
    }));
  };

  useEffect(() => {
    const currentUser = getStorage("currentUser") || null;
    if (currentUser) {
      setState((prev) => ({
        ...prev,
        currentUser,
      }));
    }
  }, []);

  useEffect(() => {
    if (currentUserSlug) {
      router.push("/list",);
    }
  }, [currentUserSlug]);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        setState,
        setCurrentUser,
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
