// import {test,expect} from '@playwright/test'
// import { log } from 'console'
// import signin from '../TestData/login.json';
// import leadData from '../TestData/lead.json';
// import { loginPage } from '../../page/login';
// import {lead1} from "../../page/lead";
// import { logout } from '../../page/logout';

// test('test1-create one lead',async({page})=>{
// //!Login
// await page.goto(signin.url)
// await page.locator('//input[@name="user_name"]').fill(signin.username)
// await page.locator('//input[@name="user_password"]').fill(signin.password)
// await page.locator('#submitButton').click()

// //!create lead
// await page.locator('//a[@href="index.php?module=Leads&action=index"]').click()
// await page.locator('//img[@title="Create Lead..."]').click()
// await page.locator('//select[@name="salutationtype"]').selectOption({index:4})
// await page.locator('(//input[@class="detailedViewTextBox"])[1]').fill(leadData.firstname)
// await page.locator('//input[@name="lastname"]').fill(leadData.secondname)
// await page.locator('//input[@id="phone"]').fill(leadData.phone)
// //!validate
// await page.locator('//input[@name="company"]').fill(leadData.companyname)
// await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()
// await page.waitForTimeout(2000)
// await page.locator('//a[@href="index.php?module=Leads&action=index"]').click()
// await page.locator('//a[@href="index.php?module=Leads&action=index"]').click()

// await page.locator('//input[@class="txtBox"]').fill(leadData.secondname)
// await page.locator('(//select[@id="bas_searchfield"])[1]').selectOption('Last Name')
// await page.getByRole('button',{name:' Search Now '}).click()

// //await expect(page.locator('(//a[contains(@href,"index.php?module=Leads&parenttab=Marketing&action=DetailView&record")]/..)[1]')).toHaveText(secondname)
// await expect(page.locator('//form[@id="massdelete"]')).toContainText(leadData.secondname)
// // await page.locator('(//input[@name="selected_id"])[1]').check()


// // let name=await page.locator('(//input[@name="selected_id"]/../following-sibling::td//a[contains(@href,"index.php?module=Leads&parenttab=Marketing&action=DetailView&record=48")])[1]').textContent()
// // console.log((name));

// // if(name==leadData.secondname)
// // {
// //     console.log(('Pass'));
    
// // }
// // else{
// //     console.log('Fail');
    
// // }
// //!logout
// await page.locator('//img[@src="themes/softed/images/user.PNG"]').hover()
// await page.locator('//a[text()="Sign Out"]').click()
// })

// test('POM',async({page})=>{
//     test.slow()
//     let signIn = new loginPage(page)
//     await signIn.launch(signin.url)
//     await signIn.enterDetails(signin.username,signin.password)
//     let createLeads= new lead1(page)
//     await createLeads.createLeadDetails(leadData.secondname,leadData.companyname)
//     let log_Out= new logout(page)
//     await log_Out.signout()
// })





// // test.only('ddt',async({page})=>{
// //     await page.goto(signin.url)
// //     await page.locator('//input[@name="user_name"]').fill(signin.username)
// //     await page.locator('//input[@name="user_password"]').fill(signin.password)
// //     await page.locator('#submitButton').click()
// // })
// // test('test2- delete one created record',async({page})=>{
// // await page.goto('http://localhost:8888/index.php?module=Leads&action=index')
// // await page.locator('//input[@name="user_name"]').fill('admin')
// // await page.locator('//input[@name="user_password"]').fill('admin')
// // await page.locator('#submitButton').click()
// // await page.locator('//a[@href="index.php?module=Leads&action=index"]').click()
// // await page.locator('//img[@title="Create Lead..."]').click()
// // await page.locator('//select[@name="salutationtype"]').selectOption({index:3})
// // await page.locator('(//input[@class="detailedViewTextBox"])[1]').fill('al1')
// // await page.locator('//input[@name="lastname"]').fill('al2')
// // await page.locator('//input[@name="company"]').fill('company_1')
// // await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()
// // await page.waitForTimeout(2000)
// // await page.locator('//a[@href="index.php?module=Leads&action=index"]').click()
// // await page.locator('//img[@title="Create Lead..."]').click()
// // await page.locator('//select[@name="salutationtype"]').selectOption({index:3})
// // await page.locator('(//input[@class="detailedViewTextBox"])[1]').fill('al3')
// // await page.locator('//input[@name="lastname"]').fill('al4')
// // await page.locator('//input[@name="company"]').fill('company_2')
// // await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()
// // await page.locator('//a[@href="index.php?module=Leads&action=index"]').click()
// // await page.locator('//input[@id="2"]').check()
// // page.once('dialog',async(dialog)=>{
// //     let type= await dialog.type()
// //     console.log(type);
    
// //     dialog.accept()
// // })
// // await page.locator('(//input[@class="crmbutton small delete"])[1]').click()

// // })

// // test('test3-edit one lead details',async({page})=>{
// // await page.goto('http://localhost:8888/index.php?module=Leads&action=index')
// // await page.locator('//input[@name="user_name"]').fill('admin')
// // await page.locator('//input[@name="user_password"]').fill('admin')
// // await page.locator('#submitButton').click()
// // await page.locator('//a[@href="index.php?module=Leads&action=index"]').click()
// // await page.locator('//img[@title="Create Lead..."]').click()
// // await page.locator('//select[@name="salutationtype"]').selectOption({index:1})
// // await page.locator('(//input[@class="detailedViewTextBox"])[1]').fill('Mand')
// // await page.locator('//input[@name="lastname"]').fill('Mand')
// // await page.locator('//input[@name="company"]').fill('Cognosin')
// // await page.locator('(//input[@title="Save [Alt+S]"])[1]').click()
// // await page.waitForTimeout(2000)
// // await page.locator('//a[@href="index.php?module=Leads&action=index"]').click()
// // await page.locator('//input[@class="txtBox"]').fill('sandi')
// // await page.locator('(//select[@id="bas_searchfield"])[1]').selectOption('Last Name')
// // await page.getByRole('button',{name:' Search Now '}).click()
// // await page.locator('(//input[@type="checkbox"])[2]').check()
// // page.locator('(//input[@value="Mass Edit"])[1]').click() 
// // await page.locator('//input[@name="lastname"]').fill('Sandy')
// // await page.locator('//input[@name="company"]').fill('company')
// // await page.locator('//input[@class="crmbutton small save"]').click()


// // })
// // test.only('test4-send email',async({page})=>{
// // await page.goto('http://localhost:8888/index.php?module=Leads&action=index')
// // await page.locator('//input[@name="user_name"]').fill('admin')
// // await page.locator('//input[@name="user_password"]').fill('admin')
// // await page.locator('#submitButton').click()
// // await page.locator('//a[@href="index.php?module=Leads&action=index"]').click()
// // await page.locator('//input[@class="txtBox"]').fill('sandi')
// // await page.locator('(//select[@id="bas_searchfield"])[1]').selectOption('Last Name')
// // await page.getByRole('button',{name:' Search Now '}).click()
// // await page.locator('(//input[@name="selected_id"])[1]').check()
// // await page.locator('(//input[@value="Send Mail"])[1]').click()
// // await page.waitForTimeout(3000)
// // let [popup]= await Promise.all([
// //     page.waitForEvent('popup'),
// //     page.locator('//input[@name="Select"]').click()
// // ])
// // await popup.locator('//input[@id="parent_name"]').fill('dhara@gmail.com')
// // await popup.locator('//input[@name="subject"]').fill('Send Messsage')
// // })