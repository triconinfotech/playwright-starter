import { Page } from '@playwright/test';

async function login(
  page: Page,
  username: string,
  password: string,
): Promise<void> {
  await page.goto(process.env.BASE_URL);
  await page.locator('[placeholder="Username"]').fill(username);
  await page.locator('[placeholder="Password"]').fill(password);
  await page.locator('text=I have read and agree the Terms and Conditions of Toorak Sign  >> span').nth(1).click();

  await Promise.all([
    page.waitForNavigation(),
    page.locator('button[role="button"]:has-text("Sign In")').click()
  ]);
}

export default login;