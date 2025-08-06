///<reference types="cypress" />

const elements = {

    buttons:{
        btnDownloadExtension: '.lucide.lucide-download.mr-2.h-4.w-4'
    },

    fields:{
        fieldEmail: '#email',
        fieldSenha: '#password'
    },

    class:{
        textoQatestRecorder: '.flex.items-center.justify-center.mb-4',
        statusAtualizado: '.div.text-sm.font-semibold',
        alertaPeriodoExpirado: '.text-red-700.font-medium',
        popupPeriodoTesteExpirado: '.text-sm.font-semibold',
        closeUpragePlano: '.sr-only',
        assinaturaExpirada: '.text-sm.font-semibold'
    }
}

export default{

    acessarUrlLogin(){
        cy.visit('/auth')
    },

    preencherLogin(login){
        cy.get(elements.fields.fieldEmail).type(login)
    },

    preencherSenha(password){
        cy.get(elements.fields.fieldSenha).type(password)
    },

    clicarNoBotaoEntrar(){
        cy.contains('button', 'Entrar').click()
    },

    clicarEmSair(){
        cy.contains('button', 'Sair').should('be.visible')
        .click()
    },

    ConfirmarLogoutComSucesso(){
        cy.get(elements.class.textoQatestRecorder).should('be.visible')
        cy.get(elements.fields.fieldEmail).should('be.visible')
        cy.get(elements.fields.fieldSenha).should('be.visible')
    },

    verificarStatus(){
        cy.contains('Verificar Status').should('be.visible')
        .click()
    },

    validarMsgPopupStatus(mensagem, mensagem2){
        cy.wait(2000)
        cy.contains(mensagem).should('be.visible')
        cy.contains(mensagem2).should('be.visible')
    },

    clicarEmBaixarExtensao(){
        cy.get(elements.buttons.btnDownloadExtension).should('be.visible')
        cy.contains('Instalar Extensão').click()
    },

    clicarEmBaixarExtensaoUrlChrome(urlChromeStore){
        //acessando novamente para recarregar a pagina e ser possivel fazer o stub da pagina aberta
        cy.visit('https://qa-recorder.com/', {
            onBeforeLoad(win) {
                cy.stub(win, 'open').as('windowOpen');
            },
        });

        cy.get(elements.buttons.btnDownloadExtension, {timeout: 6000}).should('be.visible')
        cy.contains('Instalar Extensão', {timeout: 6000}).click()

        cy.get('@windowOpen').should('be.called');

        cy.get('@windowOpen').then((stub) => {
            const url = stub.getCall(0).args[0];

            expect(url).to.include(urlChromeStore);
            cy.log('URL GERADA CORRETAMENTE', urlChromeStore)
        })
    },

    validarExibicaoMsgDownload(mensagem){
        cy.wait(2000)
        cy.contains(mensagem).should('be.visible')
    },

    validarAlertaPeriodoExpirado(mensagem){
        cy.get(elements.class.alertaPeriodoExpirado).should('have.text', mensagem)
    },
    validarAssinaturaExpirada(mensagem){
         cy.get(elements.class.assinaturaExpirada, { timeout: 6000 }).should('be.visible')
         .should('have.text', mensagem)
    },

    validarMsgPeriodoExpirado(mensagem){
        cy.get(elements.class.popupPeriodoTesteExpirado, {timeout: 6000}).should('be.visible')
        .should('have.text', mensagem)
    },

    validarBotaoDownloadDisabled(){
        cy.contains('button', 'Acesso Bloqueado').should('be.disabled')
    },

    assinarPlanoPremium(){
        cy.contains('button','Assinar Plano Premium').should('be.visible')
        .should('be.enabled').click()
    },

    verificaDisponibilidadeCliqueFazerUpgrad(){
        cy.contains('button', 'Fazer Upgrade - R$ 29,90/mês').should('be.visible')
        .should('be.enabled').click()
    },

    fazerUpgradeParaPremium(){
        cy.contains('button', 'Fazer Upgrade para Premium').should('be.visible')
        .should('be.enabled').click()
    },

    assinarAgora(){
        cy.contains('button', 'Assinar Agora').should('be.visible')
        .should('be.enabled').click()
    }
}