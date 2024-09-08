import { createBrowserRouter } from "react-router-dom";

import { getAllRoutesPath } from "@utils/get-all-routes-path";

import { publicRoutes, privateRoutes } from "./app-routes";

const routes = [...publicRoutes, ...privateRoutes];

export const appRoutesPaths = getAllRoutesPath(routes);
export const allPrivateRoutesPaths = getAllRoutesPath(privateRoutes);

export const router = createBrowserRouter(routes);
