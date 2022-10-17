/// <reference types="cypress" />

describe("Filtering", () => {

    beforeEach(()=>{
        cy.visit('http://todomvc-app-for-testing.surge.sh')
        cy.get('h1').should('have.text','todos')
        cy.get('body').type("learn cypress{enter}")
        cy.get('body').type("learn javascript{enter}")
        cy.get('body').type("use mocha{enter}")

    })
    it('should have the added todos on the list',()=>{
        cy.get(':nth-child(3) > .view > label').should('have.text','learn cypress')
        cy.get(':nth-child(2) > .view > label').should('have.text','learn javascript')
        cy.get(':nth-child(1) > .view > label').should('have.text','use mocha')


    })
    it('should filter Active todos',()=>{

        cy.get(':nth-child(3) > .view > .toggle').click()
        cy.contains('Active').click()
        cy.get('.todo-list li').should('have.length',2)
        cy.contains('Completed').click()
        cy.get('.todo-list li').should('have.length',1)
        cy.contains('All').click()
        cy.get('.todo-list li').should('have.length',3)

    })
    it('should filter Completed todos',()=>{

        cy.get(':nth-child(3) > .view > .toggle').click()
    
        cy.contains('Completed').click()
        cy.get('.todo-list li').should('have.length',1)
    
    })
    it('should filter All todos',()=>{

        cy.get(':nth-child(3) > .view > .toggle').click()
    
        cy.contains('All').click()
        cy.get('.todo-list li').should('have.length',3)

    })


})