import {test} from '@playwright/test'
import signin from "../TestData/login.json"
import opportunityData from "../TestData/opportunity.json"
import orgData from '../TestData/organization.json'
import { logout } from '../../page/logout'
import { Oppor } from '../../page/opportunity'
import { loginPage } from '../../page/login'

test('test1',async({page})=>{
    //!Login
    await page.goto(signin.url)
    await page.locator('//input[@name="user_name"]').fill(signin.username)
    await page.locator('//input[@name="user_password"]').fill(signin.password)
    await page.locator('#submitButton').click()
    //! Create opportunity
    await page.locator('//a[@href="index.php?module=Potentials&action=index"]').click()
    await page.locator('//a[@href="index.php?module=Potentials&action=EditView&return_action=DetailView&parenttab=Sales"]').click()
    await page.locator('//input[@name="potentialname"]').fill(opportunityData.opp_Name)

    let [popup] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('(//img[@title="Select"])[1]').click()
    ])
    await popup.locator('//a[@href="javascript:window.close();"]').click()
    await popup.close()
    await page.locator('//input[@name="amount"]').fill('500000')
    await page.locator('(//input[@class="crmbutton small save"])[2]').click()
    await page.waitForTimeout(3000)
    await page.locator('//a[@href="index.php?module=Potentials&action=index"]').click()

    //! Logout
    await page.locator('//a[@href="index.php?module=Products&action=index"]').click()
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()
})

test.only('POM',async({page})=>{
    let singIn = new loginPage(page)
    await singIn.launch(signin.url)
    await singIn.enterDetails(signin.username,signin.password)
    let createOpportunity = new Oppor(page)
    await createOpportunity.createOpporDetails(opportunityData.opp_Name,orgData.orgName)
    let signOut = new logout(page)
    await signOut.signout()

})