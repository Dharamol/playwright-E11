import {expect, test} from '@playwright/test'
import signin from "../TestData/login.json"
import proData from "../TestData/product.json"
import { Product } from '../../page/product'
import { loginPage } from '../../page/login'
import { logout } from '../../page/logout'
test('test1',async({page})=>{
    //! Login
    await page.goto(signin.url)
    await page.locator('//input[@name="user_name"]').fill(signin.username)
    await page.locator('//input[@name="user_password"]').fill(signin.password)
    await page.locator('#submitButton').click()
    //! create product
    await page.locator('//a[@href="index.php?module=Products&action=index"]').click()
    await page.locator('//img[@src="themes/softed/images/btnL3Add.gif"]').click();
    await page.locator('//input[@name="productname"]').fill(proData.proName)
    await page.locator('(//input[@class="crmbutton small save"])[1]').click()

    await page.locator('//a[@href="index.php?module=Products&action=index"]').click()
    await page.locator('//input[@name="search_text"]').fill(proData.proName)
    await page.locator('(//select[@id="bas_searchfield"])[1]').selectOption('Product Name')
    await expect(page.locator('//div[@id="ListViewContents"]')).toContainText(proData.proName)
    //! Logout
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()
})

test.only('POM',async({page})=>{
    let signIn = new loginPage(page)
    await signIn.launch(signin.url)
    await signIn.enterDetails(signin.username,signin.password)
    let productDetails = new Product(page)
    await productDetails.createProductDetails(proData.proName)
    let signOut= new logout(page)
    await signOut.signout()
})