import type { TObjectValues } from "types";

const ingredientsRoot = "/ingredients";
const PROFILE = "/profile";
const ORDERS = `${PROFILE}/orders`;

export const ROUTES = {
  ROOT: "/",
  REGISTER: "/register",
  LOGIN: "/login",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  PROFILE,
  ORDERS,
  ORDER: `${ORDERS}/:orderId`,
  ORDERS_FEED: "/orders-feed",
  INGREDIENT: `${ingredientsRoot}/:ingredientId`,
  INGREDIENTS_ROOT: ingredientsRoot,
} as const;

export type TRoutes = TObjectValues<typeof ROUTES>;
