import {test,expect} from'@playwright/test'
 export class Product{
    constructor(page){
        this.page= page;
        this.product=page.locator('//a[@href="index.php?module=Products&action=index"]');
        this.createProduct=page.locator('//img[@src="themes/softed/images/btnL3Add.gif"]');
        this.productName=page.locator('//input[@name="productname"]');
        this.save=page.locator('(//input[@class="crmbutton small save"])[1]');
        this.verify =page.locator('//span[@class="lvtHeaderText"]')
    }
    async createProductDetails(prodName){
        await this.product.click()
        await  this.createProduct.click()
        await this.productName.fill(prodName)
        await this.save.click()
        await this.page.waitForTimeout(3000)
        await expect(this.verify).toContainText(prodName)

    } }