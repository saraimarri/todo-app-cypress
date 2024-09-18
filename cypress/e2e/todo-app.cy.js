///<reference types="cypress" />

describe("todo app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should have empty todo list by default", () => {
    cy.get("#todo-list li").should("have.length", 0);
  });

  it.only("should create new todo", () => {
    cy.get("#todo-input").type("Learn CSS");
    cy.get("#btn-add").click();
    cy.get("#todo-list li").should("have.length", 1);
  });
});
