describe('Single Report [table-list-page, table-detail-page]', () => {
  it('should expand the table overview by clicking items', () => {
    cy.visit('http://localhost:3000');

    const first = cy.get('[data-cy="sr-table-overview-btn"]').first();
    first.should('have.attr', 'aria-expanded', 'false');
    first.click();
    first.should('have.attr', 'aria-expanded', 'true');

    const second = cy.get('[data-cy="sr-table-overview-btn"]').eq(1);
    first.should('have.attr', 'aria-expanded', 'false');
    second.click();
    second.should('have.attr', 'aria-expanded', 'true');
    second.click();
    second.should('have.attr', 'aria-expanded', 'false');
  });

  it('should navigate to the table detail page', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-cy="sr-navigate-report-detail"]').should('not.exist');

    const first = cy.get('[data-cy="sr-table-overview-btn"]').first();
    first.click();

    const navigateBtn = cy
      .get('[data-cy="sr-navigate-report-detail"]')
      .should('exist');
    navigateBtn.click();
  });

  it('should navigate to the table detail page and back to overview page', () => {
    cy.visit('http://localhost:3000');

    const first = cy.get('[data-cy="sr-table-overview-btn"]').first();
    first.click();

    const navigateBtn = cy
      .get('[data-cy="sr-navigate-report-detail"]')
      .should('exist');
    navigateBtn.click();

    const backLink = cy.get('[data-cy="sr-report-breadcrumb-back"]');
    backLink.click();
  });

  it('should get the default list view and toggle to schema view', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-attached]').should('have.attr', 'data-attached', 'summary');

    const toggleToSchema = cy.get('[data-cy="schema-view"]');
    toggleToSchema.click();
    cy.get('[data-attached]').should('have.attr', 'data-attached', 'schema');
  });

  it('should open and close the feedback modal', () => {
    cy.visit('http://localhost:3000');

    const feebackIcon = cy.get('[data-cy="open-feedback-modal"]');
    feebackIcon.click();
    cy.get('[data-cy="feedback-modal"]').should('be.visible');

    const closeButton = cy.get('[data-cy="close-feedback-modal"]');
    closeButton.click();
    cy.get('[data-cy="feedback-modal"]').should('not.exist');
  });
});

describe('Single Report [column-detail-page]', () => {
  it('should navigate to the column detail page from the table list page (via schema)', () => {
    cy.visit('http://localhost:3000');
    const schemaView = cy.get('[data-cy="schema-view"]');
    schemaView.click();

    const tableAccordionBtn = cy
      .get('[data-cy="sr-table-overview-btn"]')
      .first();
    tableAccordionBtn.click();
    const columnAccordionItem = cy
      .get('[data-cy="sr-table-list-schema-item"]')
      .first();
    columnAccordionItem.click();
  });

  it('should navigate to the column detail page from the table list page (via summary)', () => {
    cy.visit('http://localhost:3000');
    const schemaView = cy.get('[data-cy="summary-view"]');
    schemaView.click();

    const tableAccordionBtn = cy
      .get('[data-cy="sr-table-overview-btn"]')
      .first();
    tableAccordionBtn.click();
    const columnAccordionItem = cy
      .get('[data-cy="sr-table-list-column-item"]')
      .first();
    columnAccordionItem.click();
  });

  it('should navigate to the column detail page from the table overview page (via column card)', () => {
    cy.visit('http://localhost:3000/#/tables/ACTION');
    const columnCardDetailsLink = cy
      .get('[data-cy="column-card-details-link"]')
      .first();
    columnCardDetailsLink.click();
  });

  it('should navigate between different column items from the column detail page (and have active selection)', () => {
    cy.visit('http://localhost:3000/#/tables/ACTION/columns/SYMBOL');

    const firstColumnDetailListItem = cy
      .get('[data-cy="column-detail-list-item"]')
      .first();
    firstColumnDetailListItem
      .should('have.css', 'background-color')
      .and('equal', 'rgb(190, 227, 248)');

    const secondColumnDetailListItem = cy
      .get('[data-cy="column-detail-list-item"]')
      .last();
    secondColumnDetailListItem.click();
    secondColumnDetailListItem
      .should('have.css', 'background-color')
      .and('equal', 'rgb(190, 227, 248)');
  });
});