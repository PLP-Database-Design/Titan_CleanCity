describe('Content Management', () => {
  it('Posts a blog as admin', () => {
    cy.visit('https://686b95c4f8c3190008f5a8f0--cleancity-waste-management.netlify.app/admin/blog');
    cy.get('input[name="title"]').type('New Awareness Post');
    cy.get('textarea[name="content"]').type('Keep your neighborhood clean!');
    cy.get('button[type="submit"]').click();
    cy.contains('Post published').should('exist');
  });

  it('Allows community interaction', () => {
    cy.visit('/community');
    cy.contains('Like').first().click();
    cy.contains('1 like').should('exist');
  });
});
