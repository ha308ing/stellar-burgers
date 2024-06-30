const INGREDIENTS_ROOT = "/ingredients";
const PROFILE = "/profile";
const ORDERS = PROFILE + "/orders";

export const ROUTES = {
  ROOT: "/",
  REGISTER: "/register",
  LOGIN: "/login",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  PROFILE,
  ORDERS,
  ORDER: ORDERS + "/:orderId",
  ORDERS_FEED: "/orders-feed",
  INGREDIENT: INGREDIENTS_ROOT + "/:ingredientId",
  INGREDIENTS_ROOT,
};
