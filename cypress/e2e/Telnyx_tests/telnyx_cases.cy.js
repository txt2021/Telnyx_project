import SignUpPage from './PageObjects/SignUpPage.cy.js'
import LogInPage from './PageObjects/LogInPage.cy.js'
import ResendEmailPage from './PageObjects/ResendEmailPage.cy.js'
import ResendPasswordPage from './PageObjects/ResendEmailPage.cy.js'
import LendingPage from './PageObjects/LendingPage.cy.js'
import SupportCenterPage from './PageObjects/SupportCenterPage.cy.js'


const sign_up = new SignUpPage();
const login = new LogInPage();
const resend_email = new ResendEmailPage();
const resend_pass = new ResendPasswordPage();
const lending = new LendingPage();
const supportcenter = new SupportCenterPage();


const testemail = "txt2021@ukr.net";
const wrongtestemail = "txt2021@ukr.com";
const testpassword = "tester1_isgonnatesT";
const testname = "Tester Smith";
const site_url = "https://telnyx.com/";
const searchtext = "testing";
describe('Telnyx Test', () => {
    
    xit('TC-01: Creating new account on Telnyx', () => {

      cy.visit(site_url)
      lending.clicksignupButton();
      sign_up.enterEmail(testemail);
      sign_up.enterName(testname);
      sign_up.enterPassword(testpassword);
      sign_up.clickcheckboxButton();
      sign_up.clicksubmitButton();

      cy.url().should('include', '/sign-up')     
  
    })

    xit('TC-02: Creating new account on Telnyx with incorrect credentials', () => {

      cy.visit(site_url)
      lending.clicksignupButton();
      sign_up.enterEmail(wrongtestemail);
      sign_up.enterName(testname);
      sign_up.enterPassword(testpassword);
      sign_up.clickcheckboxButton();
      sign_up.clicksubmitButton();
        
      cy.get('[class="sc-570b157-1 eUoKGn"] ').should('be.visible')
  
    })

    xit('TC-03: Sign in on Telnyx with incorrect credentials', () => {

      cy.visit(site_url)
      lending.clickloginButton();
      login.enterEmail(wrongtestemail);
      login.enterPassword(testpassword);
      login.clicksubmitButton();
     
      cy.url().should('include', '/login/sign-in')
    })

    xit('TC-04: Resending varification email on Telnyx', () => {

      cy.visit(site_url)
      lending.clickloginButton();
      login.clickresendButton();
      resend_email.enterEmail(testemail);
      resend_email.clicksubmitButton();      
         
      cy.url().should('include', 'login/resend-email')
      cy.get('[class="Text-dgspRF ResendEmail__MessageCopy-BNKIg cIMJO NMyTx"]').should('be.visible')
      
    })

    xit('TC-05: User password recovery on Telnyx', () => {

      cy.visit(site_url)
      lending.clickloginButton();
      login.clickforgotButton();
      resend_pass.enterEmail(testemail);
      resend_pass.clicksubmitButton();      
         
      cy.url().should('include', '/login/sign-in')
      
    })

    xit('TC-06: Autocomplete email in the registration form on Telnyx', () => {

      cy.visit(site_url)
      lending.enterEmail(testemail);
      lending.clicksubmitButton();          
         
      cy.get('[id="email"]').should('have.value', testemail)
      
    })

    xit('TC-07: Support center search work on Telnyx', () => {

      cy.visit('https://support.telnyx.com/en/')
      //lending.clicksupportButton();
      supportcenter.entersearchInput(searchtext);
      supportcenter.clicksearchButton(); 
         
      cy.url().should('include', 'testing')
      
    })

    xit('TC-08: Cost comparison work on Telnyx', () => {

      cy.visit(site_url)
      lending.scrolltocompareSection();
      lending.clicksmsButton();
      lending.clicktollfreeButton();

         
      cy.get('[class="sc-1a5981e5-15 OWFfB"]').should('have.text', "Save up to $1270 per month")
      
    })

    xit('TC-09: Requesting a demo on Telnyx', () => {

      cy.visit(site_url)
      lending.scrolltoreadySection();
      lending.clicktodemoButton();
               
      cy.get('[class="Text-sc-5o8owa-0 sc-3efef034-2 clNvhv cptehe"] span').should('have.text', "Talk to an expert")
      
    })

    xit('TC-10: Access to Telnyx API Documentation', () => {
      cy.viewport(1280, 720)

      cy.visit(site_url)
      lending.hoverresourcesButton();
      lending.clickdocsButton();
               
      cy.get('[id="telnyx-api-v2-documentation"]').should('have.text', "Telnyx API Documentation")
      
    })
  })