import {test as baseTest} from "@playwright/test"; // import test from playwright an alias, to manipulate alias
import HomePage from "../pages/HomePage";


// type is a special feature in typescript that defines a custom type
type pomPagesType = { //here fixture type is page
    homePage : HomePage,


}

//extend the baseTest with type pages and initalize page object classes 
const customPomPageFirxture = baseTest.extend<pomPagesType>({

    homePage: async({page}, use) =>{
        //now pass or use the fixture to test
        await use(new HomePage(page));
    }


});

//now assign customPomPageFixture to test and export it for tests to use
export const test = customPomPageFirxture;

//also export expect from this file so that one import can handle {test, expect} in test file
export { expect } from "@playwright/test";