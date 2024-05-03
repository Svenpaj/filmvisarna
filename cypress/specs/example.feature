Feature: Test homepage

    Scenario: See the image on the first page
        Given that I am on the first page
        Then I can see the text "Aktuellt på bio"

    Scenario: See the navbar on the first page
        Given that I am on the first page
        Then I can see the navbar

    Scenario: Click on a movie
        Given that I am on the first page
        When I click on a movie
        Then I can see the movie page