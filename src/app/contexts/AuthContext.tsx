import { createContext, useCallback, useState } from 'react';
import { QueryObserverResult, RefetchOptions, useQueryClient } from '@tanstack/react-query';
/* import { useTranslation } from 'react-i18next';
import { notification } from 'antd'; */

import { localStorageKeys } from '@config/local-storage-keys';
/* import { I18_DEFAULT_NS } from '@config/app-keys'; */

/* import { useGetMeQuery } from '@services/user'; */

import { User } from '../entities/User';

interface AuthContextValue {
  signedIn: boolean;
  user: User | undefined;
  signin(accessToken: string): void;
  signout(): void;
  refetch(options?: RefetchOptions | undefined): Promise<QueryObserverResult<User, unknown>> | undefined;
}

export const AuthContext = createContext({} as AuthContextValue);

const mockedUser: User = {
  id: 'uuid-1',
  username: 'brunownk',
  email: 'neckel.bw@gmail.com',
  name: 'Bruno Neckel',
  createdAt: new Date(),
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

    return !!storedAccessToken;
  });

  /* const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'hooks.use-auth'
  }) */

  const queryClient = useQueryClient()

  /* const {
    data,
    isError,
    isLoading,
    isSuccess,
    refetch,
  } = useGetMeQuery({ enabled: signedIn }) */

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);
    setSignedIn(true);
  }, [])

  const signout = useCallback(async () => {
    setSignedIn(false);
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    queryClient.removeQueries();
  }, [queryClient])

  /* useEffect(() => {
    if (isError) {
      notification.error({
        message: translate('get-me-error-message'),
        description: translate('get-me-error-description'),
      })

      signout();
    }
  }, [isError, signout, translate]) */


  return (
    <AuthContext.Provider
      value={{
        signedIn: signedIn,
        user: mockedUser,
        signin,
        signout,
        refetch: () => undefined,
      }}
    >
      {true && children}
    </AuthContext.Provider>
  )
}
