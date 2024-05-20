import { useContext } from "react";
import { LoadingPageContext } from "@contexts/LoadingPageContext";

export function useLoading() {
  return useContext(LoadingPageContext);
}
