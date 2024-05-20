import { useContext } from "react";
import { StretchScreenContext } from "@contexts/StretchScreenContext";

export function useStretchScreen() {
  return useContext(StretchScreenContext);
}
