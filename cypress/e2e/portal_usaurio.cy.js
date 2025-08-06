///<reference types="cypress" />
import telas from '../utils/devices';
import portal_usuarioPage from '../support/pages/portal_usuario.page';

//USUARIOS
const userPremium = 'ronaldo@gmail.com'
const userFreeVencido = 'ronaldo2@gmail.com'
const userBoletoVencido = 'ronaldo3@gmail.com'

//SENHAS
const passwordDefault = '123456'

//MENSAGENS
const msgPopupStatus = 'Status Atualizado'
const msgStatusContaVerificado = 'Status da conta foi verificado com sucesso.'
const preparandoDownload = 'Preparando Download...'
const alertaPeriodoExpirado = '⏰ Seu período de teste gratuito de 3 dias expirou. Faça upgrade para o plano Premium.'
const alertaperiodoDeTesteExpirado = '⏰ Período de Teste Expirado'
const msgAssinaturaExpirada = '💳 Assinatura Expirada'

//URL
const urlChromeWebStore = 'https://chromewebstore.google.com/detail/qa-test-recorder/aoiibokbpblimjokjhdphikaifonccoh'



telas.forEach(dipositivos => {

    describe('Portal do Usuario', () => {

        beforeEach('VALIDACAO EM MAIS DE UMA TELA', () => {

            if (dipositivos !== 'desktop') {
                cy.viewport(dipositivos)


            } else {

            }

        })

        it('Realizar logout', () => {
            portal_usuarioPage.acessarUrlLogin()
            portal_usuarioPage.preencherLogin(userPremium)
            portal_usuarioPage.preencherSenha(passwordDefault)
            portal_usuarioPage.clicarNoBotaoEntrar()
            portal_usuarioPage.clicarEmSair()
            portal_usuarioPage.ConfirmarLogoutComSucesso()
        })

        it('Verificar status usuario premium', () => {
            portal_usuarioPage.acessarUrlLogin()
            portal_usuarioPage.preencherLogin(userPremium)
            portal_usuarioPage.preencherSenha(passwordDefault)
            portal_usuarioPage.clicarNoBotaoEntrar()
            portal_usuarioPage.verificarStatus()
            portal_usuarioPage.validarMsgPopupStatus(msgPopupStatus, msgStatusContaVerificado)
        })

        it('Baixar extensao usuario premium', () => {
            portal_usuarioPage.acessarUrlLogin()
            portal_usuarioPage.preencherLogin(userPremium)
            portal_usuarioPage.preencherSenha(passwordDefault)
            portal_usuarioPage.clicarNoBotaoEntrar()
            portal_usuarioPage.clicarEmBaixarExtensao()
            portal_usuarioPage.clicarEmBaixarExtensaoUrlChrome(urlChromeWebStore)
        })

        it('Verificar status usuario free vencido', () => {
            portal_usuarioPage.acessarUrlLogin()
            portal_usuarioPage.preencherLogin(userFreeVencido)
            portal_usuarioPage.preencherSenha(passwordDefault)
            portal_usuarioPage.clicarNoBotaoEntrar()
            portal_usuarioPage.validarAlertaPeriodoExpirado(alertaPeriodoExpirado)
            portal_usuarioPage.verificarStatus()
            portal_usuarioPage.validarMsgPeriodoExpirado(alertaperiodoDeTesteExpirado)
        })

        it('Tentativa de baixar extensao com usuario free vencido', () =>{
            portal_usuarioPage.acessarUrlLogin()
            portal_usuarioPage.preencherLogin(userFreeVencido)
            portal_usuarioPage.preencherSenha(passwordDefault)
            portal_usuarioPage.clicarNoBotaoEntrar()
            portal_usuarioPage.validarBotaoDownloadDisabled()
        })

        it('Assinar plano usuario free vencido', () =>{
            portal_usuarioPage.acessarUrlLogin()
            portal_usuarioPage.preencherLogin(userFreeVencido)
            portal_usuarioPage.preencherSenha(passwordDefault)
            portal_usuarioPage.clicarNoBotaoEntrar()
            portal_usuarioPage.assinarPlanoPremium()
            portal_usuarioPage.verificaDisponibilidadeCliqueFazerUpgrad()
        })

        it('Fazer upgrade para premium usuario free vencido', () =>{
            portal_usuarioPage.acessarUrlLogin()
            portal_usuarioPage.preencherLogin(userFreeVencido)
            portal_usuarioPage.preencherSenha(passwordDefault)
            portal_usuarioPage.clicarNoBotaoEntrar()
            portal_usuarioPage.fazerUpgradeParaPremium()
            portal_usuarioPage.verificaDisponibilidadeCliqueFazerUpgrad()
        })

         it('Assinar agora usuario free vencido', () =>{
            portal_usuarioPage.acessarUrlLogin()
            portal_usuarioPage.preencherLogin(userFreeVencido)
            portal_usuarioPage.preencherSenha(passwordDefault)
            portal_usuarioPage.clicarNoBotaoEntrar()
            portal_usuarioPage.assinarAgora()
            portal_usuarioPage.verificaDisponibilidadeCliqueFazerUpgrad()
        })


        it('Verificar status usuario boleto vencido', () =>{
            portal_usuarioPage.acessarUrlLogin()
            portal_usuarioPage.preencherLogin(userBoletoVencido)
            portal_usuarioPage.preencherSenha(passwordDefault)
            portal_usuarioPage.clicarNoBotaoEntrar()
            portal_usuarioPage.verificarStatus()
            portal_usuarioPage.validarAssinaturaExpirada(msgAssinaturaExpirada)

        })

        it('Baixar extensao usuario boleto vencido', () => {
            portal_usuarioPage.acessarUrlLogin()
            portal_usuarioPage.preencherLogin(userBoletoVencido)
            portal_usuarioPage.preencherSenha(passwordDefault)
            portal_usuarioPage.clicarNoBotaoEntrar()
            portal_usuarioPage.clicarEmBaixarExtensaoUrlChrome(urlChromeWebStore)
        })

    });



})