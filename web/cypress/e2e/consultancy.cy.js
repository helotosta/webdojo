import { personal, company } from '../fixtures/consultancy.json'

describe('Formulário de Consultoria', () => {
    beforeEach(() => {
        cy.login()
        cy.goTo('Formulários', 'Consultoria')
    })

    it('Deve solicitar consultoria individual', () => {
        cy.fillConsultancyForm(personal)
        cy.submitConsultancyForm()
        cy.validateConsultancymodal()

        // fechar modal de mensagem de cadastro realizado
        cy.contains('button', 'Fechar')
            .should('be.visible')
        cy.wait(1000) // espera 2 segundos

        // clica após esperar
        cy.contains('button', 'Fechar')
            .click()

    })

    it('Deve solicitar consultoria In Company', () => {
        cy.fillConsultancyForm(company)
        cy.submitConsultancyForm()
        cy.validateConsultancymodal()

        // fechar modal de mensagem de cadastro realizado
        cy.contains('button', 'Fechar')
            .should('be.visible')
        cy.wait(1000) // espera 2 segundos

        // clica após esperar
        cy.contains('button', 'Fechar')
            .click()

    })

    it('Deve verificar os campos obrigatórios', () => {
        cy.submitConsultancyForm()

        // constante criada para um codigo mais limpo, onde verificará se os campos possuem a mensagem de obrigatoriedade referida
        const requiredFields = [
            { label: 'Nome Completo', message: 'Campo obrigatório' },
            { label: 'Email', message: 'Campo obrigatório' },
            { label: 'termos de uso', message: 'Você precisa aceitar os termos de uso' }
        ]
        // //label[text()="Nome Completo *"]/..//p

        requiredFields.forEach(({ label, message }) => {
            cy.contains('Label', label)
                .parent()
                .find('p') //encontre o elemento pai
                .should('be.visible')
                .should('have.text', message)
                .and('have.class', 'text-red-400')
                .and('have.css', 'color', 'rgb(248, 113, 113)')
        })
    })

})

