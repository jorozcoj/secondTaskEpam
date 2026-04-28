import { test, expect } from '../framework/fixtures/baseTest';


test('Add product to cart', async ({ homePage, productPage }) => {

    await homePage.search('Hammer');
    await expect(homePage.searchComplete).toBeVisible();
    await expect(homePage.searchProductCards.first()).toBeVisible()

    await homePage.selectFirstSearchProduct();
    await expect(productPage.productName).toBeVisible();

    await productPage.addToCart();

    await expect(productPage.cartBadge).toHaveText('1');
})
