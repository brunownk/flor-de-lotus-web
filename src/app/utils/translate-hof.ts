import i18n from "@config/i18n";

export function translateHoF(preFixPath: string) {
  return (path: string) => i18n.t(`${preFixPath}.${path}`).toString();
}
