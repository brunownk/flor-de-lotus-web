import {
  ChangeEvent,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import key from 'keymaster';

import { I18_DEFAULT_NS } from '@config/app-keys';

import { normalizeString } from '@utils/normalize-string';

import { useTranslateRoutesName } from '@hooks/useTranslateRoutesName';

import { IModalRef } from '@components/Modal';
import { allPrivateRoutesPaths } from '@routes/router';

export function useSearchPageController() {
  const [searchTerm, setSearchTerm] = useState('');

  const modalRef = useRef<IModalRef>(null);

  const deferredSearchTerm = useDeferredValue(searchTerm);

  const navigate = useNavigate();

  const { translatedRoutes } = useTranslateRoutesName('id', allPrivateRoutesPaths);

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'layouts.private.header.search-pages',
  });

  const filteredContacts = useMemo(
    () =>
      translatedRoutes
        .map((route: any) => {
          const lowerCaseTerm = deferredSearchTerm.toLowerCase().trim();
          const parts = route.path.split(
            new RegExp(`(${lowerCaseTerm})`, 'gi'),
          );
          return {
            ...route,
            pathParts: parts,
          };
        })
        .filter(
          (route: any) =>
            normalizeString(route.id).includes(normalizeString(deferredSearchTerm)) ||
            normalizeString(route.path).includes(normalizeString(deferredSearchTerm))
        ),
    [translatedRoutes, deferredSearchTerm],
  );

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
  };
}
