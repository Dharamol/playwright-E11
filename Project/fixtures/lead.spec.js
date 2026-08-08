import {test as base} from './login.spec'
import {lead1} from '../page/lead'


export let test =base.extend({
    lead:async({Login},use)=>{
        let leadLog= new lead1(Login)
     
       await use(leadLog)
    },
    contact:async () => {
        
    }
})