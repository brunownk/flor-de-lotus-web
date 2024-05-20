import {ChangeEvent, useDeferredValue, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import key from 'keymaster';

import { allPrivateRoutesPaths } from "@routes/router";

import { useTranslateRoutesName } from "@hooks/useTranslateRoutesName";
import { useTranslation } from "react-i18next";
import { I18_DEFAULT_NS } from "@config/app-keys";

export function useSearchPageController() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const deferredSearchTerm = useDeferredValue(searchTerm);

  const navigate = useNavigate();

  const { translatedRoutes } = useTranslateRoutesName('id', allPrivateRoutesPaths);

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'layouts.private.header.search-pages'
  });

  const filteredContacts = useMemo(() => translatedRoutes.map((route: any) => {
    const lowerCaseTerm = deferredSearchTerm.toLowerCase().trim();
    const parts = route.path.split(new RegExp(`(${lowerCaseTerm})`, 'gi'));
    return {
      ...route,
      pathParts: parts
    };
  }).filter((route: any) => (
    route.id.toLowerCase().includes(deferredSearchTerm.toLowerCase()) ||
    route.path.toLowerCase().includes(deferredSearchTerm.toLowerCase())
  )), [translatedRoutes, deferredSearchTerm]);

  useEffect(() => {
    const handleShortcut = (event: any) => {
      event.preventDefault();
      event.stopPropagation();
      setIsModalOpen(true);
    };

    key('ctrl+k', handleShortcut);

    return () => {
      key.unbind('ctrl+k');
    };
  }, []);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setSearchTerm('');
  }

  function handleChangeSearchTerm(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  function navigateTo(path: string) {
    navigate(path);
    closeModal();
  }

  return {
    translate,
    searchTerm,
    isModalOpen,
    filteredContacts,
    openModal,
    closeModal,
    navigateTo,
    handleChangeSearchTerm,
  }
}
