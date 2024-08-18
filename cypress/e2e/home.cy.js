describe("test home page", () => {
  beforeEach(() => {
    cy.load();
  });

  describe("test constructor", () => {
    beforeEach(() => {
      cy.get("@bun1").trigger("dragstart");
      cy.get("@dropTop").trigger("drop");
      cy.get("@main1").trigger("dragstart");
      cy.get("@dropMiddle").trigger("drop");
    });

    describe("construct burger", () => {
      it("should drag and drop bun", () => {
        cy.get("@dropTop").should("contain.text", "Булка 2");
      });

      it("should drag and drop ingredient", () => {
        cy.get("@dropMiddle").should("contain.text", "Начинка 2");
      });

      it("should replace bun", () => {
        cy.get("@bun0").trigger("dragstart");
        cy.get("@dropBottom").trigger("drop");
        cy.get("@dropTop").should("contain.text", "Булка 1");
      });

      it("drag and drop should update order total", () => {
        cy.get("@orderTotal").should("contain.text", 3);
      });
    });

    describe("place order", () => {
      beforeEach(() => {
        cy.getOrderControls();
      });

      it("should place order and show modal", () => {
        cy.get("@buttonCheckout").click();
        cy.get("[data-test-id=order-details]")
          .should("contain.text", "orderName")
          .should("contain.text", 2)
          .should("contain.text", "идентификатор заказа");
      });

      it("should close modal and clear constructor", () => {
        cy.get("@buttonCheckout").click();
        cy.getModalControls();
        cy.get("@buttonModalClose").click();
        cy.get("@orderTotal").should("contain.text", 0);
      });
    });
  });

  describe("test ingredient modal", () => {
    beforeEach(() => {
      cy.get("@bun1").click();
      cy.getIngredientModal();
    });

    it("should show ingredient modal", () => {
      cy.get("@ingredientDetails")
        .should("contain.text", "Детали ингридиента")
        .should("contain.text", "Булка 2");
    });

    it("should close ingredient modal with close button", () => {
      cy.get("@buttonModalClose").click();
      cy.get("@ingredientDetails").should("not.exist");
      cy.location().should("have.a.property", "pathname", "/");
    });

    it("should close ingredient modal with overlay click", () => {
      cy.get("@modalOverlay").click({ force: true });
      cy.get("@ingredientDetails").should("not.exist");
      cy.location().should("have.a.property", "pathname", "/");
    });
  });
});
