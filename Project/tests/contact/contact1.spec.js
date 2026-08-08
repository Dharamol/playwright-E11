import {test} from '../../fixtures/contact.spec'
import data from '../TestData/contact.json'

test('create contact',async({contact})=>{
    test.slow()
    await contact.createContactDetails(data.lastname)
})