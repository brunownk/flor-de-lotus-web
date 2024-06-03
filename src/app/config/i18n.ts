import i18n from "i18next";
import detector from 'i18next-browser-languagedetector'
import Backend from 'i18next-xhr-backend'
import { initReactI18next } from "react-i18next";

import { I18_DEFAULT_NS } from "./app-keys";

i18n
  .use(Backend)
  .use(detector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['br', 'es', 'en'],
    fallbackLng: ['es', 'br', 'en'],
    backend: {
      loadPath: `/locales/{{lng}}/${I18_DEFAULT_NS}.json`,
    },
    defaultNS: I18_DEFAULT_NS,
  });

export default i18n;
