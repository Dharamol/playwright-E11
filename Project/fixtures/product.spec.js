import {test as base} from './login.spec'
import {Product} from '../page/product'

 export let test= base.extend({
    product:async({Login},use)=>{
        let proLog=new Product(Login)
        await use(proLog)
    }
 })