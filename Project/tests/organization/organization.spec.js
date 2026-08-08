import {test,expect} from '@playwright/test'
import signin from "../TestData/login.json"
import ogrData from "../TestData/organization.json"
import { organization1 } from '../../page/organization'
import { loginPage } from '../../page/login'
import { logout } from '../../page/logout'

 test('test1',async({page})=>{
    //!Login
    await page.goto(signin.url)
    await page.locator('//input[@name="user_name"]').fill(signin.username)
    await page.locator('//input[@name="user_password"]').fill(signin.password)
    await page.locator('#submitButton').click()
    //! create org
    await page.locator('(//a[text()="Organizations"])[1]').click()
    await page.locator('(//a[@href="index.php?module=Accounts&action=EditView&return_action=DetailView&parenttab=Marketing"])[1]').click()
    await page.locator('//input[@name="accountname"]').fill(ogrData.orgName)
    await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()
    await page.waitForTimeout(3000)

    await page.locator('(//a[text()="Organizations"])[1]').click()
    await page.locator('//input[@name="search_text"]').fill(ogrData.orgName)
    await page.locator('(//select[@id="bas_searchfield"])[1]').selectOption('Organization Name')
    await page.locator('//input[@name="submit"]').click()
    //!assertion
    await expect(page.locator('//table[@class="lvtBg"]')).toContainText(ogrData.orgName)


//!logout
await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
await page.locator('//a[text()="Sign Out"]').click()
})

test.only('POM',async ({page})=>{
    let signIn =new loginPage(page)
    await signIn.launch(signin.url)
    await signIn.enterDetails(signin.username,signin.password)
    let createOrg = new organization1(page)
    await createOrg.orgDetails(ogrData.orgName)
    let log_Out= new logout(page)
    await log_Out.signout()
})