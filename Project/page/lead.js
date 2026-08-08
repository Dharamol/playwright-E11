import {expect} from '@playwright/test'
import { dropdowns } from '../../Utils/dropDown.spec';
import { randomNum } from '../../Utils/random.spec';
export class lead1{
    constructor(page){
        this.page= page;
        this.leadClick=page.locator('//a[@href="index.php?module=Leads&action=index"]');
        this.createLead=page.locator('//img[@title="Create Lead..."]');
        this.dropdown=page.locator('//select[@name="salutationtype"]');
        this.lastname=page.locator('//input[@name="lastname"]');
        this.companyname=page.locator('//input[@name="company"]');
        this.save =page.locator('(//input[@title="Save [Alt+S]"])[1]');
        this.verify =page.locator('//span[@class="dvHeaderText"]')
    }
    async createLeadDetails(secondName,companyName){
        await this.leadClick.click()
        await this.createLead.click()
        await dropdowns(this.dropdown,{index:4})
let ranNum=await randomNum()
        await this.lastname.fill(secondName+ranNum)
        await this.companyname.fill(companyName)
        await this.save.click()
        await expect(this.verify).toContainText(secondName)
    }
}