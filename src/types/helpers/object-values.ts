export type TObjectValues<
  T extends Record<string, unknown>,
  Key = keyof T,
> = Key extends string
  ? T[Key] extends Record<string, unknown>
    ? TObjectValues<T[Key]>
    : T[Key]
  : never;
