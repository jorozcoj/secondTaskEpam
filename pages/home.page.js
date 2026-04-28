import { BasePage } from "../framework/base/base.page";

export class HomePage extends BasePage {
    constructor(page) {
        super(page);

        // Search
        this.searchInput = page.locator('#search-query');
        this.searchButton = page.locator('[data-test="search-submit"]');
        this.searchComplete = page.locator('[data-test="search_completed"]');
        this.searchProductCards = page.locator('[data-test="search_completed"] .card');

        // Filter
        this.handToolCheckbox = page.locator('input[name="category_id"]').first();
        this.filterComplete = page.locator('[data-test="filter_completed"]');
        this.filterProductCards = page.locator('[data-test="filter_completed"] .card');
    }

    async openPage() {
        await this.page.goto('/');
    }

    async search(product) {
        await this.type(this.searchInput, product);
        await this.click(this.searchButton);

        await this.searchComplete.waitFor();
    }

    async filterByHandTools() {
        await this.handToolCheckbox.check();
        await this.filterComplete.waitFor();
    }

    async selectFirstSearchProduct() {
        await this.searchProductCards.first().click();
    }

    async selectFirstFilterProduct() {
        await this.filterProductCards.first().click();
    }
}