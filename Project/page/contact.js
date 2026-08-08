import {test,expect} from '@playwright/test'

export class Contact{
    constructor(page){
    this.page= page;
    this.contact=page.locator('(//a[text()="Contacts"])[1]');
    this.createContact=page.locator('(//a[@href="index.php?module=Contacts&action=EditView&return_action=DetailView&parenttab=Marketing"])[1]');
    this.lastName=page.locator('//input[@name="lastname"]');
    this.save=page.locator('//input[@class="crmButton small save"]');
    this.verify =page.locator('//span[@class="dvHeaderText"]')  

    }

    async createContactDetails(secondName){
    await this.contact.click()
    await this.createContact.click()
    await this.lastName.fill(secondName)
    await this.save.click()
    await this.page.waitForTimeout(3000)
    await expect(this.verify).toContainText(secondName)
    }
    
}