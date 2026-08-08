import {test as base} from './login.spec'
import {organization1} from '../page/organization'

export let test=base.extend({
     org:async({Login},use)=>{
        let orgLog= new organization1(Login)
        await use(orgLog)
    },
    contact:async () => {
        
    }
})