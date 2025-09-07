import React, { useContext, createContext, useState } from "react";

type UserState = {
  user: string;
  pass: string;
  email: string;
};

type UserContextType = {
  userState: UserState;
  updateUserState: <K extends keyof UserState>(
    key: K,
    value: UserState[K]
  ) => void;
  //setPage: React.Dispatch<React.SetStateAction<number>>;
  //setChangeUnit: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userState, setUserState] = useState<UserState>({
    user: "",
    pass: "",
    email: "",
  });

  const updateUserState = (key: string, value: string) => {
    setUserState((prev) => ({ ...prev, [key]: value }));
  };
  const value = {
    userState,
    updateUserState,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
export const useUserContext = () => {
  const ctx = useContext(UserContext);
  if (!ctx)
    throw new Error("useWaterContext must be used within a WaterProvider");
  return ctx;
};
