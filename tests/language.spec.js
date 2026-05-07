import { test, expect } from "../framework/fixtures/baseTest";

test("Change Language ", async ({ header, page }) => {
  await header.changeLanguage("es");

  await expect(page.locator("text=Inicio")).toBeVisible();
});
