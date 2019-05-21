// / <reference types="Cypress" />

describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('has proper title', () => {
    cy.title().should('include', 'Reactjs Mentoring Program 2019');
  });

  it('makes a search by enter', () => {
    cy.get('.search-input').type('green{enter}');
    cy.wait(2000);
    cy.get('.movie-list-item h2').each($el => expect($el.text().toLowerCase()).to.contain('green'));
  });
});
