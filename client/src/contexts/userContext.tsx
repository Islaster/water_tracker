import React, { useContext, createContext, useState, useEffect } from "react";

type UserState = {
  user: string;
  pass: string;
  email: string;
};

type UserLoginState = {
  id: number;
  username: string;
  password: string;
  email: string;
  created_at: string;
};

type UserContextType = {
  userState: UserState;
  updateUserState: <K extends keyof UserState>(
    key: K,
    value: UserState[K]
  ) => void;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  loggedIn: boolean;
  setLoggedInState: React.Dispatch<
    React.SetStateAction<UserLoginState | undefined>
  >;
  loggedInState: UserLoginState | undefined;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userState, setUserState] = useState<UserState>({
    user: "",
    pass: "",
    email: "",
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const [loggedInState, setLoggedInState] = useState<
    UserLoginState | undefined
  >({
    id: 0,
    username: "",
    password: "",
    email: "",
    created_at: "",
  });

  useEffect(() => {
    setLoggedIn(true);
  }, [loggedInState]);

  const updateUserState = (key: string, value: string) => {
    setUserState((prev) => ({ ...prev, [key]: value }));
  };
  const value = {
    userState,
    updateUserState,
    loggedIn,
    setLoggedIn,
    loggedInState,
    setLoggedInState,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
export const useUserContext = () => {
  const ctx = useContext(UserContext);
  if (!ctx)
    throw new Error("useWaterContext must be used within a WaterProvider");
  return ctx;
};
