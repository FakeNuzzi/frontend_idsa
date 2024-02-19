describe('Medico Login Page', () => {
    beforeEach(() => {
      // Assuming you're serving your app locally on port 3000
      cy.visit('http://localhost:3000/loginMedico');
    });
  
    it('displays login form', () => {
      cy.get('form').should('be.visible');
      cy.get('input[id="email"]').should('be.visible');
      cy.get('input[id="password"]').should('be.visible');
      cy.get('.btn.btn-success').should('be.visible');
    });
  
    it('can log in with correct credentials', () => {
      cy.get('input[id="email"]').type('johnny.dini@example.com');
      cy.get('input[id="password"]').type('1234');
      cy.get('.btn.btn-success').click();
  
      cy.url().should('include', '/appuntamentiMedico');
    });
  
    it('does not navigate with wrong credentials', () => {
      cy.get('input[id="email"]').type('wronguser');
      cy.get('input[id="password"]').type('wrongpassword');
      cy.get('.btn.btn-success').click();
      cy.url().should('include', '/loginMedico');
    });
  });