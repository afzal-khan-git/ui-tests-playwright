import {test, expect} from "../fixture/BasePage";
import * as testData from "../testdata/TestData.json"

test("Home Page Navigation", async({page, homePage})=>{
await page.goto(testData.url);
await homePage.clickOnProduct();
await expect(homePage.addToCart()).toBeVisible();
await page.waitForTimeout(5500);

})