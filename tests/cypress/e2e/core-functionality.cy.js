describe('Core Functionality', () => {
  it('Schedules a waste pickup', () => {
    cy.schedulePickup({
      name: 'John Smith',
      location: 'Nairobi',
      phone: '0712345678',
      email: 'john@cleancity.com',
      pickupDate: '2025-07-10',
      wasteType: 'Organic',
      description: 'Several plastic bottles and containers'
    });
    cy.contains('Pickup scheduled').should('exist');
  });

  it('Validates empty pickup form', () => {
    cy.visit('http://localhost:3000/pickup');
    cy.get('button[type="submit"]').click();
    cy.contains('Please fill all required fields').should('exist');
  });
});
