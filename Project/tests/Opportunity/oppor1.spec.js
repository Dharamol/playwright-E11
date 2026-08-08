import {test} from '../../fixtures/oppor.spec'
import data from '../TestData/opportunity.json'
import dataO from '../TestData/organization.json'

 test('create Opportunity',async({oppr})=>{
     await oppr.createOpporDetails(data.opp_Name,dataO.orgName)
 })