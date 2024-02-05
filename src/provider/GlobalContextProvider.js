"use client";

import { Dialog } from "@/components/Dialog";
import { handleStorage } from "@/helpers/handleStorage";
import { createGuest, getGuestBySlug } from "@/services/supabase-api/guest";
import { createContext, useContext, useEffect, useState } from "react";

const initialState = {
  currentUser: null,
  isLoading: false,
};

export const GlobalContext = createContext(initialState);

const GlobalContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const [modalProps, setModalProps] = useState({});
  const { setStorage, getStorage } = handleStorage();

  const setIsLoading = (isLoading) => {
    setState((prev) => ({
      ...prev,
      isLoading,
    }));
  };

  const setCurrentUser = (user) => {
    setStorage("currentUser", user);
    setState((prev) => ({
      ...prev,
      currentUser: user,
    }));
  };

  const logOut = () => {
    setModalProps({
      title: "Deseja sair da conta?",
      onConfirm: () => {
        setCurrentUser(null);
      },
      isOpen: true,
    });
  };

  const reloadCurrentUser = async () => {
    const currentUser = state.currentUser;
    if (currentUser) {
      setIsLoading(true);
      const updatedUser = await getGuestBySlug({ slug: currentUser.slug });
      if (updatedUser) {
        setCurrentUser(updatedUser);
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const check = async () => {
      setIsLoading(true);
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
      setIsLoading(false);
    };
    check();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        setState,
        setCurrentUser,
        reloadCurrentUser,
        logOut,
        setModalProps,
        setIsLoading,
      }}
    >
      {children}
      <Dialog {...modalProps} setModalProps={setModalProps} />
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  return context;
};
