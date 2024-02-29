import { test } from '@playwright/test';
import { PageManager } from '../page-objects/pageManager';

test.beforeEach(async({page}) =>{
    await page.goto('http://localhost:4200');
});

test('navigate to form page', async ({page})=>{
    const pageManager = new PageManager(page);
    await pageManager.navigateTo().formLayoutPage();
    await pageManager.navigateTo().datepickerPage();
    await pageManager.navigateTo().smartTablePage();
    await pageManager.navigateTo().toastrPage();
    await pageManager.navigateTo().tooltipPage();
});

test('parametrized methods', async ({page})=>{
    const pageManager = new PageManager(page);

    await pageManager.navigateTo().formLayoutPage();
    await pageManager.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption('test@test.com', 'Welcome1', 'Option 1');
    await pageManager.onFormLayoutsPage().submitInlineFormWithNameEmailAndCheckbox('John Smith', "John@test.com", true);
    await pageManager.navigateTo().datepickerPage();
    await pageManager.onDatepickerPage().selectCommonDatePickerDateFromToday(5);
    await pageManager.onDatepickerPage().selectDatepickerWithRangeFromToday(6, 15);
});