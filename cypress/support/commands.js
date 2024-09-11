Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Laura')
      cy.get('#lastName').type('Assis')
      cy.get('#email').type('laura_gata@gmail.com')
      cy.get('#open-text-area').type('Laura a mais maravilhosa do mundo!!!!')
      cy.contains('button', 'Enviar').click()
})