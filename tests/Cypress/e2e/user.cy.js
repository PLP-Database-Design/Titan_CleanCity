describe('User Management', () => {
  it('Updates user profile', () => {
    cy.visit('https://686b95c4f8c3190008f5a8f0--cleancity-waste-management.netlify.app/profile');
    cy.get('input[name="name"]').clear().type('Updated Name');
    cy.get('button[type="submit"]').click();
    cy.contains('Profile updated').should('exist');
  });

  it('Submits feedback', () => {
    cy.submitFeedback('Great application!');
    cy.contains('Feedback submitted').should('exist');
  });
});
