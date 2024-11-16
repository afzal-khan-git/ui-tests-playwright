import {test as baseTest} from "@playwright/test";
import HomePage from "../pages/HomePage";

//declaring the objects type for autocompletion
type PageObjects = {
    homePage: HomePage, 
}

//initialize all the page objects and import these as fixture in spec file
export const test = baseTest.extend<PageObjects>({
    homePage: async({page}, use) =>{
        await use(new HomePage(page));
    },




})

export {expect} from '@playwright/test';