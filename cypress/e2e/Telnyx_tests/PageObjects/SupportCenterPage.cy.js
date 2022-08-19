
const searchButton = '[class="search__input js__search-input o__ltr"]';

class SupportCenterPage {   
    entersearchInput(searchtext) {
        cy.get(searchButton)
            .clear()
            .type(searchtext);
        return this
    }
  
    clicksearchButton() {
        cy.get(searchButton).type('{enter}')
    }  
 
}
export default SupportCenterPage