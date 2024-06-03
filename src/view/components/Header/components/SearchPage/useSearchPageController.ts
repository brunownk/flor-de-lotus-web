import {ChangeEvent, useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import key from 'keymaster';

import { I18_DEFAULT_NS } from "@config/app-keys";
import { allPrivateRoutesPaths } from "@routes/router";

import { useTranslateRoutesName } from "@hooks/useTranslateRoutesName";

import { IModalRef } from "@components/Modal";

export function useSearchPageController() {
  const [searchTerm, setSearchTerm] = useState('');

  const modalRef = useRef<IModalRef>(null);

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
      modalRef.current?.open();
    };

    key('ctrl+k', handleShortcut);

    return () => {
      key.unbind('ctrl+k');
    };
  }, []);

  function openModal() {
    modalRef.current?.open();
  }

  function closeModal() {
    modalRef.current?.close();
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
    filteredContacts,
    modalRef,
    openModal,
    closeModal,
    navigateTo,
    handleChangeSearchTerm,
  }
}
