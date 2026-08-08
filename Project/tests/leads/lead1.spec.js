import {test} from '../../fixtures/lead.spec'
import leadD from '../TestData/lead.json'


test('Create Lead',async({lead})=>{
test.slow()
await lead.createLeadDetails(leadD.secondname,leadD.companyname)
})