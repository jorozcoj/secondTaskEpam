import { BasePage } from '../framework/base/base.page';
import { expect } from '@playwright/test';

export class Header extends BasePage {
    constructor(page){
        super(page);

        this.languageSelect = page.locator('[data-test="language-select"]');
        this.languageList = page.locator('#dropdown-animated');
    }

    async changeLanguage(lang){
        await this.click(this.languageSelect);

        await expect(this.languageList).toBeVisible();

        await this.page.locator(`[data-test="lang-${lang}"]`).click();
    }
}