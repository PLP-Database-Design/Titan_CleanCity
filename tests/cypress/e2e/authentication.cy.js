/// <reference types="cypress" />

describe('Authentication System', () => {
  const testEmail = 'user@cleancity.com';

  before(() => {
    cy.deleteUser(testEmail);
  });

  after(() => {
    cy.deleteUser(testEmail);
  });

  it('Registers a new user', () => {
    cy.registerUser({
      name: 'Demo User',
      email: testEmail,
      password: 'password123'
    });
    cy.contains('Welcome, Demo User').should('exist');
  });

  it('Logs in existing user', () => {
    cy.loginUser({
      email: testEmail,
      password: 'password123'
    });
    cy.contains('Dashboard').should('exist');
  });

  it('Rejects invalid login', () => {
    cy.loginUser({
      email: 'wrong@example.com',
      password: 'wrongpass'
    });
    cy.contains('Invalid credentials').should('exist');
  });
});