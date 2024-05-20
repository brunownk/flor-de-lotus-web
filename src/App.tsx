import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { App as AntdApp } from 'antd';

import { SiderProvider } from "@contexts/SiderContext";
import { ThemeProvider } from "@contexts/ThemeContext";
import { LocaleProvider } from "@contexts/LocaleContext";
import { LoadingPageProvider } from "@contexts/LoadingPageContext";
import { AuthProvider } from "@contexts/AuthContext";
import { StretchScreenProvider } from "@contexts/StretchScreenContext";

import { CssTokenBridge } from "@styles/css-token-bridge";

import { router } from "./router";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 0,
    }
  }
});

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LocaleProvider>
        <ThemeProvider>
          <AntdApp>
            <LoadingPageProvider>
                <AuthProvider>
                  <SiderProvider>
                    <StretchScreenProvider>
                      <CssTokenBridge />
                      <RouterProvider router={router} />
                    </StretchScreenProvider>
                  </SiderProvider>
                </AuthProvider>
            </LoadingPageProvider>
          </AntdApp>
        </ThemeProvider>
      </LocaleProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
