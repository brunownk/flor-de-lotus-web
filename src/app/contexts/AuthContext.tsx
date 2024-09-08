import React, { createContext, useCallback, useEffect, useState } from 'react';
import {
  QueryObserverResult,
  RefetchOptions,
  useQueryClient,
} from '@tanstack/react-query';
import { localStorageKeys } from '@config/local-storage-keys';

import { useGetMeQuery } from '@services/user/management';

import { User, USER_ROLE } from '../entities/User';

interface AuthContextValue {
  signedIn: boolean;
  user: User | undefined;
  isAdmin: boolean;
  signin(accessToken: string): void;
  signout(): void;
  refetch(
    _options?: RefetchOptions | undefined,
  ): Promise<QueryObserverResult<User, unknown>>;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(
      localStorageKeys.ACCESS_TOKEN,
    );

    return !!storedAccessToken;
  });

  const queryClient = useQueryClient();

  const { data, isError, isLoading, isSuccess, refetch } = useGetMeQuery({
    enabled: signedIn,
  });

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);
    setSignedIn(true);
  }, []);

  const signout = useCallback(async () => {
    setSignedIn(false);
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    queryClient.removeQueries();
  }, [queryClient]);

  useEffect(() => {
    if (isError) {
      signout();
    }
  }, [isError, signout]);

  return (
    <AuthContext.Provider
      value={{
        signedIn: isSuccess && signedIn,
        user: data,
        isAdmin: data?.role === USER_ROLE.ADMIN,
        signin,
        signout,
        refetch,
      }}
    >
      {!isLoading && children}
    </AuthContext.Provider>
  );
}
