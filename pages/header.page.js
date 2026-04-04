export class Header {
    constructor(page){
        this.page = page;

        this.languageSelect = page.locator('[data-test="language-select"]');
        this.languageList = page.locator('#dropdown-animated');

        this.esOption = page.locator('[data-test="lang-es"]');
    }

    async changeLanguage(lang){
        await this.languageSelect.click();
        await this.languageList.waitFor();
        await this.page.locator(`[data-test="lang-${lang}"]`).click();
    }
}