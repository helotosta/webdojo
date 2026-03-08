Cypress.Commands.add('fillConsultancyForm', (form) => {
    cy.get('#name').type(form.name)
    //cy.get('input[placeholder="Digite seu nome completo"]').type('Heloisa Tosta')
    cy.get('#email').type(form.email)
    //cy.get('input[placeholder="Digite seu email"]').type('tosta@teste.com.br')
    cy.get('input[placeholder="(00) 00000-0000"]')
        .type(form.phone)
    //.should('have.value', '(67) 99248-8789')

    // Seleção de valor em caixa seletora
    // cy.get('#consultancyType').select('inCompany') //caso tenha id
    cy.contains('label', 'Tipo de Consultoria') //caso nao tenha id
        .parent()
        .find('select')
        .select(form.consultancyType)


    if (form.personType === 'cpf') {
        // Escolha de tipo de pessoa (type: radio)
        // //span[text()="Pessoa Física"]/..//input
        cy.contains('label', 'Pessoa Física')
            .find('input')
            .click() //ou check()
            .should('be.checked') //garantir que Pessoa Física esta marcada

        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .should('be.not.checked') //doble check pra garantir que pessoa jurídica esta desmarcada

        cy.contains('label', 'CPF')
            .parent()
            .find('input')
            .type(form.document)
        //.should('have.value', '005.701.121-41')
    }

    if (form.personType === 'cnpj') {
        // Escolha de tipo de pessoa (type: radio)
        // //span[text()="Pessoa Física"]/..//input
        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .click() //ou check()
            .should('be.checked') //garantir que Pessoa Física esta marcada

        cy.contains('label', 'Pessoa Física')
            .find('input')
            .should('be.not.checked') //doble check pra garantir que pessoa jurídica esta desmarcada

        cy.contains('label', 'CNPJ')
            .parent()
            .find('input')
            .type(form.document)
        //.should('have.value', '005.701.121-41')
    }

    // array contendo os itens que desejo marcar 
    /*const discoveryChannels = [
        'Instagram',
        'LinkedIn',
        'Udemy',
        'YouTube',
        'Indicação de Amigo'
    ]*/

    // marcação de itens de acordo com array indicado acima (type: checkbox)
    form.discoveryChannels.forEach((channel) => {
        cy.contains('label', channel)
            .find('input')
            .check()
            .should('be.checked') //garantir que Pessoa Física esta marcada
    })

    // upload de arquivo - { force: true } força o upload quando o botão não está visivel para clique (hidden)
    cy.get('input[type="file"]')
        .selectFile(form.file, { force: true })

    // inserção de texto em area de texto
    cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
        .type(form.description)

    // array contendo as tags que desejo inserir
    /*const techs = [
        'Cypress',
        'Selenium',
        'Playwright',
        'Robot Framework'
    ]*/

    // inserção de tags de acordo com array indicado acima
    form.techs.forEach((tech) => {
        cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
            .type(tech)
            .type('{enter}')

        // validação se a tag inserida esta visivel
        cy.contains('label', 'Tecnologias')
            .parent()
            .contains('span', tech)
            .should('be.visible')
    })

    // Dar check nos Termos de Uso
    if (form.terms === true) {
        cy.contains('label', 'termos de uso')
            .find('input')
            .check()
    }
})

Cypress.Commands.add('submitConsultancyForm', () => {
    cy.contains('button', 'Enviar formulário')
        .click()
})

Cypress.Commands.add('validateConsultancymodal', () => {
    //Validação de cadastro realizado
    cy.get('.modal', { timeout: 7000 })
        .should('be.visible')
        .find('.modal-content')
        .should('be.visible')
        .and('have.text', 'Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
        .should('be.visible')
})