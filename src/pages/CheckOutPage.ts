import { Page } from "@playwright/test";

export class CheckOutPage{

    private page:Page;
    constructor(page:Page){
        this.page = page;
    }

    proceedToCheckOutBtn = ()=> this.page.locator("[data-test='proceed-1']");

    async clickOnProceedToCheckOut(){
        this.proceedToCheckOutBtn().click();
    }
    



}