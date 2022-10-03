describe('empty spec', () => {
  before(() => {
    cy.visit("/")
  })
  // it("some test example", () => {
  //   cy.get('[data-testid="h1App"]')
  //     .contains("app")
  // })

  // it('test element h1 class example', () => {
  //   cy.get('[data-testid="h1App"]')
  //     .should('have.class', 'appH1')
  // })

  // it('test element books screen background color', () => {
  //   cy.get('[data-testid="h1-Screen-Books"]')
  //     .should('have.css', 'background-color', 'rgb(35, 35, 215)')
  // })

  // it('test element books screen class', () => {
  //   cy.get('[data-testid="h1-Screen-Books"]')
  //     .should('have.class', 'h1-screenBooks')
  // })

  // it('test element booksTikes screen background color', () => {
  //   cy.get('[data-testid="h1-tikes-Books"]')
  //     .should('have.css', 'background-color', 'rgb(185, 35, 35)')
  // })

  // it('test element booksTikes screen class', () => {
  //   cy.get('[data-testid="h1-tikes-Books"]')
  //   .should('have.class', 'h1-TikesBooks')
  // })

 it('test element booksTikes screen class', () => {
  cy.get('.MuiContainer-maxWidthLg')
    .should('have.class', 'booksScreen')
  })

  
  it('test element booksTikes screen background color', () => {
    cy.get('.MuiContainer-maxWidthLg')
      .should('have.css', 'background-color', 'rgb(4, 4, 22)')
  })
  // ('test element booksTikes screen background color', () => {
  //   cy.get('.MuiContainer-maxWidthLg')
  //     .should('have.style', 'margin-top: 5vh')
  // })

})