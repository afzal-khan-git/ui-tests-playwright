import {Page} from "@playwright/test";
import {Base64} from "js-base64";

export default class LoginPage{

    private page:Page;

    signInLink = ()=> this.page.locator("[data-test='nav-sign-in']");
    emailField = ()=> this.page.locator("#email");
    passwordField = ()=> this.page.locator("#password");
    loginBtn = ()=> this.page.locator(".btnSubmit");
    myAccount = ()=> this.page.locator("//h1[text()='My account']");
    homePageLink = ()=> this.page.locator("[data-test='nav-home']");

    constructor(page:Page){
        this.page = page;
    }

    public async clickOnSignInLink(){
        await this.signInLink().click();
    }

    public async setEmail(email:string){
        await this.emailField().fill(Base64.decode(email));
    }
    public async setPassword(password:string){
        await this.passwordField().fill(Base64.decode(password));
    }
    public async clickOnLogInBtn(){
        await this.loginBtn().click();
    }







}