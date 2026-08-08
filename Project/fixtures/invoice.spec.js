import {test as base} from './login.spec'
import {Invoice} from '../page/invoice'

 export let test= base.extend({
    invoice:async({Login},use)=>{
        let invoiceLog=new Invoice(Login)
        await use(invoiceLog)
    }
 })