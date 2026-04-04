import {test as base} from '@playwright/test';
import { HomePage } from '../pages/home.page';

export const test = base.extend({
    homePage: async ({page}, use) => {
        const homePage = new HomePage(page);
        await homePage.openPage();
        await use(homePage);
    }
});

export const expect = test.expect;