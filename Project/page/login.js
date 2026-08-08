export class loginPage{
    constructor(page){
        this.page=page;
        this.username=page.locator('//input[@name="user_name"]');
        this.password=page.locator('//input[@name="user_password"]');
        this.button=page.locator('#submitButton')
    }
    async launch (url){
        await this.page.goto(url)
    }
    async enterDetails(loginUsername,loginPassword){
        await this.username.fill(loginUsername)
        await this.password.fill(loginPassword)
        await this.button.click()
    }
}