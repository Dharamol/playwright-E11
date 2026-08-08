import {test,expect} from '@playwright/test'
import { log } from 'console'
import signin from "../TestData/login.json"
import quoteData from "../TestData/quote.json"
import contactData from "../TestData/contact.json"
import ogrData from "../TestData/organization.json"
import proData from "../TestData/product.json"
import invoiceData from '../TestData/invoice.json'
import { loginPage } from '../../page/login'
import { Invoice } from '../../page/invoic '
import { logout } from '../../page/logout'
import { Quote } from '../../page/quote'
test('test1',async({page})=>{
    //! Login
    await page.goto(signin.url)
    await page.locator('//input[@name="user_name"]').fill(signin.username)
    await page.locator('//input[@name="user_password"]').fill(signin.password)
    await page.locator('#submitButton').click()
    //! Create quote
    await page.getByText('More').hover()
    await page.getByRole('link',{name:'Quotes'}).click()
    await page.locator('//img[@src="themes/softed/images/btnL3Add.gif"]').click()
    await page.locator('//input[@name="subject"]').fill(quoteData.subjectName)

    //! first opopup
    let [popup] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('(//img[@src="themes/softed/images/select.gif"])[2]').click()
    ])
     await popup.locator('//input[@name="search_text"]').fill(contactData.firstname)
     await popup.locator('//select[@class="txtBox"]').selectOption('First Name')
     await popup.locator('//input[@name="search"]').click()
     await popup.locator('(//a[@class="listFormHeaderLinks"])[1]/../../following-sibling::tr//a[@id="1"]').click()
   // await popup.locator('//a[@href="javascript:window.close();"]').click()
    // popup.once('dialog',async(dialog)=>{
    //     let type = await dialog.type()
    //      console.log(type);
    //     dialog.accept()
    // })
    // await popup.locator('(//table[@class="small"])[3]//tr[@class="lvtColData"][1]').click()
    //! second popup
    let [popup1] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('(//img[@src="themes/softed/images/select.gif"])[3]').click()
    ])  

    await popup1.locator('//input[@name="search_text"]').fill(ogrData.orgName)
    await popup1.locator('//input[@name="search"]').click()
    await popup1.locator('(//a[@class="listFormHeaderLinks"])[1]/../../following-sibling::tr//a[@id="1"]').click()
    // popup1.once('dialog',async(dialog)=>{
    //     let type = await dialog.type()
    //     console.log(type);
    //     dialog.accept()
    // })
    // await popup1.locator('(//table[@class="small"])[3]//tr[@class="lvtColData"][1]').click()
    await page.locator('//textarea[@name="bill_street"]').fill('TCS , Infopark, Kakkanad , Kerala')
    await page.locator('//textarea[@name="ship_street"]').fill('TCS , Infopark, Kakkanad , Kerala')
    //! Third popup
    let [popup2] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('//img[@id="searchIcon1"]').click()
    ]) 
    await popup2.locator('//input[@name="search_text"]').fill(proData.proName)
    await popup2.locator('//input[@name="search"]').click()
    await popup2.locator('//a[@id="popup_product_40"]').click()

    await page.locator('//input[@id="qty1"]').fill('5')
    await page.locator('(//input[@class="crmbutton small save"])[1]').click()
    //!Verification
    await page.locator('(//a[@href="index.php?module=Quotes&action=index"])[1]').click()
    await page.locator('//input[@name="search_text"]').fill(quoteData.subjectName)
    await page.locator('(//select[@id="bas_searchfield"])[1]').selectOption('Subject')
    await page.locator('//input[@name="submit"]').click()
    await expect(page.locator('//table[@class="lvt small"]')).toContainText(quoteData.subjectName)
    
    //!Logout
    await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
    await page.locator('//a[text()="Sign Out"]').click()
})

test.only('POM',async ({page})=>{
    let signIn = new loginPage(page)
    await signIn.launch(signin.url)
    await signIn.enterDetails(signin.username,signin.password)
 let quoteDetail= new Quote(page)
 await quoteDetail.createQuoteDetails(quoteData.subjectName,ogrData.orgName,invoiceData.billAddress,invoiceData.ShipAddress,proData.proName,invoiceData.quantity)

    let log_Out= new logout(page)
    await log_Out.signout()
})



