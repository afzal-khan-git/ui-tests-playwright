import{test, expect} from "../fixture/PomFixture";
import * as test_data from '../testdata/TestData.json';

test("login_test", async({page, loginPage})=>{
    await page.goto(test_data.app_info.url);
    await loginPage.clickOnSignInLink()
    await loginPage.setEmail(test_data.user_info.email);
    await loginPage.setPassword(test_data.user_info.password);
    await loginPage.clickOnLogInBtn();
    expect(loginPage.myAccount().isVisible());
    await page.waitForTimeout(5000);



})
