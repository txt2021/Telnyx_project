import Page from './Page.cy.js'
const page = new Page();

const submitButton = 'button[type="submit"]';

class ResendEmailPage {
   
    enterEmail(testemail) {
        cy.get('[name="email"]')
            .clear()
            .type(testemail);
        return this
    }
  
    clicksubmitButton() {
        page.click(submitButton);
    }  
 
}
export default ResendEmailPage