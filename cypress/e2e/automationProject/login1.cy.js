<reference types="cypress" />

describe("login test", ()=>{
   
    let loginData
 
    before(()=>{
        
        cy.fixture("loginData.json").then((data)=>{
           
            loginData = data
        })
    })

    beforeEach(() => {
        
        Cypress.on('uncaught:exception', (err, runnable) => {
          
            return false;
        
        });
      
    });
    
    it("successfull login", ()=>{
      
        const url = {
       
            visitWeb:"https://newbeta.herconomy.com/"
          }
       
          cy.visit(url.visitWeb)
          
          cy.login(loginData.email,loginData.password)

          cy.clickButton()
          
   })
})