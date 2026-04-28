import { BasePage } from '../framework/base/base.page';

export class ProductPage extends BasePage {
    constructor(page) {
        super(page);

        this.productName = page.locator('[data-test="product-name"]');
        this.addToCartBtn = page.locator('[data-test="add-to-cart"]');
        this.cartBadge = page.locator('[data-test="cart-quantity"]');
    }

    async addToCart() {
        await this.click(this.addToCartBtn);
    }
}