import {test as baseTest} from "@playwright/test";
import HomePage from "../pages/HomePage";

//declaring the objects type for autocompletion
//creating a type (by keyword type) any name pageObject
type pageObject = {
    homePage: HomePage, 
}

//initialize all the page objects and import these as fixture in spec file
export const test = baseTest.extend<pageObject>({ //extend baseTest alias of test to include type(pageObject)
    homePage: async({page}, use) =>{
        await use(new HomePage(page));
    },


})

export {expect} from '@playwright/test';