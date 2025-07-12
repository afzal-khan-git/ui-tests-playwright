import { Page } from "@playwright/test";
import { waitForSpinnerToDisappear } from "../util/CommonFunctions";

export class ProductPage{

    private page: Page;
    constructor(page:Page){
        this.page = page;
    }

    addToCartBtn = ()=> this.page.locator("#btn-add-to-cart");
    plusIconBtn = ()=> this.page.locator("[data-icon='plus']");
    minusIconBtn = ()=> this.page.locator("#btn-add-to-cart");
    addToFavoriteBtn = ()=> this.page.locator("#btn-add-to-favorites");
    unauthorizedAddFavoriteAlert = ()=> this.page.locator("[aria-label='Unauthorized, can not add product to your favorite list.']");
    productAddedToCartAlert = ()=> this.page.locator("[aria-label='Product added to shopping cart.']"); //  Product added to shopping cart. 
    cartQuantityIcon = ()=> this.page.locator("[data-test='cart-quantity']");
    cartIconBtn = ()=> this.page.locator("[aria-label='cart']");

    async clickOnAddToCartBtn(){
        await this.addToCartBtn().click();
    }

    async numberOfProductInTheCart(){
        const noProduct = await this.cartQuantityIcon().textContent();
    }
     async clickOnCartIcon(){
        await this.cartIconBtn().click();
    }













}