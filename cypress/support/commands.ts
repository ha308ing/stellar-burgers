/// <reference types="cypress" />

import { API } from "../../src/utils";

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add("load", () => {
  cy.intercept("GET", API.AUTH.USER, { fixture: "user" });
  cy.intercept("GET", API.INGREDIENTS, { fixture: "ingredients" });
  cy.intercept("POST", API.ORDERS, { fixture: "order" });
  cy.visit("/");

  cy.getIngredients();
  cy.getDropContainers();
  cy.get("[data-test-id=order-total]").as("orderTotal");
});

Cypress.Commands.add("getModalControls", () => {
  cy.get("[data-test-id=modal-button-close]").as("buttonModalClose");
  cy.get("[data-test-id=modal-overlay]").as("modalOverlay");
});

Cypress.Commands.add("getIngredients", () => {
  cy.get("[data-test-id=drag-ingredient-bun0]").as("bun0");
  cy.get("[data-test-id=drag-ingredient-bun1]").as("bun1");
  cy.get("[data-test-id=drag-ingredient-main1]").as("main1");
});

Cypress.Commands.add("getDropContainers", () => {
  cy.get("[data-test-id=drop-container-top]").as("dropTop");
  cy.get("[data-test-id=drop-container-middle]").as("dropMiddle");
  cy.get("[data-test-id=drop-container-bottom]").as("dropBottom");
});

Cypress.Commands.add("getOrderControls", () => {
  cy.get("[data-test-id=button-checkout]").as("buttonCheckout");
});

Cypress.Commands.add("getIngredientModal", () => {
  cy.get("[data-test-id=order-total]").as("orderTotal");
  cy.getModalControls();
  cy.get("[data-test-id=ingredient-details]").as("ingredientDetails");
});
