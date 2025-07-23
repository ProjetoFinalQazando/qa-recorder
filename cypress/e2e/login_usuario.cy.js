/// <reference types="cypress" />

describe('Testes de Login', () => {
   
    it('Login realizado com sucesso', () => {
      cy.visit('https://qa-recorder.com/auth')
      cy.get('#email').type('julianagueds@gmail.com');
      cy.get('#password').click();
      cy.get('#password').type('1234');
      cy.get('.text-primary-foreground').click();
    })
  })

  it('Campo de senha deve estar seguro (type=password e visível)', () => {
    cy.visit('https://qa-recorder.com/auth')
    cy.get('#email').type('julianagueds@gmail.com');
    cy.get('#password')
      .should('exist')
      .and('be.visible')
      .and('have.attr', 'type', 'password');
    cy.get('#password').type('1234');
    cy.get('#password').should('have.value', '1234');
  })

  it('E-mail incorreto', () => {
    cy.visit('https://qa-recorder.com/auth')
    cy.get('#email').type('teste.com')
    cy.get('#password').type('Senha123')
    cy.get('.text-primary-foreground').click()
    cy.get('#email').then($input => {
      expect($input[0].checkValidity()).to.be.false;
      const mensagem = $input[0].validationMessage;
      expect(mensagem).to.include('@');
    })
  })


  it('Senha incorreta', () => {
    cy.visit('https://qa-recorder.com/auth')
    cy.get('#email').type('julianagueds@gmail.com')
    cy.get('#password').type('xxxxxxx')
    cy.get('.text-primary-foreground').click()
    cy.contains('Invalid login credentials', { timeout: 5000 }).should('be.visible')
  })


  it('Campo de e-mail não preenchido', () => {
    cy.visit('https://qa-recorder.com/auth')
    cy.get('#password').type('1234')
    cy.get('.text-primary-foreground').click()
    cy.get('#email').then($input => {
      expect($input[0].validationMessage).to.eq('Preencha este campo.')
    })
  })


  it('Campo de senha não preenchido', () => {
    cy.visit('https://qa-recorder.com/auth')
    cy.get('#email').type('teste@exemplo.com')
    cy.get('.text-primary-foreground').click()
    cy.get('#password').then($input => {
      expect($input[0].validationMessage).to.eq('Preencha este campo.')
    })
  })


  it('Acesso ao link "Não tem uma conta? Cadastre-se"', () => {
    cy.visit('https://qa-recorder.com/auth')
    cy.get('#email').type('julianagueds@gmail.com');
    cy.get('#password').type('1234');
    cy.contains('Não tem uma conta? Cadastre-se').click();
    cy.contains('.flex-col > .text-sm', 'Crie sua conta para começar').should('be.visible');
  })




