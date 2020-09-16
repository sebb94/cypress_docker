describe('Test', () => {
    it('Test step', () => {
        cy.visit('http://example.com')
    });

    it('should load h1 element', () => {
        cy.get('h1').should('be.visible')
        cy.get('p').should('be.visible')
    });
});