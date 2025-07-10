/// <reference types="cypress" />

describe('Core Functionality', () => {
  it('Schedules a waste pickup', () => {
    cy.schedulePickup({
      name: 'David Smith',
      location: 'Nairobi',
      phone: '0712345678',
      email: 'david@cleancity.com',
      pickupDate: '2025-07-10',
      wasteType: 'Plastic',
      description: 'Several plastic bottles and containers'
    });
    cy.contains('Pickup scheduled').should('exist');
  });

  it('Validates empty pickup form', () => {
    cy.visit('/pickup');
    cy.get('button[type="submit"]').click();
    cy.contains('Please fill all required fields').should('exist');
  });
});