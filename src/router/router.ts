import { createBrowserRouter } from "react-router-dom";

import { mountMenuRouteObject } from "@utils/mount-menu-route-object";
import { getAllRoutesPath } from "@utils/get-all-routes-path";
import { mergeMenuRoutes } from "@utils/mergeMenuRoutes";

import { publicRoutes, privateRoutes } from "./app-routes";

const routes = [...publicRoutes, ...privateRoutes];

export const router = createBrowserRouter(routes);

export const appRoutesPaths = getAllRoutesPath(routes);
export const allPrivateRoutesPaths = getAllRoutesPath(privateRoutes);

const appMenuRoutes = mountMenuRouteObject(privateRoutes);

export const menuRoutes = mergeMenuRoutes(appMenuRoutes)
