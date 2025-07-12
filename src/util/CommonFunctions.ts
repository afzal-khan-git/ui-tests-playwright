import { Locator, Page } from "@playwright/test";
import { Base64 } from "js-base64";

/**
 * @param email 
 * @param password 
 * @param page 
 * this functions provides sign in functionality as it is required in many test to sign to perform certain flow
 */
export async function signIn(email:string, password:string, page:Page) {
    await page.locator("#email").fill(Base64.decode(email));
    await page.locator("#password").fill(Base64.decode(password));
    await page.locator(".btnSubmit").click;
}


export async function waitForSpinnerToDisappear(page:Page, locator:string) {
   
}