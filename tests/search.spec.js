import { test, expect } from '../framework/fixtures/baseTest';

test('Search for a product', async ({ homePage }) => {

    await homePage.search('Hammer');
    await expect(homePage.searchComplete).toBeVisible();
    await expect(homePage.searchProductCards.first()).toBeVisible()

    await homePage.selectFirstSearchProduct()
});
