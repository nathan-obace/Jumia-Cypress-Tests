describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("");
    cy.get('button[aria-label="newsletter_popup_close-cta"]').click();
  });
});
