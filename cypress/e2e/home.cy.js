describe('Teste Automatizado', () => {
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
    it('Deve redirecionar para a tela de login', () => {
        cy.visit('https://qa-recorder.com/');

        // Clica no link "Documentação"
        cy.contains('Baixar Extensão Grátis').click();

        // Valida se a URL mudou corretamente
        cy.url().should('include', '/auth'); // ou o que for correto

        // Também pode validar o conteúdo da nova página
        cy.contains('Acesse sua conta para continuar').should('be.visible'); // ajuste conforme seu layout
    });
    it('Deve redirecionar para a tela de login', () => {
        cy.visit('https://qa-recorder.com/');

        // Clica no link "Documentação"
        cy.contains('Ver Demonstração').click();

        // Valida se a URL mudou corretamente
        cy.url().should('include', '/auth'); // ou o que for correto

        // Também pode validar o conteúdo da nova página
        cy.contains('Acesse sua conta para continuar').should('be.visible'); // ajuste conforme seu layout
    });
    it('Deve abrir o modal de login ao clicar no botão de e-mail', () => {
        cy.visit('https://qa-recorder.com/'); // ou URL da página onde está o botão

        // Clica no botão que contém o e-mail
        cy.contains('button', 'qazando@gmail.com').click();

        // Valida se o modal foi aberto
        cy.get('[role="dialog"], .modal, .MuiDialog-root') // ajuste conforme seu componente/modal
            .should('be.visible');

        // Valida se o modal contém algum texto esperado (exemplo genérico)
        cy.contains('Escolha uma conta').should('exist'); // ou outro texto como "Continuar com Google"
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
    it.only('Deve verificar o link da comunidade', () => {
        cy.visit('https://qa-recorder.com/');

        cy.contains('a', 'Comunidade')
            .should('have.attr', 'href')
            .and('match', /discord\.gg\/ACZCvgE[EF]/); // Aceita E ou F no final
    });
});