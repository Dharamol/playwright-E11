import {test as base} from './login.spec'
import {Contact} from '../page/contact'
 export let test= base.extend({
    contact:async({Login},use)=>{
        let contactLog= new Contact(Login)
        await use(contactLog)
    }
 })