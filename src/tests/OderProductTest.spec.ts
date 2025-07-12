import{test, expect} from '../fixture/PomFixture';
import * as test_data from '../testdata/TestData.json';
import{signIn} from '../util/CommonFunctions';

test("order_a_product", async({page,homePage,loginPage,productPage,checkOutPage})=>{
    await page.goto(test_data.app_info.url);
    await homePage.clickOnThorHammer();
    await productPage.clickOnAddToCartBtn();
    expect(productPage.productAddedToCartAlert()).toHaveText("Product added to shopping cart.");
    expect(productPage.cartQuantityIcon()).toHaveText("1");
    expect(await productPage.productAddedToCartAlert()).toHaveCount(0);
    await productPage.clickOnCartIcon();
    await checkOutPage.clickOnProceedToCheckOut();
    await signIn(test_data.user_info.email,test_data.user_info.password, page);

    await page.waitForTimeout(5000);
    



})