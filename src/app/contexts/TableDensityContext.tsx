import { localStorageKeys } from "@config/local-storage-keys";
import { useCallback, useState, createContext } from "react";

interface ITableDensityContextValue {
  isDensified: boolean;
  toggleStretch: () => void;
}

export const TableDensityContext = createContext({} as ITableDensityContextValue);

interface ITableDensityProviderProps {
  children?: React.ReactNode;
}

export function TableDensityProvider({ children }: ITableDensityProviderProps) {
  const [isDensified, setIsDensified] = useState(() => {
    const densified = localStorage.getItem(localStorageKeys.DENSIFIED_TABLE);
    return densified === 'true' ? true : false;
  });

  const toggleStretch = useCallback(() => {
    setIsDensified((prevState) => {
      localStorage.setItem(localStorageKeys.DENSIFIED_TABLE, String(!prevState));
      return !prevState;
    });
  }, [])

  return (
    <TableDensityContext.Provider value={{ isDensified, toggleStretch }}>
      {children}
    </TableDensityContext.Provider>
  )
}
