import { test, expect } from "../framework/fixtures/baseTest";

test("Filter procucts by category", async ({ homePage }) => {
  await homePage.filterByHandTools();

  await expect(homePage.filterComplete).toBeVisible();

  await expect(homePage.filterProductCards.first()).toBeVisible();

  await homePage.selectFirstFilterProduct();
});
