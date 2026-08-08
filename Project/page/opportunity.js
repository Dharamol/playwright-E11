import {test,expect} from '@playwright/test'
import { window } from '../../Utils/windowHandling.spec';

export class Oppor{
    constructor(page){
        this.page =page;
        this.Opportunity=page.locator('//a[@href="index.php?module=Potentials&action=index"]')
        this.createOpportunity=page.locator('//a[@href="index.php?module=Potentials&action=EditView&return_action=DetailView&parenttab=Sales"]');
        this.opporName=page.locator('//input[@name="potentialname"]')
        this.orgLink =page.locator('(//img[@title="Select"])[1]')
        this.save=page.locator('(//input[@class="crmbutton small save"])[2]')
        this.verify=page.locator('//span[@class="dvHeaderText"]')
    }
    async createOpporDetails(opportunityName,orgName){
    await this.Opportunity.click()
    await this.createOpportunity.click()
    await this.opporName.fill(opportunityName)
    let popup=await window(this.page,this.orgLink.click())
// let[popup]= await Promise.all([
//     this.page.waitForEvent('popup'),
//     this.orgLink.click()

// ])
        await popup.locator('//input[@name="search_text"]').fill(orgName)
        await popup.locator('//input[@name="search"]').click()
        await popup.locator('(//a[@class="listFormHeaderLinks"])[1]/../../following-sibling::tr//a[@id="1"]').click()

        await this.save.click()
        await this.page.waitForTimeout(3000)
        await expect(this.verify).toContainText(opportunityName)
    }
}