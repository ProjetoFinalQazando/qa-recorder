///<reference types="cypress" />

const elements = {

    buttons: {

        btnCadastrar:'.text-blue-600',
        btnCriar: '.text-primary-foreground'

    },

    fields: {
        fildFullName: '#fullName',
        fildEmail: '#email',
        fildPassword: '#password',
        fildConfirmPassword: '#confirmPassword',
        fildStudentCode: '#studentCode',
    }

}

export default {
    acessarUrlCadastro() {
        cy.visit('/auth')
    },

    preencherNome(nome) {
        cy.get(elements.fields.fildFullName).type(nome)
    },

    preencherEmail(email) {
        cy.get(elements.fields.fildEmail).type(email)
    },

    preencherSenha(senha) {
        cy.get(elements.fields.fildPassword).type(senha)
    },  

    preecherConfirmarSenha(Confimesenha) {
        cy.get(elements.fields.fildConfirmPassword).type(Confimesenha)
    },

    preencherCodigoAluno(codigo) {
        cy.get(elements.fields.fildStudentCode).type(codigo)
    }

    
}


