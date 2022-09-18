import { should } from "chai"

describe("Newsletter Subscribe Form", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000")
    })
  
    it("allows users to subscribe to the email list", () => {
        cy.getByData('email-input').type("tom@aol.com")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("exist").contains("tom@aol.com")
          })
    it("oes NOT allow an invalid email address", () => {
      cy.getByData('email-input').type("tom")
      cy.getByData("submit-button").click()
      cy.getByData("success-message").should("not.exist")
    })
    it("Does not allow if the user is registered", () =>{
      cy.getByData("email-input").type("john@example.com")
      cy.getByData("submit-button").click()
      cy.getByData("server-error-messagex/").should("exist").contains("already exists. Please use a different email address.")
    })
  })