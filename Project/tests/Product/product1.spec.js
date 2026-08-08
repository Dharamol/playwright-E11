import {test} from '../../fixtures/product.spec'
import data from '../TestData/product.json'

 test('create product',async({product})=>{
     await product.createProductDetails(data.proName)
 })