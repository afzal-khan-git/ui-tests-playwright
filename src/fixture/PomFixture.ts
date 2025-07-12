import {test as baseTest} from "@playwright/test"; // import test from playwright an alias, to manipulate alias
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";
import { CheckOutPage } from "../pages/CheckOutPage";


// type is a special feature in typescript that defines a custom type
type pomPagesType = { //here fixture type is page
    homePage : HomePage,
    loginPage: LoginPage,
    productPage: ProductPage,
    checkOutPage: CheckOutPage,


}

//extend the baseTest with type(this is declared above 'pomPages')  and initalize page object classes 
const customPomPageFirxture = baseTest.extend<pomPagesType>({
//page object var name : then async ()=> function with page as first param and use as second and body utilize use function to create a an object of respective type and let it to be used by tests
    homePage: async({page}, use) =>{
        //now pass or use the fixture to test
        await use(new HomePage(page));
    },
    loginPage: async({page}, use)=>{
        await use(new LoginPage(page));

    },
    productPage: async ({page}, use)=>{
        await use (new ProductPage(page));
    },
    checkOutPage: async ({page}, use)=>{
        await use (new CheckOutPage(page));
    }


});

//now assign customPomPageFixture to playwright test and export it for tests to use
export const test = customPomPageFirxture;

//also export expect(playwright/test module) from this file so that one import can handle both {test, expect} in test file
export { expect } from "@playwright/test";