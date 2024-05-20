import { KeyPrefix } from "i18next";
import { I18_DEFAULT_NS } from "@config/app-keys";

export interface IPageProps {
  pageKey?: KeyPrefix<typeof I18_DEFAULT_NS>;
}
