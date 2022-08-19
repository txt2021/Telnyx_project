import Page from './Page.cy.js'
const page = new Page();


const loginButton = '[class="sc-f97529d6-0 bjUuRN Text-sc-5o8owa-0 sc-28d89a84-0 frufKM bhdWfo mchNoDecorate"][href="https://portal.telnyx.com/"]';
const signupButton = 'ul[class="sc-9d98fd33-5 dVueFL sc-9d98fd33-6 jmHnUo"] div[class="sc-5d3a275a-0 eKznVb"] ';
const supportButton = '[href="https://support.telnyx.com"][class="sc-f97529d6-0 bjUuRN Text-sc-5o8owa-0 sc-28d89a84-0 frufKM bhdWfo mchNoDecorate"]';
const submitButton = 'button[type="submit"]';
const smsButton = '[class="Button__StyledDefaultButton-vntg8h-0 hANPHj Button__SecondaryButton-vntg8h-4 fRjsZN"]';
const tollfreeButton = '[id="toll-free-numbers"]';
const demoButton = '[class="sc-f97529d6-0 bjUuRN sc-897a80e3-0 kdgXXO mchNoDecorate"][href="https://telnyx.com/contact-us"]';
const docsButton = '#__next > div.sc-62badcbb-0.gQAeUA > header > div.sc-9d98fd33-1.sc-9d98fd33-2.kectfp.mduJS > div > div.sc-9d98fd33-7.kpJVrZ > ul > li:nth-child(6) > div > div > div.sc-7b3980dc-8.iWLbyI > div > div:nth-child(1) > a > div > div.sc-7b3980dc-11.jZzYTn > span';
const compareSection = '[class="mchNoDecorate"] span';
const readySection = '[class="Text-sc-5o8owa-0 sc-6609610a-3 gkWopw cPVPHb"]';



class LendingPage {   
    enterEmail(testemail) {
        cy.get('[name="email"]')
            .clear()
            .type(testemail);
        return this
    }
    
    clickloginButton() {
        page.click(loginButton);
    }

    clicksignupButton() {
        page.click(signupButton);
    }

    clicksupportButton() {
        page.click(supportButton);
    }
  
    clicksubmitButton() {
        page.click(submitButton);
    }  
    
    scrolltocompareSection() {
        page.scrollIntoView(compareSection);
    }  

    clicksmsButton() {
        page.click(smsButton);
    }  

    clicktollfreeButton() {
        page.click(tollfreeButton);
    }  

    scrolltoreadySection() {
        page.scrollIntoView(readySection);
    } 

    clicktodemoButton() {
        page.click(demoButton);
    } 
   
    hoverresourcesButton() {
        cy.get('#__next > div.sc-62badcbb-0.gQAeUA > header > div.sc-9d98fd33-1.sc-9d98fd33-2.kectfp.mduJS > div > div.sc-9d98fd33-7.kpJVrZ > ul > li:nth-child(6) > span').trigger('mouseover')
    } 

    clickdocsButton(){
        cy.get(docsButton).click({ force: true })
    }

 
}
export default LendingPage