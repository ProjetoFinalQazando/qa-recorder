///<reference types="cypress" />
import telas from '../utils/devices';
import portal_usuarioPage from '../support/pages/portal_usuario.page';
import checkout_page from '../support/pages/checkout_page';

//USUARIO
const userFreeVencido = 'ronaldo2@gmail.com'

//SENHAS
const passwordDefault = '123456'

//URL
const urlStripCheckout = 'https://checkout.stripe.com/'

telas.forEach(dispositivos => {

    describe('Validacao checkout', () => {

         beforeEach('Validacao em diferentes resolucoes', () =>{

            if (dispositivos !== 'desktop') {
                cy.viewport(dispositivos)

            }else{

            }
        }) 

         it('Validando url strip ao tentar fazer upgrade', () =>{
            portal_usuarioPage.acessarUrlLogin()
            portal_usuarioPage.preencherLogin(userFreeVencido)
            portal_usuarioPage.preencherSenha(passwordDefault)
            portal_usuarioPage.clicarNoBotaoEntrar()
            portal_usuarioPage.fazerUpgradeParaPremium()
            checkout_page.validarUrlStripe(urlStripCheckout)
            })
       
    })
    
})