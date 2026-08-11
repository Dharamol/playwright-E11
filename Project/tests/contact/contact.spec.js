// import {test,expect} from '@playwright/test'
// import signin from "../TestData/login.json"
// import contactData from "../TestData/contact.json"
// import { Contact } from '../../page/contact'
// import { loginPage } from '../../page/login'
// import { logout } from '../../page/logout'
// test('test1',async({page})=>{
//     //! Login
// await page.goto(signin.url)
// await page.locator('//input[@name="user_name"]').fill(signin.username)
// await page.locator('//input[@name="user_password"]').fill(signin.password)
// await page.locator('#submitButton').click()
// //! Create contect
// await page.locator('(//a[text()="Contacts"])[1]').click()
// await page.locator('(//a[@href="index.php?module=Contacts&action=EditView&return_action=DetailView&parenttab=Marketing"])[1]').click()
// await page.locator('//input[@name="firstname"]').fill(contactData.firstname)
// await page.locator('//input[@name="lastname"]').fill(contactData.lastname)
// let [popup]=await Promise.all([
//     page.waitForEvent('popup'),
//     page.locator('(//img[@src="themes/softed/images/select.gif"])[1]').click()
// ])
// await popup.locator('//input[@name="search_text"]').fill('TCS')
// await popup.locator('//input[@name="search"]').click()
// await popup.close()
// await page.locator('//input[@class="crmButton small save"]').click()
// await page.locator('(//a[text()="Contacts"])[1]').click()
// //!Validation
// await page.locator('//input[@name="search_text"]').fill(contactData.firstname)
// await page.locator('(//select[@id="bas_searchfield"])[1]').selectOption('First Name')
// await page.locator('//input[@name="submit"]').click()
// await expect(page.locator('//div[@id="ListViewContents"]')).toContainText(contactData.firstname)
// //!logout
// await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
// await page.locator('//a[text()="Sign Out"]').click()
// })






// test.only('POM',async({page})=>{
//     let signIn= new loginPage(page)
//     await signIn.launch(signin.url)
//     await signIn.enterDetails(signin.username,signin.password)
//     let contactDetails = new Contact(page)
//     await contactDetails.createContactDetails(contactData.lastname)
//     let signOut= new logout(page)
//     await signOut.signout()
// })


// // test('test2',async({page})=>{
// //     //! Login
// // await page.goto(signin.url)
// // await page.locator('//input[@name="user_name"]').fill(signin.username)
// // await page.locator('//input[@name="user_password"]').fill(signin.password)
// // await page.locator('#submitButton').click()

// // await page.locator('(//a[text()="Contacts"])[1]').click()
// // await page.locator('(//a[@href="index.php?module=Contacts&action=EditView&return_action=DetailView&parenttab=Marketing"])[1]').click()
// // await page.locator('//input[@name="firstname"]').fill('DHARA1')
// // await page.locator('//input[@name="lastname"]').fill('Sandeep1')
// // let [popup]=await Promise.all([
// //     page.waitForEvent('popup'),
// //     page.locator('(//img[@src="themes/softed/images/select.gif"])[1]').click()
// // ])
// // await popup.locator('//input[@name="search_text"]').fill('TCS')
// // await popup.locator('//input[@name="search"]').click()
// // await popup.close()
// // await page.locator('//input[@class="crmButton small save"]').click()

// // //!logout
// // await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
// // await page.locator('//a[text()="Sign Out"]').click()
// // })