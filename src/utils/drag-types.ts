import type { TObjectValues } from "types";

export const DRAG_TYPES = {
  BUN: "bun",
  INGREDIENT: "ingredient",
  INNER_INGREDIENT: "innerIngredient",
} as const;

export type TDragType = TObjectValues<typeof DRAG_TYPES>;
