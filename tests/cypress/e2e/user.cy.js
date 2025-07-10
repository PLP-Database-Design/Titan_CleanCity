describe('User Management', () => {
  it('Updates user profile', () => {
    cy.visit('http://localhost:3000/profile');
    cy.get('input[name="name"]').clear().type('Updated Name');
    cy.get('button[type="submit"]').click();
    cy.contains('Profile updated').should('exist');
  });

  it('Submits feedback', () => {
    cy.submitFeedback('Great application!');
    cy.contains('Feedback submitted').should('exist');
  });
});
