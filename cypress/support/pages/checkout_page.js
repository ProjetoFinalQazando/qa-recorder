///<reference types="cypress" />
const elementos = {

buttons:{

}

}

export default{

    validarUrlStripe(urlstripe){
        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen');
        });
        cy.contains('button', 'Fazer Upgrade - R$ 29,90/mês').should('be.visible')
            .should('be.enabled').click()

        cy.get('@windowOpen').should('be.called');

        cy.get('@windowOpen').then((stub) => {
            const url = stub.getCall(0).args[0];

            expect(url).to.include(urlstripe);
            cy.log('URL GERADA CORRETAMENTE', url)
        })
    }
}