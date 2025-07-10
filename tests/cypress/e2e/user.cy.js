/// <reference types="cypress" />

describe('User Management', () => {
  it('Updates user profile', () => {
    cy.visit('/profile');
    cy.get('input[name="name"]').clear().type('Updated Name');
    cy.get('button[type="submit"]').click();
    cy.contains('Profile updated').should('exist');
  });

  it('Submits feedback', () => {
    cy.submitFeedback('Great app!');
    cy.contains('Feedback submitted').should('exist');
  });
});