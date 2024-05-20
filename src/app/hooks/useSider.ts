import { useContext } from "react";
import { SiderContext } from "@contexts/SiderContext";

export function useSider() {
  return useContext(SiderContext);
}
