/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { FilterValue } from '@type/filter-value';

export function useFilters<T = FilterValue>(initialFilters: T) {
  const [filters, setFilters] = useState<T>();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const filtersParam = searchParams.get('filters');

    let initialQueryFilters = {};

    if (filtersParam) {
      initialQueryFilters = JSON.parse(filtersParam);
    }

    setFilters({ ...initialFilters, ...initialQueryFilters });
  }, []);

  const updateFilters = useCallback(
    (newFilters: T) => {
      setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));

      const searchParams = new URLSearchParams();
      searchParams.set('filters', JSON.stringify(newFilters));

      navigate({ search: searchParams.toString() });
    },
    [navigate],
  );

  const handleFilterChange = useCallback(
    (filterKey: string, filterValue: any) => {
      const newFilters = { ...filters, [filterKey]: filterValue };
      updateFilters(newFilters as T);
    },
    [filters, updateFilters],
  );

  const clearFilters = useCallback(() => {
    setFilters(initialFilters);
    navigate({ search: '' });
  }, [navigate]);

  return {
    filters,
    clearFilters,
    updateFilters,
    handleFilterChange,
  };
}
