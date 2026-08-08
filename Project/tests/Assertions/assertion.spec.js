import {test,expect} from '@playwright/test'
test('assertions',async({page})=>{
    await page.goto('https://www.google.com/')
    await expect(page).toHaveURL('https://www.google.com/')
    await expect(page.getByRole('button',{name:'Google Search'})).toBeVisible()
    await expect(page.getByRole('combobox',{name:'Search'})).toBeEnabled()
    //await expect(page.getByRole('combobox',{name:'Search'})).toBeHidden()
    //await expect.soft(page.getByRole('combobox',{name:'Search'})).toBeDisabled()
    await expect(page.getByRole('link',{name:'About'})).toContainText('About')
    await expect(page.getByRole('link',{name:'About'})).toHaveText('About')
    await expect(page.getByRole('link',{name:'Search'})).toBeEditable('About')
    
})
