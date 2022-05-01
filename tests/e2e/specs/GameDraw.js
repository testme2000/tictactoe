describe('Player O Move Test', () => {
    beforeEach(function() {
      cy.visit('http://localhost:8080')
    })

    it('Game Draw', () => {
        // Validate Player X win on first row A1, B1, C1
        cy.reload()
            .get('#A1')
            .click({force: true}) // Player X Move
            .children('img')
            .should('have.length',1)
            .and('have.attr','width','100')
            .and('have.attr','src')
            .and('contains','data:image/png')
            .get('#A2') // Player O Move
            .click({force: true})
            .children('img')
            .should('have.length',1)
            .and('have.attr','width','100')
            .and('have.attr','src')
            .and('contains','data:image/png')
            .get('#A3') // Player X Move
            .click({force: true})
            .children('img')
            .should('have.length',1)
            .and('have.attr','width','100')
            .and('have.attr','src')
            .and('contains','data:image/png')
            .get('#B1') // Player O Move
            .click({force: true})
            .children('img')
            .should('have.length',1)
            .and('have.attr','width','100')
            .and('have.attr','src')
            .and('contains','data:image/png')
            .get('#B2') // Player X Move
            .click({force: true})
            .children('img')
            .should('have.length',1)
            .and('have.attr','width','100')
            .and('have.attr','src')
            .and('contains','data:image/png')
            .get('#B3') // Player O Move
            .click({force: true})
            .children('img')
            .should('have.length',1)
            .and('have.attr','width','100')
            .and('have.attr','src')
            .and('contains','data:image/png')
            .get('#C2') // Player X Move
            .click({force: true})
            .children('img')
            .should('have.length',1)
            .and('have.attr','width','100')
            .and('have.attr','src')
            .and('contains','data:image/png')
            .get('#C1') // Player O Move
            .click({force: true})
            .children('img')
            .should('have.length',1)
            .and('have.attr','width','100')
            .and('have.attr','src')
            .and('contains','data:image/png')
            .get('#C2') // Player X Move
            .click({force: true})
            .children('img')
            .should('have.length',1)
            .and('have.attr','width','100')
            .and('have.attr','src')
            .and('contains','data:image/png')
            .get('#C3') // Player X Move
            .click({force: true})
            .children('img')
            .should('have.length',1)
            .and('have.attr','width','100')
            .and('have.attr','src')
            .and('contains','data:image/png')
            .get('h2') // Verify final winning result
            .contains('Game Over, The Game is draw :  NO WINNER')
           // VALIDATE GAME DRAW
    })


})