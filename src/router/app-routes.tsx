import { BiSolidUserRectangle } from "react-icons/bi";
import { MdOutlinePets } from "react-icons/md";

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
    element: <AuthGuard isPrivate={false} />,
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
                id: "user-list",
                path: "/users",
                sider: true,
                element: <Pages.ListUser />,
              },
              {
                id: "user-create",
                path: "/user/create",
                sider: true,
                element: <Pages.CreateUser />,
              },
              {
                id: "user-edit",
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
            id: "pet",
            icon: <MdOutlinePets />,
            sider: true,
            group: "management",
            children: [
              {
                id: "pet-list",
                path: "/pets",
                sider: true,
                element: <Pages.ListPet />,
              },
              {
                id: "pet-create",
                path: "/pet/create",
                sider: false,
                element: <Pages.CreatePet />,
              },
              {
                id: "pet-edit",
                path: "/pet/:petId/edit",
                sider: false,
                element: <Pages.EditPet />,
              },
              {
                id: "pet-types",
                path: "/pet-types",
                sider: true,
                element: <Pages.ListPetType />,
              },
              {
                id: "pet-types-create",
                path: "/pet-type/create",
                sider: false,
                element: <Pages.CreatePetType />,
              },
              {
                id: "pet-types-edit",
                path: "/pet-type/:petTypeId/edit",
                sider: false,
                element: <Pages.EditPetType />,
              },
              {
                id: "pet-breeds",
                path: "/pet-breeds",
                sider: true,
                element: <Pages.ListPetBreed />,
              },
              {
                id: "pet-breeds-create",
                path: "/pet-breed/create",
                sider: false,
                element: <Pages.CreatePetBreed />,
              },
              {
                id: "pet-breeds-edit",
                path: "/pet-breed/:petBreedId/edit",
                sider: false,
                element: <Pages.EditPetBreed />,
              },
            ]
          },
          {
            path: '*',
            element: <Pages.NotFound />,
          },
        ],
      },
    ],
  },
]
