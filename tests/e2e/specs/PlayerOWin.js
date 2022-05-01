const { BFormRow } = require("bootstrap-vue")

describe('Player O Move Test', () => {
    beforeEach(function() {
      cy.visit('http://localhost:8080')
    })

    
    it('Validate Player O Win on First Row', () => {
        // Validate Player X win on first row A1, B1, C1
        cy.get('#C2')
            .click({force: true}) // Player X Move
            .children('img')
            .should('have.length',1)
            .and('have.attr','width','100')
            .and('have.attr','src')
            .and('contains','data:image/png')
            .get('#A1') // Player O Move
            .click()
            .children('img')
            .should('have.length',1)
            .and('have.attr','width','100')
            .and('have.attr','src')
            .and('contains','data:image/png')
            .get('#B3') // Player X Move
            .click({force: true})
            .children('img')
            .should('have.length',1)
            .and('have.attr','width','100')
            .and('have.attr','src')
            .and('contains','data:image/png')
            .get('#B1') // Player O Move
            .click()
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
            .get('#C1') // Player O Move
            .click()
            .children('img')
            .should('have.length',1)
            .and('have.attr','width','100')
            .and('have.attr','src')
            .and('contains','data:image/png')
            .get('h2') // Verify final winning result
            .contains('Game Over, Winner is O')
    })
    it('Validate Player O Win on Second Row', () => {
        cy.reload()
        .get('#A1')
        .click({force: true}) // Player X Move
        .children('img')
        .should('have.length',1)
        .and('have.attr','width','100')
        .and('have.attr','src')
        .and('contains','data:image/png')
        .get('#A2') // Player O Move
        .click()
        .children('img')
        .should('have.length',1)
        .and('have.attr','width','100')
        .and('have.attr','src')
        .and('contains','data:image/png')
        .get('#B3') // Player X Move
        .click({force: true})
        .children('img')
        .should('have.length',1)
        .and('have.attr','width','100')
        .and('have.attr','src')
        .and('contains','data:image/png')
        .get('#B2') // Player O Move
        .click()
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
        .get('#C2') // Player O Move
        .click()
        .children('img')
        .should('have.length',1)
        .and('have.attr','width','100')
        .and('have.attr','src')
        .and('contains','data:image/png')
        .get('h2') // Verify final winning result
        .contains('Game Over, Winner is O')
    })

    it('Validate Player O Win on Third Row', () => {
        // Validate Player O win on Third row A3, B3, C3
        cy.reload()
        .get('#A1')
        .click({force: true}) // Player X Move
        .children('img')
        .should('have.length',1)
        .and('have.attr','width','100')
        .and('have.attr','src')
        .and('contains','data:image/png')
        .get('#A3') // Player O Move
        .click({force: true})
        .children('img')
        .should('have.length',1)
        .and('have.attr','width','100')
        .and('have.attr','src')
        .and('contains','data:image/png')
        .get('#C1') // Player X Move
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
        .get('#C3') // Player O Move
        .click({force: true})
        .children('img')
        .should('have.length',1)
        .and('have.attr','width','100')
        .and('have.attr','src')
        .and('contains','data:image/png')
        .get('h2') // Verify final winning result
        .contains('Game Over, Winner is O')
    })

    it('Validate Player O Win on First Column', () => {
        cy.reload()
        .get('#C1')
        .click({force: true}) // Player X Move
        .children('img')
        .should('have.length',1)
        .and('have.attr','width','100')
        .and('have.attr','src')
        .and('contains','data:image/png')
        .get('#A1') // Player O Move
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
        .get('#A2') // Player O Move
        .click({force: true})
        .children('img')
        .should('have.length',1)
        .and('have.attr','width','100')
        .and('have.attr','src')
        .and('contains','data:image/png')
        .get('#B3') // Player X Move
        .click({force: true})
        .children('img')
        .should('have.length',1)
        .and('have.attr','width','100')
        .and('have.attr','src')
        .and('contains','data:image/png')
        .get('#A3') // Player O Move
        .click({force: true})
        .children('img')
        .should('have.length',1)
        .and('have.attr','width','100')
        .and('have.attr','src')
        .and('contains','data:image/png')
        .get('h2') // Verify final winning result
        .contains('Game Over, Winner is O')
    })

    it('Validate Player O Win on Second Column', () => {
        // Validate Player O win on first row B1, B2, B3
        cy.reload()
        .get('#C1')
        .click({force: true}) // Player X Move
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
        .get('#C3') // Player X Move
        .click({force: true})
        .children('img')
        .should('have.length',1)
        .and('have.attr','width','100')
        .and('have.attr','src')
        .and('contains','data:image/png')
        .get('#B2') // Player O Move
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
        .get('#B3') // Player O Move
        .click({force: true})
        .children('img')
        .should('have.length',1)
        .and('have.attr','width','100')
        .and('have.attr','src')
        .and('contains','data:image/png')
        .get('h2') // Verify final winning result
        .contains('Game Over, Winner is O')
    })
    it('Validate Player O Win on Third Column', () => {
        // Validate Player O win on first Column C1, C2, C3
        cy.reload()
        .get('#A1')
        .click({force: true}) // Player X Move
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
        .get('#B3') // Player X Move
        .click({force: true})
        .children('img')
        .should('have.length',1)
        .and('have.attr','width','100')
        .and('have.attr','src')
        .and('contains','data:image/png')
        .get('#C2') // Player O Move
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
        .get('#C3') // Player O Move
        .click({force: true})
        .children('img')
        .should('have.length',1)
        .and('have.attr','width','100')
        .and('have.attr','src')
        .and('contains','data:image/png')
        .get('h2') // Verify final winning result
        .contains('Game Over, Winner is O')
    })
    it('Validate Player O Win on Front Diagonal', () => {
        // Validate Player X win on first row C1, C2, C3
        cy.reload()
            .get('#A2')
            .click() // Player X Move
            .children('img')
            .should('have.length',1)
            .and('have.attr','width','100')
            .and('have.attr','src')
            .and('contains','data:image/png')
            .get('#A1') // Player O Move
            .click()
            .children('img')
            .should('have.length',1)
            .and('have.attr','width','100')
            .and('have.attr','src')
            .and('contains','data:image/png')
            .get('#B1') // Player X Move
            .click()
            .children('img')
            .should('have.length',1)
            .and('have.attr','width','100')
            .and('have.attr','src')
            .and('contains','data:image/png')
            .get('#B2') // Player O Move
            .click()
            .children('img')
            .should('have.length',1)
            .and('have.attr','width','100')
            .and('have.attr','src')
            .and('contains','data:image/png')
            .get('#C1') // Player X Move
            .click({force: true})
            .children('img')
            .should('have.length',1)
            .and('have.attr','width','100')
            .and('have.attr','src')
            .and('contains','data:image/png')
            .get('#C3') // Player O Move
            .click({force: true})
            .children('img')
            .should('have.length',1)
            .and('have.attr','width','100')
            .and('have.attr','src')
            .and('contains','data:image/png')
            .get('h2') // Verify final winning result
            .contains('Game Over, Winner is O')
    })

    it('Validate Player O Win on Back Diagonal', () => {
        // Validate Player X win on first row C1, C2, C3
        cy.reload()
            .get('#A1')
            .click({force: true}) // Player X Move
            .children('img')
            .should('have.length',1)
            .and('have.attr','width','100')
            .and('have.attr','src')
            .and('contains','data:image/png')
            .get('#A3') // Player O Move
            .click({force: true})
            .children('img')
            .should('have.length',1)
            .and('have.attr','width','100')
            .and('have.attr','src')
            .and('contains','data:image/png')
            .get('#B1') // Player X Move
            .click({force: true})
            .children('img')
            .should('have.length',1)
            .and('have.attr','width','100')
            .and('have.attr','src')
            .and('contains','data:image/png')
            .get('#B2') // Player O Move
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
            .get('#C1') // Player X Move
            .click({force: true})
            .children('img')
            .should('have.length',1)
            .and('have.attr','width','100')
            .and('have.attr','src')
            .and('contains','data:image/png')
            .get('h2') // Verify final winning result
            .contains('Game Over, Winner is O')
    })


})