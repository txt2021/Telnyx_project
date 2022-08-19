class Page {

click(locator){
    cy.get(locator).click();
}

scrollIntoView(locator){
    cy.get(locator).scrollIntoView();
}

}
export default Page