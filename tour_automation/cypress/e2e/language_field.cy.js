describe('template spec', () => {
  it('passes', () => {
    it('Language field', () => {
      cy.get('.rc-picker').click();
      cy.get('.rc-picker-panel').within(() => {
        cy.get('.rc-picker-cell-inner:visible').filter((index, cell) => {
          return Cypress.$(cell).css('pointer-events') !== 'none';
        }).then($cells => {
          const randomIndex = Cypress._.random($cells.length - 1);
          cy.wrap($cells[randomIndex]).click();
        });
      });
  
      cy.get('.rc-picker-input').should('not.be.empty');
      cy.get('.rc-picker-input > input').then($input => {
        const firstDate = $input.val();
        cy.log(`Input value: ${firstDate}`);
    });
      cy.contains('Language')
      cy.get('.css-8mmkcg').eq(2).then($element => {
        if ($element.parents('.input-wrapper__disabled').length > 0) {
          cy.log('Element is disabled, skipping click.');
        } else {
          cy.get('.css-8mmkcg').eq(2).click();
          cy.get('.rc-select__menu-list [innerText*="23"]').click();
    }});
        });})});
