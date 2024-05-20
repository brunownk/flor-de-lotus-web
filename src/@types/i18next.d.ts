import { DEFAULT_I18_NS } from '@config/i18n'
import Resources from './resources'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof DEFAULT_I18_NS
    resources: Resources
  }
}
