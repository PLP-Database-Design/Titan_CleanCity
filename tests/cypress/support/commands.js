Cypress.Commands.add('registerUser', ({ name, email, password }) => {
  cy.visit('http://localhost:3000/signup');
  cy.get('input[name="name"]').type(name);
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('loginUser', ({ email, password }) => {
  cy.visit('http://localhost:3000/login');
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('schedulePickup', ({ name, location, phone, email, pickupDate, wasteType, description }) => {
  cy.visit('http://localhost:3000/pickup');
  cy.get('input[name="name"]').type(name);
  cy.get('input[name="location"]').type(location);
  cy.get('input[name="phone"]').type(phone);
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="pickupDate"]').type(pickupDate);
  cy.get('select[name="wasteType"]').select(wasteType);
  cy.get('textarea[name="description"]').type(description);
  cy.get('button[type="submit"]').click();
});

Cypress.Commands.add('submitFeedback', (message) => {
  cy.visit('http://localhost:3000/feedback');
  cy.get('textarea[name="message"]').type(message);
  cy.get('button[type="submit"]').click();
});

