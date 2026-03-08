describe('Links abrindo nova guia/janela', () => {

    it('Validando o atributo do link do Instagram', () => {

        cy.login()

        cy.get('[data-cy="instagram-link"]')
            .should('have.attr', 'href', 'https://www.instagram.com/qapapito')
            .and('have.attr', 'target', '_blank')
    })

    it('Acessa link de termos de uso removendo o target blank', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')

        cy.contains('Formulários').click()

        cy.contains('a', 'termos de uso').click()
        .invoke('removeAttr', 'target') //remove o atributo target que faz abrir nova guia, para que seja aberta a url na mesma guia
        .click()

        cy.contains('Ao acessar e usar nossos serviços, você concorda em cumprir estes termos de uso')
        .should('be.visible')

    })
})