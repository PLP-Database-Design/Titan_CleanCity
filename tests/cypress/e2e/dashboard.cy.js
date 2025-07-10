describe('Dashboard & Analytics', () => {
  it('Displays dashboard stats', () => {
    cy.visit('http://localhost:3000/dashboard');
    cy.contains('Statistics').should('exist');
  });

  it('Shows leaderboards and charts', () => {
    cy.visit('http://localhost:3000/dashboard');
    cy.contains('Leaderboard').should('exist');
    cy.get('canvas').should('exist');
  });
});
