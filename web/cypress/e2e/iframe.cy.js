describe('iFrame', () => {

    it('Deve poder tocar o video de exemplo', () => {

        cy.login()

        cy.contains('Video').click()

        cy.get('iframe[title="Video Player"]').click()
            .should('exist') // garatir que o elemento existe no html
            .its('0.contentDocument.body') // função usada para obter propriedades da janela (posição 0 = primeiro iframe localizado - busca o body do primeira iframe localizado)
            .then(cy.wrap) // then = callback - cy.wrap = recurso para obter um valor de um objeto, array ou elemento e transformar em um objeto do cypress
            .as('iFramePlayer') //alias utilizado para gravar o objeto encontrado acima 

        cy.get('@iFramePlayer') // alias
            .find('.play-button')
            .click()

        cy.get('@iFramePlayer')
            .find('.pause-button')
            .should('be.visible')
    })
})