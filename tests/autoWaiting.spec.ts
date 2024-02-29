import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://uitestingplayground.com/ajax');
    await page.getByText('Button Triggering AJAX Request').click();
});

test('auto waiting', async({page}) => {
    const successButton = page.locator('.bg-success')

    //await successButton.click();

    // const text = await successButton.textContent();
    // expect(text).toEqual('Data loaded with AJAX get request.')



    await successButton.waitFor({state: 'attached'});
    const texts = await successButton.allTextContents()
    expect(texts).toContain('Data loaded with AJAX get request.')

    // this has timeout 5s
    await expect(successButton).toHaveText("Data loaded with AJAX get request.", { timeout: 20000 });

});

test('alternative waits', async ({page}) => {
    const successButton = page.locator('.bg-success')

    // wait for element
    //await page.waitForSelector('.bg-success');


    // wait for particular response
    //await page.waitForResponse('http://uitestingplayground.com/ajaxdata');

    // wait for network calls to be completed NOT RECOMMENDED
    await page.waitForLoadState('networkidle');
});


test('timeouts', async ({page}) => {
    const successButton = page.locator('.bg-success')
    await successButton.click();
});