describe("Visit Home", () => {
  it("should navigate to home", () => {
    cy.visit("http://0.0.0.0:3000/");
  })
  it("There is 11 products on the page", () => {
    cy.get(".products article").should("have.length", 11);
  });
});
