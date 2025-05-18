// @ts-check
import { test, expect } from '@playwright/test';

test('Able to add New Product', async ({ page }) => {
  await page.goto('/HTML-Test');
  expect(await page.title()).toEqual('Add New Product');
  console.log("title: ", await page.title());

  await page.locator('#productName').fill('Pineapple');
  await page.locator('#productQuantity').fill('123');
  await page.getByRole('button', { name: 'Add Product' }).click();
  page.close();
});


