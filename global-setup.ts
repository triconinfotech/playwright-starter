import { chromium, FullConfig } from '@playwright/test';
import login from './utils/login';

const username = process.env.USERNAME ?? '';
const password = process.env.PASSWORD ?? '';

async function globalSetup(config: FullConfig): Promise<void> {
  // Deafult login will be headless, add option false in launch to follow along { headless: false } or remove to keep headless
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await login(page, username, password);

  // Click text=Don't show this message again.
  await page.locator('text=Don\'t show this message again.').click();
  // Click ok to pop-up [data-testid="primaryBtn"]
  await page.locator('[data-testid="primaryBtn"]').click();

  await page.context().storageState({path: 'storage-state/storageState.json'});
  await browser.close();
}

export default globalSetup;
