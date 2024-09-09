/* import { App } from 'antd'; */
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { zodResolver } from "@hookform/resolvers/zod";

import { I18_DEFAULT_NS } from '@config/app-keys';

import { loginValidationSchema, LoginFormData } from '@validations/auth';

import { useAuth } from "@hooks/useAuth";
/* import { useSignInMutation } from "@services/user"; */

export function useLoginController() {
  const { t: translate } = useTranslation(I18_DEFAULT_NS, {
    keyPrefix: 'pages.login'
  });

  const { signin } = useAuth();
  /* const { mutate } = useSignInMutation();
  const { notification } = App.useApp(); */

  const methods = useForm<LoginFormData>({
    resolver: zodResolver(loginValidationSchema),
  });

  const {
    handleSubmit: hookFormHandleSubmit,
  } = methods;

  const handleSubmit = hookFormHandleSubmit(async () => {
    signin('mocked-access-token');

    /* mutate(data, {
      onSuccess: ({ accessToken }) => signin(accessToken),
      onError: () => notification.error({
        message: translate('error-message'),
        description: translate('error-description'),
      })
    }); */
  })

  return {
    methods,
    translate,
    handleSubmit,
  }
}
