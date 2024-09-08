type FixArr<T> = T extends readonly any[]
  ? Omit<T, Exclude<keyof any[], number>>
  : T;

type DropInitDot<T> = T extends `.${infer U}` ? U : T;

type ExcludeDate<T> = T extends Date ? never : T;

type _DeepKeys<T> = T extends object
  ? {
      [K in (string | number) & keyof T]: `${
        | `.${K}`
        | (`${K}` extends `${number}`
            ? `[${K}]`
            : never)}${'' | _DeepKeys<FixArr<ExcludeDate<T[K]>>>}`;
    }[(string | number) & keyof T]
  : never;

export type DeepKeys<T> = DropInitDot<_DeepKeys<FixArr<ExcludeDate<T>>>>;
