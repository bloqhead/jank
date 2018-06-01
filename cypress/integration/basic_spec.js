describe('simple', function() {

  before( function() {
    cy.visit('https://meetup.com')
  });

  it('should - get element from the dom', function() {
    cy
      .get('.flex-item.navItem.logo.logo--script.align--left')
      .should('have.length', 1);
  });

  it('should - sign up button should contain "Sign Up"', function() {
    cy
      .get('.button--primary')
      .should('have.text','Sign Up')
  });

});
