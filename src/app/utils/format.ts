import { useLocale } from "@hooks/useLocale";
import { format as dateFnsFormat } from "date-fns";
import { enUS, ptBR, es } from "date-fns/locale";

const locales = {
  en: enUS,
  br: ptBR,
  es: es,
};

export default function (date: Date, formatStr = "dd MM yyyy") {
  const { locale } = useLocale();

  return dateFnsFormat(date, formatStr, {
    locale: locales[locale],
  })
}
