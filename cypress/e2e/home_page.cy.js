describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("https://www.jumia.ug/");
    cy.get('button[aria-label="newsletter_popup_close-cta"]').click();
  });
});
