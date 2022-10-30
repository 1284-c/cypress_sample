/// <reference types="cypress" />


export class TodoPage {
    navigate(){
        cy.visit('http://todomvc-app-for-testing.surge.sh')
    }
    addTodo(todoText){
        cy.get('body').type(todoText + "{enter}")
    }
    validateTodoText(index,expectedtext){
       cy.get(`.todo-list li:nth-child(${index + 1}) label`).should('have.text',expectedtext)

    }
    validateTogglestatus(index,toggleStatus){
        const label = cy.get(`.todo-list li:nth-child(${index + 1}) label`)

        label.should(`${toggleStatus ? '' : 'not.'}be.checked`)

    }
    toggle(index) {
        cy.get(`.todo-list li:nth-child(${index + 1}) .toggle`).click()
  }
    clearCompleted() {
        cy.contains('Clear completed').click()
  }
    activeClick() {
        cy.contains('Active').click()
    
}
    completedClick() {
        cy.contains('Completed').click()

}
    allClick() {
        cy.contains('All').click()

}
    validateNumberOfTodos(expectedNumberOfTodos) {
        cy.get('.todo-list li').should('have.length', expectedNumberOfTodos)
  }

   

}