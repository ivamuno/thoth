describe('App', () => {
  it('should render the catalog', () => {
    cy.visit('/');
    cy.contains('GetPaid Catalog');
  });
});
