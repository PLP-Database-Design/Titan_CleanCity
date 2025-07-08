describe('Authentication System', () => {
  const demoEmail = 'user@cleancity.com';

  before(() => {
    cy.deleteUser(demoEmail);
  });

  after(() => {
    cy.deleteUser(demoEmail);
  });

  it('Registers a new user', () => {
    cy.registerUser({
      name: 'Demo User',
      email: demoEmail,
      password: 'password123'
    });
    cy.contains('Welcome, Demo User').should('exist');
  });

  it('Logs in existing user', () => {
    cy.loginUser({
      email: demoEmail,
      password: 'password123'
    });
    cy.contains('Dashboard').should('exist');
  });

  it('Rejects invalid login', () => {
    cy.loginUser({
      email: 'wrong@cleancity.com',
      password: 'wrongpass'
    });
    cy.contains('Invalid credentials').should('exist');
  });
});
