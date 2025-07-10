describe('Dashboard & Analytics', () => {
  it('Displays dashboard stats', () => {
    cy.visit('https://686b95c4f8c3190008f5a8f0--cleancity-waste-management.netlify.app/dashboard');
    cy.contains('Statistics').should('exist');
  });

  it('Shows leaderboards and charts', () => {
    cy.visit('https://686b95c4f8c3190008f5a8f0--cleancity-waste-management.netlify.app/dashboard');
    cy.contains('Leaderboard').should('exist');
    cy.get('canvas').should('exist');
  });
});
