import type { TObjectValues } from "types";

const ingredientsRoot = "/ingredients";
const PROFILE = "/profile";
const ORDERS = `${PROFILE}/orders`;
const ORDERS_FEED = "/feed";

export const ROUTES = {
  ROOT: "/",
  REGISTER: "/register",
  LOGIN: "/login",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  PROFILE,
  ORDERS,
  ORDER: `${ORDERS}/:orderNumber`,
  ORDERS_FEED,
  ORDER_FEED: `${ORDERS_FEED}/:orderNumber`,
  INGREDIENT: `${ingredientsRoot}/:ingredientId`,
  INGREDIENTS_ROOT: ingredientsRoot,
} as const;

export type TRoutes = TObjectValues<typeof ROUTES>;
