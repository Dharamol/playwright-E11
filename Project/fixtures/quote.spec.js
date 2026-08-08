import {test as base} from './login.spec'
import {Quote} from '../page/quote'

 export let test= base.extend({
    quote:async({Login},use)=>{
        let quoteLog=new Quote(Login)
        await use(quoteLog)
    }
 })