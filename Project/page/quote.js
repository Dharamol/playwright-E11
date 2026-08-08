import {test,expect} from '@playwright/test'
import { dropdowns } from '../../Utils/dropDown.spec';
import { window } from '../../Utils/windowHandling.spec';

 export class Quote{
    constructor(page){
        this.page= page;
        this.more =page.getByText('More');
        this.quote=page.getByRole('link',{name:'Quotes'});
        this.createquote=page.locator('//img[@src="themes/softed/images/btnL3Add.gif"]');
        this.quoteName=page.locator('//input[@name="subject"]');
        //!first popup
        this.orgNameLink=page.locator('(//img[@src="themes/softed/images/select.gif"])[3]')

        this.billAdd=page.locator('//textarea[@name="bill_street"]')
        this.shipAdd=page.locator('//textarea[@name="ship_street"]')

        //!second popup
        this.prodLink=page.locator('//img[@id="searchIcon1"]')

        this.quanity=page.locator('//input[@id="qty1"]')
        this.save=page.locator('(//input[@class="crmbutton small save"])[1]')

        this.verify =page.locator('//span[@class="lvtHeaderText"]')
    }
    async createQuoteDetails(quoteName,orgName,billAddress,shipAddress,proName,qun)
    {
            await this.more.hover()
            await this.quote.click()
            await this.createquote.click()
            await this.quoteName.fill(quoteName)
let popup=await window(this.page,this.orgNameLink.click())
            // let [popup] = await Promise.all([
            //     this.page.waitForEvent('popup'),
            //     this.orgNameLink.click()
            // ])
            await popup.locator('//input[@name="search_text"]').fill(orgName)
            await popup.locator('//input[@name="search"]').click()
            await popup.locator('(//a[@class="listFormHeaderLinks"])[1]/../../following-sibling::tr//a[@id="1"]').click()

            await this.billAdd.fill(billAddress)
            await this.shipAdd.fill(shipAddress)
let popup1=await window(this.page,this.prodLink.click())
            // let [popup1] = await Promise.all([
            //     this.page.waitForEvent('popup'),
            //     this.prodLink.click()
            // ])
            await popup1.locator('//input[@name="search_text"]').fill(proName)
            await popup1.locator('//input[@name="search"]').click()
            await popup1.locator('//a[@id="popup_product_40"]').click()

            await this.quanity.fill(qun)
            await this.save.click()
            await this.page.waitForTimeout(3000)
            await expect(this.verify).toContainText(quoteName)

        
    }
 }