import { getGreeting } from '../support/app.po';

describe('decision-tinder', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to decision-tinder!');
  });
});
