import Page from './Page.cy.js'
const page = new Page();

const submitButton = '[class="Button__StyledDefaultButton-sc-44gl5i-0 gBCTym LoginForm__LoginButton-fhXOmx eazkBi"]';
const resendButton = '[href="/#/login/resend-email"]';
const forgotButton = '[href="/#/login/password-reset"]';


class LogInPage {
    
    enterEmail(testemail) {
        cy.get('body > ui-view > react-login > div.Login__Container-fLQnmd.efsJIF > div.styles__Container-hWxmpy.jIcJWj > div.Text__makeText-sc-1l8eqw9-0.Tabs__Panel-sc-g2qocw-2.SignIn__InnerPannel-liWpGL.lPbZx.kgvcZn.dkFlqp > form > div.LoginForm__Content-jTQUFp.bewpNc > div.LoginForm__FieldContainer-kXONbt.eSxLXo > label > div > div > input')
            .clear()
            .type(testemail);
        return this
    }

    enterPassword(testpassword) {
        cy.get('[name="password"]')
            .clear()
            .type(testpassword);
        return this
    }

    clicksubmitButton() {
        page.click(submitButton);
    }  
    
    clickresendButton() {
        page.click(resendButton);
    }  

    clickforgotButton() {
        page.click(forgotButton);
    }  

}
export default LogInPage