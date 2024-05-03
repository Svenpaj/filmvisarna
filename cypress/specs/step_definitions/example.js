import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('that I am on the first page', () => {
  cy.visit("/");
});

Then('I can see the text {string}', (a) => {
  cy.contains(a);
});

Then('I can see the navbar', () => {
  cy.get('nav').should('be.visible');
});

When('I click on a movie', () => {
  cy.get(':nth-child(1) > .react-multi-carousel-list > .react-multi-carousel-track > [data-index="9"] > .movie > .movie-image').click();
});

Then('I can see the movie page', () => {
  cy.url().should('include', '/movie');
});