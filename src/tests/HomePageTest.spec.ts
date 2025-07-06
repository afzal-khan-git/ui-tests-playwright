import {test, expect} from '../fixture/PomFixture';
import * as test_data from '../testdata/TestData.json';


test("home_page_test", async ({page, homePage})=>{
    await page.goto(test_data.app_info.url);
    await homePage.clickOnProduct();
    await page.waitForTimeout(2000);
    
})

