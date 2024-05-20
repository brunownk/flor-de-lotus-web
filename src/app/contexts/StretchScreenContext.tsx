import { localStorageKeys } from "@config/local-storage-keys";
import { useCallback, useState, createContext } from "react";

interface IStretchScreenContextValue {
  isStretched: boolean;
  toggleStretch: () => void;
}

export const StretchScreenContext = createContext({} as IStretchScreenContextValue);

interface IStretchScreenProviderProps {
  children?: React.ReactNode;
}

export function StretchScreenProvider({ children }: IStretchScreenProviderProps) {
  const [isStretched, setIsStretched] = useState(() => {
    const stretched = localStorage.getItem(localStorageKeys.STRETCHED_SCREEN);
    return stretched === 'true' ? true : false;
  });

  const toggleStretch = useCallback(() => {
    setIsStretched((prevState) => {
      localStorage.setItem(localStorageKeys.STRETCHED_SCREEN, String(!prevState));
      return !prevState;
    });
  }, [])

  return (
    <StretchScreenContext.Provider value={{ isStretched, toggleStretch }}>
      {children}
    </StretchScreenContext.Provider>
  )
}
