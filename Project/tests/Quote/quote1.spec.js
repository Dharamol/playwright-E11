import {test} from '../../fixtures/quote.spec'
import data from '../TestData/quote.json'
import dataO from '../TestData/organization.json'
import dataI from '../TestData/invoice.json'
import dataP from '../TestData/product.json'

 test('create Quote',async({quote})=>{
     await quote.createQuoteDetails(data.subjectName,dataO.orgName,dataI.billAddress,dataI.ShipAddress,dataP.proName,dataI.quantity)
 })