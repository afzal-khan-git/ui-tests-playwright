import {Page} from "@playwright/test";

export default class HomePage{
    private page: Page;

    combPliers = () => this.page.locator("//h5[contains(text(),'Combination Pliers')]");
    addToCart = () => this.page.locator("#btn-add-to-cart");
    thorHammer = ()=> this.page.locator("[alt='Thor Hammer']");

    constructor(page: Page){
        this.page = page;
    }

    public async clickOnProduct(){
        await this.combPliers().click()
    }

    public async clickOnThorHammer(){
        await this.thorHammer().click();
    }

}