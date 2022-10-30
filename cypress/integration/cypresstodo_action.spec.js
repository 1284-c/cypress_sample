/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page"

describe('TODO App Action Tests',()=>{
    const todoPage = new TodoPage()

    beforeEach( ()=>{
        todoPage.navigate()
        cy.get('h1').should('have.text','todos')
        todoPage.addTodo("learn cypress")
        })
    it('should able to add new todo to the list', ()=>{
        todoPage.validateTodoText(0,'learn cypress')
        todoPage.validateTogglestatus(0,false)
         })
    it('should be marked as completed todos', ()=>{
        todoPage.toggle(0)
        todoPage.validateTogglestatus(0,false)
            })
     it('should clear the completed todos ', ()=>{
        todoPage.toggle(0)
        todoPage.clearCompleted()
        todoPage.validateTogglestatus(0,false)
         })   
})

