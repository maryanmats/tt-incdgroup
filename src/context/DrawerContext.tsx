import React, { createContext, useState, ReactNode } from "react";

interface DrawerContextValue {
  isOpenDrawer: boolean;
  setIsOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const DrawerContext = createContext<DrawerContextValue | undefined>(undefined);

interface DrawerProviderProps {
  children: ReactNode;
}

const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  return <DrawerContext.Provider value={{ isOpenDrawer, setIsOpenDrawer }}>{children}</DrawerContext.Provider>;
};

export { DrawerContext, DrawerProvider };
