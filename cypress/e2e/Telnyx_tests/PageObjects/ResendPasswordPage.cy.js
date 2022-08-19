import Page from './Page.cy.js'
const page = new Page();

const submitButton = 'button[type="submit"]';

class ResendPasswordPage {   
    enterEmail(testemail) {
        cy.get('[class="ui-reactv2-input"]')
            .clear()
            .type(testemail);
        return this
    }
  
    clicksubmitButton() {
        page.click(submitButton);
    }  
 
}
export default ResendPasswordPage