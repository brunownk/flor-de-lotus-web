import { theme } from 'antd';
import { useCallback, createContext, useRef, useState } from 'react';
import LoadingBar, { LoadingBarRef } from 'react-top-loading-bar';

const { useToken } = theme;

interface ILoadingPageContextValue {
  isLoading: boolean;
  startLoading: () => void;
  completeLoading: () => void;
}

export const LoadingPageContext = createContext({} as ILoadingPageContextValue);

interface ILoadingPageProviderProps {
  children?: React.ReactNode;
}

export function LoadingPageProvider({ children }: ILoadingPageProviderProps) {
  const [isLoading, setIsLoading] = useState(false);

  const loadingBarRef = useRef<LoadingBarRef>(null);

  const { token } = useToken();

  const startLoading = useCallback(() => {
    setIsLoading(true);
    loadingBarRef.current?.continuousStart();
  }, []);

  const completeLoading = useCallback(() => {
    setIsLoading(false);
    loadingBarRef.current?.complete();
  }, []);

  return (
    <LoadingPageContext.Provider
      value={{
        isLoading,
        startLoading,
        completeLoading,
      }}
    >
      <LoadingBar color={token.colorPrimary} ref={loadingBarRef} />
      {children}
    </LoadingPageContext.Provider>
  );
}
