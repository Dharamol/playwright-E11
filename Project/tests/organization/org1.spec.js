import {test} from '../../fixtures/organization.spec'
import orgData from '../TestData/organization.json'

test('create org',async({org})=>{
    test.slow()
    await org.orgDetails(orgData.orgName)
})