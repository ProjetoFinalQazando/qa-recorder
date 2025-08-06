///<reference types="cypress" />

import cadastro_usuario_page from "../support/pages/cadastro_usuario._page"
import telas from '../utils/devices';


telas.forEach(dipositivos => {

    describe('Validações do formulário de criação de conta', () => {

        beforeEach(() => {
            cadastro_usuario_page.acessarUrlCadastro()


            if (dipositivos !== 'desktop') {
                cy.viewport(dipositivos)


            }


        })



        it('Deve criar conta com dados válidos e com código do aluno', () => {
            cy.get('.text-blue-600').click()
            cy.get('#fullName').click();
            cy.get('#fullName').type('michael felipe');
            cy.get('#email').click();
            cy.get('#email').type('michaelfelipe180@gmail.com');
            cy.get('#password').click();
            cy.get('#password').type('Agatha@21');
            cy.get('#confirmPassword').click();
            cy.get('#confirmPassword').type('Agatha@21');
            cy.get('#studentCode').type('ALUNOQAZANDOQA');
            cy.get('.text-primary-foreground').click()
        })

        it('Deve permitir criação de conta sem preencher o código do aluno', () => {
            cy.get('.text-blue-600').click()
            cy.get('#fullName').type('test test')
            cy.get('#email').type('michaelfelipe180+1@gmail.com')
            cy.get('#password').type('Senha@123')
            cy.get('#confirmPassword').type('Senha@123')
            cy.get('.text-primary-foreground').click()

        })


        it('Deve exibir mensagem de campo obrigatório se nome estiver vazio', () => {
            // Clica no botão sem preencher o campo nome
            cy.get('.text-blue-600').click()
            cy.get('#email').type('teste@exemplo.com')
            cy.get('#password').type('Senha123')
            cy.get('#confirmPassword').type('Senha123')
            cy.get('.text-primary-foreground').click()

            // Verifica a mensagem de validação nativa do browser
            cy.get('#fullName').then($input => {
                expect($input[0].checkValidity()).to.be.false
                expect($input[0].validationMessage).to.not.be.empty

            })
        })


        it('Deve exibir mensagem de campo obrigatório se email estiver vazio', () => {
            // Clica no botão sem preencher o campo nome
            cy.get('.text-blue-600').click()
            cy.get('#fullName').type('Teste Usuário')
            cy.get('#password').type('Senha123')
            cy.get('#confirmPassword').type('Senha123')
            cy.get('.text-primary-foreground').click()

            // Verifica a mensagem de validação nativa do browser
            cy.get('#email').then($input => {
                expect($input[0].checkValidity()).to.be.false
                expect($input[0].validationMessage).to.not.be.empty

            })
        })


        it('Deve exibir mensagem de campo email preenchhido incorretamente', () => {
            // Clica no botão sem preencher o campo nome
            cy.get('.text-blue-600').click()
            cy.get('#fullName').type('Teste Usuário')
            cy.get('#email').type('teste.com')
            cy.get('#password').type('Senha123')
            cy.get('#confirmPassword').type('Senha123')

            cy.get('.text-primary-foreground').click()

            // Verifica que o campo e-mail é inválido
            cy.get('#email').then($input => {
                expect($input[0].checkValidity()).to.be.false;
                const mensagem = $input[0].validationMessage;

                // Validação mais flexível para não depender da linguagem do navegador
                expect(mensagem).to.include('@');
            })
        })


        it('Deve exibir mensagem de campo obrigatório senha estiver vazia', () => {
            // Clica no botão sem preencher o campo nome
            cy.get('.text-blue-600').click()
            cy.get('#fullName').type('Teste Usuário')
            cy.get('#email').type('teste@exemplo.com')
            cy.get('.text-primary-foreground').click()

            // Verifica a mensagem de validação nativa do browser
            cy.get('#password').then($input => {
                expect($input[0].checkValidity()).to.be.false
                expect($input[0].validationMessage).to.not.be.empty

            })
        })


        it('Campo de senha deve estar seguro (type=password e visível)', () => {
            cy.get('.text-blue-600').click()
            cy.get('#fullName').type('Teste Usuário')
            cy.get('#email').type('michaelfelipe180@gmail.com');
            cy.get('#password')
                .should('exist')
                .and('be.visible')
                .and('have.attr', 'type', 'password');

            // Digita e garante que o valor foi aplicado (mas não visível na tela)
            cy.get('#password').type('123456');

            cy.get('#password').should('have.value', '123456');
        });

        it('Deve exibir mensagem de campo obrigatório "confirme a senha" estiver vazia', () => {
            // Clica no botão sem preencher o campo nome
            cy.get('.text-blue-600').click()
            cy.get('#fullName').type('Teste Usuário')
            cy.get('#email').type('teste@exemplo.com')
            cy.get('.text-primary-foreground').click()

            // Verifica a mensagem de validação nativa do browser
            cy.get('#confirmPassword').then($input => {
                expect($input[0].validationMessage).to.eq('Preencha este campo.')
            })
        })

        it('Campo de senha deve estar seguro (type=password e visível)', () => {
            cy.get('.text-blue-600').click()
            cy.get('#fullName').type('Teste Usuário')
            cy.get('#email').type('michaelfelipe180@gmail.com');
            cy.get('#confirmPassword')
                .should('exist')
                .and('be.visible')
                .and('have.attr', 'type', 'password');

            // Digita e garante que o valor foi aplicado (mas não visível na tela)
            cy.get('#confirmPassword').type('123456');

            cy.get('#confirmPassword').should('have.value', '123456');
        });

        it('Deve exibir erro quando as senhas não coincidem', () => {
            cy.get('.text-blue-600').click()
            cy.get('#fullName').type('Teste Usuário')
            cy.get('#email').type('teste@exemplo.com')
            cy.get('#password').type('Senha123')
            cy.get('#confirmPassword').type('SenhaDiferente')
            cy.get('.text-primary-foreground').click()

            // Aguarda o toast aparecer e verifica o conteúdo
            cy.contains('As senhas não coincidem.', { timeout: 5000 }).should('be.visible')
        })




    })
})