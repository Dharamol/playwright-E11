import {test,expect} from '@playwright/test'
import { randomNum } from '../../Utils/random.spec';

export class organization1{
    constructor(page){
        this.page= page;
        this.organization=page.locator('(//a[text()="Organizations"])[1]')
        this.createOrg=page.locator('(//a[@href="index.php?module=Accounts&action=EditView&return_action=DetailView&parenttab=Marketing"])[1]');
        this.orgName= page.locator('//input[@name="accountname"]');
        this.save=page.locator('(//input[@title="Save [Alt+S]"])[1]');
        this.verify =page.locator('//span[@class="dvHeaderText"]')
    }
    async orgDetails(organName){
        await this.organization.click()
        await this.createOrg.click()
        let ranNum=await randomNum()
        await this.orgName.fill(organName+ranNum)
        await this.save.click()
        await this.page.waitForTimeout(3000)
        await expect(this.verify).toContainText(organName+ranNum)
      
    }
}