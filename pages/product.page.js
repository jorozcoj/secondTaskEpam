export class ProductPage{
    constructor(page){
        this.page= page;
        this.producName = page.locator('[data-test="product-name"]');
        this.cartBage = page.locator('[data-test="cart-quantity"]');
        this.addToCartButton = page.locator('[data-test="add-to-cart"]');
    }

    async addToCart(){
        await this.addToCartButton.click();
    }
}