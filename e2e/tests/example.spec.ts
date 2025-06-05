import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Playwright Sandbox");
  await expect(page).toHaveTitle(/Sandbox/);
});

test("Hide and show intro", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: "Click Me!" }).click();

  await expect(
    page.getByRole("heading", { name: "Click Me!" })
  ).not.toBeVisible();
});
