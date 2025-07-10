/// <reference types="cypress" />

describe('Dashboard & Analytics', () => {
  it('Displays dashboard stats', () => {
    cy.visit('/dashboard');
    cy.contains('Statistics').should('exist');
  });

  it('Shows leaderboards and charts', () => {
    cy.visit('/dashboard');
    cy.contains('Leaderboard').should('exist');
    cy.get('canvas').should('exist');
  });
});