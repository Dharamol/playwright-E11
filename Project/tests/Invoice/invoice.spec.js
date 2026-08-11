// import {test} from '@playwright/test'
// import signin from  "../TestData/login.json"
// import invoiceData from"../TestData/invoice.json"
// import { loginPage } from '../../page/login'
// import { logout } from '../../page/logout'
// import { Invoice } from '../../page/invoice'
// import productdetails from '../TestData/product.json'
// import orgDetails from '../TestData/organization.json'
// test('test1',async({page})=>{
//    await page.goto(signin.url)
// await page.locator('//input[@name="user_name"]').fill(signin.username)
// await page.locator('//input[@name="user_password"]').fill(signin.password)
// await page.locator('#submitButton').click()

// await page.getByText('More').hover()
// await page.locator('//a[@name="Invoice"]').click()
//  await page.locator('//img[@src="themes/softed/images/btnL3Add.gif"]').click()
// await page.locator('//input[@name="subject"]').fill(invoiceData.subjectname)
// let [popup] = await Promise.all([
//     page.waitForEvent('popup'),
//  page.locator('(//img[@src="themes/softed/images/select.gif"])[2]').click()
// ])

// await popup.locator('//a[@href="javascript:window.close();"]').click()
// popup.once('dialog',async(dialog)=>{
//         let type = await dialog.type()
//          console.log(type);
//         dialog.accept()
//     })
// let [popup1] = await Promise.all([
//     page.waitForEvent('popup'),
//  page.locator('(//img[@src="themes/softed/images/select.gif"])[3]').click()
// ])

// await popup1.locator('//a[@href="javascript:window.close();"]').click()
// popup1.once('dialog',async(dialog)=>{
//         let type = await dialog.type()
//          console.log(type)
//         dialog.accept()
//     })

//     await page.locator('//textarea[@name="bill_street"]').fill(invoiceData.billAddress)
//     await page.locator('//textarea[@name="ship_street"]').fill(invoiceData.ShipAddress)
// let [popup2] = await Promise.all([
//     page.waitForEvent('popup'),
//  page.locator('//img[@id="searchIcon1"]').click()
// ])
//     await popup2.locator('//input[@name="search_text"]').fill(productdetails.proName)
//     await popup2.locator('//input[@name="search"]').click()
//     await popup2.locator('//a[@id="popup_product_40"]').click()
    
//     await page.locator('//input[@id="qty1"]').fill(invoiceData.quantity)
//     await page.locator('(//input[@class="crmbutton small save"])[1]').click()

//     await page.locator('(//a[@href="index.php?module=Invoice&action=index"])[1]').click()
//     await page.locator('//a[@href="index.php?module=Products&action=index"]').click()

//     //!Logout
//     await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
//     await page.locator('//a[text()="Sign Out"]').click()

// })

// test.only('POM',async({page})=>{
//     let signIn = new loginPage(page)
//     await signIn.launch(signin.url)
//     await signIn.enterDetails(signin.username,signin.password)

//     let invoiceDetails= new Invoice(page)
//     await invoiceDetails.createInvoiceDetails(invoiceData.subjectname,orgDetails.orgName,invoiceData.billAddress,invoiceData.ShipAddress,productdetails.proName,invoiceData.quantity)

//     let log_Out= new logout(page)
//     await log_Out.signout()
// })

// //product search not done