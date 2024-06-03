import { useContext } from "react";
import { TableDensityContext } from "@contexts/TableDensityContext";

export function useTableDensity() {
  return useContext(TableDensityContext);
}
