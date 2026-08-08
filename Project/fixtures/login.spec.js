import {test as base} from '@playwright/test'
import { loginPage } from '../page/login'
import {logout} from '../page/logout'
import signin from'../tests/TestData/login.json'

export let test =base.extend({
    Login:async({page},use)=>{
        let log= new loginPage(page)
        let logoutLog =new logout(page)
        await log.launch(signin.url)
        await log.enterDetails(signin.username,signin.password)
        
        await use(page)
        await logoutLog.signout()

    }
})