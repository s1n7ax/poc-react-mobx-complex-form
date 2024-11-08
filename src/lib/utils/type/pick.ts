export type TPick<T, U extends keyof T> = {
  [P in keyof Pick<T, U>]: T[P];
};
