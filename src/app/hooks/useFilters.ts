import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { FilterValue } from "@type/filter-value";

export function useFilters<T = FilterValue>() {
  const [filters, setFilters] = useState<T>({} as T);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const filtersParam = searchParams.get('filters');

    if (filtersParam) {
      const initialFilters = JSON.parse(filtersParam);
      setFilters(initialFilters);
    }
  }, [location.search]);

  const updateFilters = useCallback((newFilters: T) => {
    setFilters(newFilters);

    const searchParams = new URLSearchParams();
    searchParams.set('filters', JSON.stringify(newFilters));

    navigate({ search: searchParams.toString() });
  }, [navigate]);

  const handleFilterChange = useCallback((filterKey: string, filterValue: any ) => {
    const newFilters = { ...filters, [filterKey]: filterValue };
    updateFilters(newFilters);
  }, [filters, updateFilters]);

  const clearFilters = useCallback(() => {
    setFilters({} as T);
    navigate({ search: '' });
  }, [navigate]);

  return {
    filters,
    clearFilters,
    updateFilters,
    handleFilterChange,
  }
}
