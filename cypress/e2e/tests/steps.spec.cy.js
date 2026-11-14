
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given(/^I am on the home page$/, () => {
    cy.visit('/');
});

When(/^I click on login$/, () => {
	cy.get('[data-cy="landing-login-button"]').click();
});


Then(/^I should see login page$/, () => {
	cy.url().should('include', '/login');
});


            