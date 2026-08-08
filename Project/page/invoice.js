import {test} from '@playwright/test'
import { window } from '../../Utils/windowHandling.spec';
import { randomNum } from '../../Utils/random.spec';
 export class Invoice{
    constructor(page){
        this.page=page;
        this.more=page.getByText('More');
        this.invoice= page.locator('//a[@name="Invoice"]');
        this.createInvoice=page.locator('//img[@src="themes/softed/images/btnL3Add.gif"]');
        this.invoiceName=page.locator('//input[@name="subject"]');
//! first popup = organization
        this.orgNameLink=page.locator('(//img[@src="themes/softed/images/select.gif"])[2]');
        
//!address
        this.billAdd=page.locator('//textarea[@name="bill_street"]');
        this.shipAdd=page.locator('//textarea[@name="ship_street"]');
//!second popup - product
        this.productClick=page.locator('//img[@id="searchIcon1"]')
        //this.prodSearch=popup1.locator('//img[@id="searchIcon1"]');
        
//!quantity
        this.quantity = page.locator('//input[@id="qty1"]');
//! save
        this.save=page.locator('(//input[@class="crmbutton small save"])[2]');
        //! verify
        this.verify =page.locator('//span[@class="lvtHeaderText"]')

    }
    async createInvoiceDetails(name,orgName,billAddress,shipAddress,prodName,qVal){
        await this.more.hover()
        await this.invoice.click()
        await this.createInvoice.click()
        let num= await randomNum()
        await this.invoiceName.fill(name+num)
let popup=await window(this.page,this.orgNameLink.click())
        // let [popup]= await Promise.all([
        //     this.page.waitForEvent('popup'),
        //     this.orgNameLink.click()
        // ])
         this.orgtext=popup.locator('//input[@name="search_text"]').fill(orgName);
         this.search=popup.locator('//input[@name="search"]').click();
         this.result=popup.locator('//a[@class="listFormHeaderLinks"]/../../following-sibling::tr//a[@id="1"]').click();

        await this.billAdd.fill(billAddress)
        await this.shipAdd.fill(shipAddress)
let popup1=await window(this.page,this.productClick.click())
        // let [popup1] = await Promise.all([
        //     this.page.waitForEvent('popup'),
        //     this.productClick.click()
        // ])
        this.prodText =popup1.locator('//input[@name="search_text"]')
        this.prodSearch=popup1.locator('//input[@name="search"]')
        this.result=popup1.locator('//a[@class="listFormHeaderLinks"]/../../following-sibling::tr//a[@id="popup_product_39"]').click();
        await this.quantity.fill(qVal)
        await this.save.click()
        await this.page.waitForTimeout(3000)
        await expect(this.verify).toContainText(name+num)
    }
 }