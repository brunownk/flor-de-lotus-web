import { useCallback, useState, createContext } from "react";

interface ISiderContextValue {
  isCollapse: boolean;
  toggleCollapse: () => void;
}

export const SiderContext = createContext({} as ISiderContextValue);

interface ISiderProviderProps {
  children?: React.ReactNode;
}

export function SiderProvider({ children }: ISiderProviderProps) {
  const [isCollapse, setIsCollapse] = useState(false);

  const toggleCollapse = useCallback(() => {
    setIsCollapse((prevState) => !prevState);
  }, [])

  return (
    <SiderContext.Provider value={{ isCollapse, toggleCollapse }}>
      {children}
    </SiderContext.Provider>
  )
}