import {test as base} from '@playwright/test';
import { HomePage } from '../../pages/home.page';
import { ProductPage } from '../../pages/product.page';
import { Header } from '../../pages/header.page';

export const test = base.extend({

    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    productPage: async ({ page }, use) => {
        await use(new ProductPage(page));
    },

    header: async ({ page }, use) => {
        await use(new Header(page));
    }
});

// 🔥 aquí centralizas la navegación
test.beforeEach(async ({ page }) => {
    await page.goto('/');
});

export const expect = test.expect;