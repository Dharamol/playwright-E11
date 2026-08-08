import {test as base} from './login.spec'
import {Oppor} from '../page/opportunity'

 export let test= base.extend({
    oppr:async({Login},use)=>{
        let opporLog=new Oppor(Login)
        await use(opporLog)
    }
 })