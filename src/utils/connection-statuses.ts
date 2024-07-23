import type { TObjectValues } from "types";

export const STATUSES = {
  PENDING: "PENDING",
  REJECTED: "REJECTED",
  FULFILLED: "FULFILLED",
} as const;

export type TConnectionStatus = TObjectValues<typeof STATUSES>;
