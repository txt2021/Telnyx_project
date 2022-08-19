import Page from './Page.cy.js'
const page = new Page();

const submitButton = 'button[type="submit"]';
const checkboxButton = 'div[aria-labelledby="terms-label"] svg rect[stroke="#9AA0A6"]';

class SignUpPage {
    
    enterEmail(testemail) {
        cy.get('[id="email"]')
            .clear()
            .type(testemail);
        return this
    }

    enterName(testname) {
        cy.get('[id="full_name"]')
            .clear()
            .type(testname);
        return this
    }

    enterPassword(testpassword) {
        cy.get('[id="password"]')
            .clear()
            .type(testpassword);
        return this
    }

    clickcheckboxButton() {
        page.click(checkboxButton);
    }

    clicksubmitButton() {
        page.click(submitButton);
    }
    

}
export default SignUpPage