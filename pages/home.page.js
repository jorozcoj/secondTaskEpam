export class HomePage {
    constructor(page) {
        this.page = page;
        this.searchInput = page.locator('#search-query');
        this.searchButton = page.locator('[data-test="search-submit"]');

        this.categoryCheckboxes = page.locator('input[name="category_id"]');
        this.filterComplete = page.locator('[data-test="filter_completed"]');
        this.filterProductCards = page.locator('[data-test="filter_completed"]');

        this.searchComplete = page.locator('[data-test="search_completed"]')
        this.searchProductCards = page.locator('[data-test="search_completed"] a.card')
    }

    async openPage() {
        await this.page.goto('/');
    }

    async search(product) {
        await this.searchInput.fill(product);
        await this.searchButton.click();
    }

    async filterHandTool() {
        await this.categoryCheckboxes.first().check();
    }

    async selectFirstSearchProduct() {
        await this.searchProductCards.first().click();
    }

    async selectFirstFilterProduct(){
        await this.filterProductCards.first().click()
    }
}