import { localStorageKeys } from '@config/local-storage-keys';
import { useCallback, useState, createContext } from 'react';

export type IDensityTypes = 'small' | 'middle' | 'large';

interface ITableDensityContextValue {
  density: IDensityTypes;
  toggleDensity: (value: IDensityTypes) => void;
}

export const TableDensityContext = createContext(
  {} as ITableDensityContextValue,
);

interface ITableDensityProviderProps {
  children?: React.ReactNode;
}

export function TableDensityProvider({ children }: ITableDensityProviderProps) {
  const [density, setDensity] = useState(() => {
    const densified = localStorage.getItem(localStorageKeys.DENSIFIED_TABLE);
    return (densified as IDensityTypes) ?? 'middle';
  });

  const toggleDensity = useCallback((value: IDensityTypes) => {
    localStorage.setItem(localStorageKeys.DENSIFIED_TABLE, value);
    setDensity(value);
  }, []);

  return (
    <TableDensityContext.Provider value={{ density, toggleDensity }}>
      {children}
    </TableDensityContext.Provider>
  );
}
