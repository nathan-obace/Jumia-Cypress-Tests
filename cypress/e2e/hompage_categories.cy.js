describe("Checking categories functionality", () => {
  beforeEach(() => {
    cy.visit("https://www.jumia.ug/").then(() => {
      cy.get('button[aria-label="newsletter_popup_close-cta"]').click();
    });
  });

  it("Hovers over Supermaket and displays options", () => {
    cy.get(".text")
      .contains("Supermarket")
      .realHover({ pointer: "mouse" })
      .then(() => {
        cy.get(".tit").should("have.attr", "href", "/food-cupboard-supplies/");
      });
  });

  it("Hovers over Phones & Tablets and displays options", () => {
    cy.get(".text")
      .contains("Phones & Tablets")
      .realHover({ pointer: "mouse" });
  });

  it("Hovers over Home & Office and displays options", () => {
    cy.get(".text").contains("Home & Office").realHover({ pointer: "mouse" });
  });

  it("Hovers over Appliances and displays options", () => {
    cy.get(".text").contains("Appliances").realHover({ pointer: "mouse" });
  });

  it("Hovers over Electronics and displays options", () => {
    cy.get(".text").contains("Electronics").realHover({ pointer: "mouse" });
  });

  it("Hovers over Health & Beauty and displays options", () => {
    cy.get(".text").contains("Health & Beauty").realHover({ pointer: "mouse" });
  });

  it("Hovers over Fashion and displays options", () => {
    cy.get(".text").contains("Fashion").realHover({ pointer: "mouse" });
  });

  it("Hovers over Computing and displays options", () => {
    cy.get(".text").contains("Computing").realHover({ pointer: "mouse" });
  });

  it("Hovers over Sporting Goods and displays options", () => {
    cy.get(".text").contains("Sporting Goods").realHover({ pointer: "mouse" });
  });

  it("Hovers over Baby Products and displays options", () => {
    cy.get(".text").contains("Baby Products").realHover({ pointer: "mouse" });
  });

  it("Hovers over Gaming and displays options", () => {
    cy.get(".text").contains("Gaming").realHover({ pointer: "mouse" });
  });

  it("Hovers over Other Categories and displays options", () => {
    cy.get(".text")
      .contains("Other categories")
      .realHover({ pointer: "mouse" });
  });
});
