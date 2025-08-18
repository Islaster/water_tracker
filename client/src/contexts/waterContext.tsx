import React, { useContext, createContext, useState } from "react";

type BodyState = {
  weight: number;
  height: number;
};

type WaterContextType = {
  bodyState: BodyState;
  updateBodyState: <K extends keyof BodyState>(
    key: K,
    value: BodyState[K]
  ) => void;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  changeUnit: boolean;
  setChangeUnit: React.Dispatch<React.SetStateAction<boolean>>;
};

const WaterContext = createContext<WaterContextType | undefined>(undefined);

export const WaterProvider = ({ children }: { children: React.ReactNode }) => {
  const [bodyState, setBodyState] = useState<BodyState>({
    weight: 0,
    height: 0,
  });

  const [changeUnit, setChangeUnit] = useState(true);

  const [page, setPage] = useState(0);

  const updateBodyState = (key: string, value: number) => {
    setBodyState((prev) => ({ ...prev, [key]: value }));
  };
  const value = {
    bodyState,
    updateBodyState,
    setPage,
    page,
    changeUnit,
    setChangeUnit,
  };
  return (
    <WaterContext.Provider value={value}>{children}</WaterContext.Provider>
  );
};
export const useWaterContext = () => {
  const ctx = useContext(WaterContext);
  if (!ctx)
    throw new Error("useWaterContext must be used within a WaterProvider");
  return ctx;
};
