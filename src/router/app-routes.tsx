import { BiSolidUserRectangle } from "react-icons/bi";

import { CustomRouteObject } from "@type/custom-route-object";

import { PrivateLayout, PublicLayout } from "@layouts";
import * as Pages from "@pages";

import { AuthGuard } from "./auth-guard";

export const publicRoutes: CustomRouteObject[] = [
  {
    element: <AuthGuard isPrivate={false} />,
    children: [
      {
        element: <PublicLayout />,
        children: [
          {
            id: "login",
            path: "/login",
            element: <Pages.Login />,
          },
        ],
      }
    ],
  }
]

export const privateRoutes: CustomRouteObject[]  = [
  {
    element: <AuthGuard isPrivate={true} />,
    children: [
      {
        element: <PrivateLayout />,
        children: [
          {
            id: "users",
            group: "management",
            icon: <BiSolidUserRectangle />,
            sider: true,
            children: [
              {
                id: "create",
                path: "/users/create",
                sider: true,
                element: <Pages.CreateUser />,
              },
              {
                id: "edit",
                path: "/users/:id/edit",
                sider: false,
                element: <Pages.EditUser />,
              },
              {
                id: "profile",
                path: "/account",
                sider: false,
                element: <Pages.Profile />,
              },
            ]
          },
          {
            path: "*",
            element: null,
          },
        ],
      },
    ],
  },
]
