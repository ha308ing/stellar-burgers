export type TComponentProps<T> = T extends
  | ((props: infer P) => React.JSX.Element)
  | React.FC<infer P>
  ? P
  : never;
