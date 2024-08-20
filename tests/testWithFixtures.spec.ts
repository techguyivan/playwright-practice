import { test } from '../test-options'
import { faker } from '@faker-js/faker'


test("Parametrized methods", async ({ pageManager }) => {
    const randomFullName = faker.name.fullName()
    const randomEmail = `${randomFullName.replace(' ', '')}${faker.datatype.number(1000)}@test.com`

    await pageManager.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption(process.env.USERNAME, process.env.PASSWORD, "Option 2")
    await pageManager.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox(randomFullName, randomEmail, false)
})