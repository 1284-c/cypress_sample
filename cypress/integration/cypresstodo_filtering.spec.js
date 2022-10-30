/// <reference types="cypress" />

import { TodoPage } from "../page-objects/todo-page"

describe("Filtering", () => {
    const todoPage = new TodoPage()

    beforeEach(()=>{
        todoPage.navigate()
        cy.get('h1').should('have.text','todos')
        todoPage.addTodo("learn cypress")
        todoPage.addTodo("learn javascript")
        todoPage.addTodo("use mocha")
    })
    it('should have the added todos on the list',()=>{
        todoPage.validateTodoText(2,'learn cypress')
        todoPage.validateTodoText(1,'learn javascript')
        todoPage.validateTodoText(0,'use mocha')
    })
    it('should filter Active todos',()=>{
        todoPage.toggle(2)
        todoPage.activeClick()
        todoPage.validateNumberOfTodos(2)
        todoPage.completedClick()
        todoPage.validateNumberOfTodos(1)
        todoPage.allClick()
        todoPage.validateNumberOfTodos(3)

    })
    it('should filter Completed todos',()=>{
        todoPage.toggle(2)
        todoPage.completedClick()
        todoPage.validateNumberOfTodos(1)
    })
    it('should filter All todos',()=>{
        todoPage.toggle(2)
        todoPage.allClick()
        todoPage.validateNumberOfTodos(3)

    })


})