describe('Teste Automatizado tela home', () => {
    beforeEach(() => {
        cy.visit('https://qa-recorder.com/')
    })
    describe('Navegação para seção Recursos', () => {
        it('Deve rolar até a seção "Recursos" ao clicar no link', () => {

            // Clica no botão ou link com texto "Recursos"
            cy.contains('Recursos').click();

            // Valida se a seção foi exibida
            cy.contains('h2', 'Recursos Poderosos para Automação de Testes')
                .should('be.visible')
                .and('have.text', 'Recursos Poderosos para Automação de Testes');
        });
    });
    it('Deve rolar até a seção "Preços" ao clicar no link', () => {

        // Clica no botão ou link com texto "Recursos"
        cy.contains('Preços').click();

        cy.contains('h2', 'Plano Simples e Transparente')
            .should('be.visible')
            .and('have.text', 'Plano Simples e Transparente');
    });
    describe('Valida navegação para Documentação', () => {
        it('Deve redirecionar corretamente após clicar em Documentação', () => {
            cy.visit('https://qa-recorder.com/');

            // Clica no link "Documentação"
            cy.contains('Documentação').click();

            // Valida se a URL mudou corretamente
            cy.url().should('include', '/documentation'); // ou o que for correto

            // Também pode validar o conteúdo da nova página
            cy.contains('h1', 'Documentação').should('be.visible'); // ajuste conforme seu layout
        });
    });
    it('Deve rolar até a seção "Contato" ao clicar no link', () => {

        // Clica no botão ou link com texto "Recursos"
        cy.contains('Contato').click();

        cy.contains('h2', 'Pronto para Revolucionar seus Testes?')
            .should('be.visible')
            .and('have.text', 'Pronto para Revolucionar seus Testes?');
    });
    it('Deve redirecionar para a Chrome Web Store ao clicar no botão', () => {
        cy.visit('https://qa-recorder.com/');

        // Espiona chamadas a window.open
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen');
        });

        // Clica no botão
        cy.contains('Baixar Extensão Grátis').should('be.visible').click();

        // Valida se a URL da Chrome Web Store foi chamada
        cy.get('@windowOpen').should('be.calledWithMatch', 'https://chromewebstore.google.com');
    });



    it('Deve tentar abrir o cliente de e-mail ao clicar no botão de contato', () => {
        cy.visit('https://qa-recorder.com/');

        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen');
        });

        cy.contains('button', 'qazando@gmail.com').click();

        cy.get('@windowOpen').should('be.calledWithMatch', /^mailto:qazando@gmail\.com/);
    });


    it('Deve abrir nova aba para iniciar conversa no WhatsApp', () => {
        cy.visit('https://qa-recorder.com/');

        cy.window().then(win => {
            cy.stub(win, 'open').as('windowOpen');
        });

        cy.contains('button', 'WhatsApp').click();

        cy.get('@windowOpen').should('be.calledWithMatch', /https:\/\/wa\.me\/5548991929692/);
    });

    it('Deve redirecionar para a tela de privacidade', () => {
        cy.visit('https://qa-recorder.com/');

        // Clica no link "Documentação"
        cy.contains('Privacidade').click();

        // Valida se a URL mudou corretamente
        cy.url().should('include', '/privacy'); // ou o que for correto

        // Também pode validar o conteúdo da nova página
        cy.contains('Política de Privacidade').should('be.visible'); // ajuste conforme seu layout
    });
    it('Deve verificar o link da comunidade', () => {
        cy.visit('https://qa-recorder.com/');

        cy.contains('a', 'Comunidade')
            .should('have.attr', 'href')
            .and('match', /discord\.gg\/ACZCvgE[EF]/); // Aceita E ou F no final
    });
});
