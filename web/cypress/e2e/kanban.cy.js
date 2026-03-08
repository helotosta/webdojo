describe('Kanban Board', () => {

    it('Deve mover uma tarefa de Todo para Done e atualizar o board', () => {
        cy.login()
        cy.contains('Kanban').click()

        const dataTransfer = new DataTransfer()

        //iniciar a ação de mover o objeto
        cy.contains('div[draggable="true"]', 'Documentar API')
        .trigger('dragstart', {dataTransfer})

        //soltar o objeto arrastado na coluna done
        cy.get('.column-done')
        .trigger('drop', {dataTransfer})
        .find('h3')
        .should('have.text', 'Done (4)') //validar a transferência do objeto para a coluna Done

        cy.get('.column-done') //validar se o objeto movido esta contido na coluna Done
        .should('include.text', 'Documentar API') 
        .and('include.text', 'Criar documentação da API com Swagger')
    })
})