describe('Tests E2E per la meva aplicació', () => {

  it('Comprova que el botó de l\'índex porta a projectes.html', () => {
      cy.visit('http://a23nicposrod.dam.inspedralbes.cat/index.html'); // Canvia per la teva ruta
      cy.contains('Projectes').click();
      cy.url().should('include', 'projectes.html');
  });

  it('Comprova que un enllaç de projectes.html porta a GitHub', () => {
      cy.visit('http://a23nicposrod.dam.inspedralbes.cat/projectes.html'); // Canvia per la teva ruta
      cy.get('a[href*="github.com"]').first().should('have.attr', 'href').and('include', 'github.com');
  });

});
