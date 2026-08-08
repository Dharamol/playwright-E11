import {test} from '@playwright/test'
export class logout{
    constructor(page){
        this.page=page;
        this.signOut=page.locator('//img[@src="themes/softed/images/user.PNG"]');
        this.logOut=page.locator('//a[text()="Sign Out"]')
    }
    async signout(){
        await this.signOut.hover()
        await this.logOut.click()
    }
}