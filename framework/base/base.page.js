export class BasePage {
    constructor(page) {
        this.page = page; // ✅ correcto
    }

    async click(locator) {
        await locator.click();
    }

    async type(locator, text) {
        await locator.fill(text);
    }

    async getText(locator) {
        return await locator.textContent();
    }
}