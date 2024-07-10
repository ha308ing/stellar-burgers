import { IBurgerConstructorState } from "../initial-state";

export const selectBurger = (state: IBurgerConstructorState) => state.burger;
