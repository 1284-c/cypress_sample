/// <reference types="cypress" />
describe('My fisrst cypress Tests',()=>{
    beforeEach( ()=>{
        cy.visit('http://todomvc-app-for-testing.surge.sh')
        cy.get('h1').should('have.text','todos')
        cy.get('body').type("learn cypress{enter}")

        })
    it('should able to add new todo to the list', ()=>{
            cy.get('label').should('have.text','learn cypress')
            cy.get('.toggle').should('not.be.checked')
         })
    it('should be marked as completed todos', ()=>{
            cy.get('.toggle').click()
            cy.get('.toggle').should('be.checked')
    
        })
     it('should clear the completed todos ', ()=>{
        cy.get('.toggle').click()
        cy.get('.clear-completed').click()
        cy.get('label').should('not.have.text','learn cypress') 
        
         })

        
})

