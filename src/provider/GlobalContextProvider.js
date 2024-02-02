"use client";

import { handleStorage } from "@/helpers/handleStorage";
import { createGuest, getGuestBySlug } from "@/services/supabase-api/guest";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const initialState = {
  currentUser: null,
};

export const GlobalContext = createContext(initialState);

const GlobalContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const { setStorage, getStorage } = handleStorage();

  const setCurrentUser = (user) => {
    setStorage("currentUser", user);
    setState((prev) => ({
      ...prev,
      currentUser: user,
    }));
  };

  const reloadCurrentUser = async () => {
    const currentUser = state.currentUser;
    if (currentUser) {
      const updatedUser = await getGuestBySlug({ slug: currentUser.slug });
      if (updatedUser) {
        setCurrentUser(updatedUser);
      }
    }
  };

  useEffect(() => {
    const check = async () => {
      const storagedUser = getStorage("currentUser") || null;
      if (storagedUser && storagedUser.slug && storagedUser.name) {
        let existingUser = await getGuestBySlug({ slug: storagedUser.slug });
        if (!existingUser) {
          existingUser = await createGuest({ name: storagedUser.name });
        }
        setState((prev) => ({
          ...prev,
          currentUser: existingUser || null,
        }));
      } else {
        setState((prev) => ({
          ...prev,
          currentUser: null,
        }));
      }
    };
    check();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        setState,
        setCurrentUser,
        reloadCurrentUser
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
