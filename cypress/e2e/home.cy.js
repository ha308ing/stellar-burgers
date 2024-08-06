describe("test home page", () => {
  beforeEach(() => {
    cy.load();
  });

  describe("test constructor", () => {
    beforeEach(() => {
      cy.get("[data-test-id=drag-ingredient-bun1]").trigger("dragstart");
      cy.get("[data-test-id=drop-container-top]").trigger("drop");
      cy.get("[data-test-id=drag-ingredient-main1]").trigger("dragstart");
      cy.get("[data-test-id=drop-container-middle]").trigger("drop");
    });

    it("should drag and drop bun", () => {
      cy.get("[data-test-id=drop-container-top]").should(
        "contain.text",
        "Булка 2",
      );
    });

    it("should drag and drop ingredient", () => {
      cy.get("[data-test-id=drop-container-middle]").should(
        "contain.text",
        "Начинка 2",
      );
    });

    it("should replace bun", () => {
      cy.get("[data-test-id=drag-ingredient-bun0]").trigger("dragstart");
      cy.get("[data-test-id=drop-container-bottom]").trigger("drop");
      cy.get("[data-test-id=drop-container-top]").should(
        "contain.text",
        "Булка 1",
      );
    });

    it("drag and drop should update order total", () => {
      cy.get("[data-test-id=order-total]").should("contain.text", 3);
    });

    it("should place order and show modal", () => {
      cy.get("[data-test-id=button-checkout]").click();
      cy.get("[data-test-id=order-details]")
        .should("contain.text", "orderName")
        .should("contain.text", 2)
        .should("contain.text", "идентификатор заказа");
    });

    it("should close modal and clear constructor", () => {
      cy.get("[data-test-id=button-checkout]").click();
      cy.get("[data-test-id=modal-button-close]").click();
      cy.get("[data-test-id=order-total]").should("contain.text", 0);
    });
  });

  describe("test ingredient modal", () => {
    beforeEach(() => {
      cy.get("[data-test-id=drag-ingredient-bun1]").click();
    });

    it("should show ingredient modal", () => {
      cy.get("[data-test-id=ingredient-details]")
        .should("contain.text", "Детали ингридиента")
        .should("contain.text", "Булка 2");
    });

    it("should close ingredient modal with close button", () => {
      cy.get("[data-test-id=modal-button-close]").click();
      cy.get("[data-test-id=ingredient-details]").should("not.exist");
      cy.location().should("have.a.property", "pathname", "/");
    });

    it("should close ingredient modal with overlay click", () => {
      cy.get("[data-test-id=modal-overlay]").click({ force: true });
      cy.get("[data-test-id=ingredient-details]").should("not.exist");
      cy.location().should("have.a.property", "pathname", "/");
    });
  });
});
