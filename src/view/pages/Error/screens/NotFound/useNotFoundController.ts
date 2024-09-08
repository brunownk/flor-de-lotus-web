import { I18_DEFAULT_NS } from '@config/app-keys';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export function useNotFoundController() {
  const navigate = useNavigate();

  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'pages.not-found',
  });

  const handleGoHome = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return { translate, handleGoHome };
}
