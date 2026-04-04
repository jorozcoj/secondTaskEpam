import { test, expect } from '../fixtures/baseTest';
import { Header } from '../pages/header.page';
import { ProductPage } from '../pages/product.page';
import { HomePage } from "../pages/home.page";

test.describe('Tests for Practice Software Testing page', () => {

    test('Search for a product', async ({ homePage }) => {

        await homePage.search('Hammer');
        await expect(homePage.searchComplete).toBeVisible();
        await expect(homePage.searchProductCards.first()).toBeVisible()

        await homePage.selectFirstSearchProduct()
    });

    test('Filter procucts by category', async ({ homePage }) => {

        await homePage.filterHandTool();

        await expect(homePage.filterComplete).toBeVisible();

        await expect(homePage.filterProductCards.first()).toBeVisible();

        await homePage.selectFirstFilterProduct();
    });

    test('Change Language ', async ({ page, homePage }) => {

        const header = new Header(page);

        await header.changeLanguage('es');

        await expect(page.locator('text=Inicio')).toBeVisible();
    });

    test('Add product to cart', async ({ page, homePage }) => {

        const productPage = new ProductPage(page);

        await homePage.search('Hammer');
        await expect(homePage.searchComplete).toBeVisible();
        await expect(homePage.searchProductCards.first()).toBeVisible()

        await homePage.selectFirstSearchProduct();
        await expect(productPage.producName).toBeVisible();        

        await productPage.addToCart();

        await expect(productPage.cartBage).toHaveText('1');
    })
});
