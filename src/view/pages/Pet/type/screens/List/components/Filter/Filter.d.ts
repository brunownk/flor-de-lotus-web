import { FilterValue } from "@type/filter-value";

export interface FilterProps {
  updateFilters: (value: FilterValue) => void;
  clearFilters: () => void;
  initialFilters?: FilterValue;
}
