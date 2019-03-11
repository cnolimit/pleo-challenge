/**
 * Requirements
 * ============
 *
 * - User can list expenses √
 * - User can add a comment on an expense √
 * - User can filter on expenses (client side filters) √
 * - User can add a receipt image on an expense x
 */
// @ts-ignore
const testId = '5b996064a33cd79a446d43e1'
const testComment = 'Testing Submitting Comment'

describe('Testing Pleo Requirments', function() {
  beforeEach(() => {
    cy.visit('http://localhost:3030')
  })
  it('Should list 25 cards', function() {
    cy.get('#expense-container')
      .children()
      .should('have.length', 25)
  })

  it('Should add a comment to the first expense', function() {
    const button = `[data-testid="${testId}-add-comment"] [data-testid="add-comment-button"]`
    const textfield = `[data-testid="${testId}-add-comment-textfield"]`
    cy.get(button).click()
    cy.get(textfield)
      .focus()
      .clear()
      .type(testComment)
    cy.get(button).click()
    cy.get(`[data-testid="${testId}-comment"]`).contains(testComment)
  })

  it('Should apply a filter to search for users', function() {
    const searchField = `[data-testid='search-textfield']`
    const userFilterButton = `[data-testid='user-filter-button']`

    cy.get(userFilterButton).click()
    cy.get(searchField)
      .focus()
      .type('car')
    cy.get('#expense-container')
      .children()
      .should('have.length', 2)
  })

  it('Should apply a filter to search for merchants', function() {
    const searchField = `[data-testid='search-textfield']`
    const merchantFilterButton = `[data-testid='merchant-filter-button']`
    cy.get(merchantFilterButton).click()
    cy.get(searchField)
      .focus()
      .type('t')
    cy.get('#expense-container')
      .children()
      .should('have.length', 9)
  })

  it('Should upload a reciept to the first expense', function() {
    expect(false).toBe.equal(true)
  })
})
