describe('Content Management', () => {
  it('Posts a blog as admin', () => {
    cy.visit('http://localhost:3000/admin/blog');
    cy.get('input[name="title"]').type('New Awareness Post');
    cy.get('textarea[name="content"]').type('Keep your neighborhood clean!');
    cy.get('button[type="submit"]').click();
    cy.contains('Post published').should('exist');
  });

  it('Allows community interaction', () => {
    cy.visit('http://localhost:3000/community');
    cy.contains('Like').first().click();
    cy.contains('1 like').should('exist');
  });
});
