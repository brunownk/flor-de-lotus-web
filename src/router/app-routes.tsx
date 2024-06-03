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
            id: "user",
            icon: <BiSolidUserRectangle />,
            sider: true,
            group: "management",
            children: [
              {
                id: "list",
                path: "/users",
                sider: true,
                element: <Pages.ListUser />,
              },
              {
                id: "create",
                path: "/user/create",
                sider: true,
                element: <Pages.CreateUser />,
              },
              {
                id: "edit",
                path: "/user/:userId/edit",
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
