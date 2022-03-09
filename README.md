# Playwright Starter

To help with increasing Test Authoring leveraging [Playwright](https://playwright.dev/) for all team members

Steps for set up

[Install VS Code](https://code.visualstudio.com/)

Open terminal in VS Code & check if Node version is above [16.10]

```
node -v
```

If node is not installed or a version older than 16.10 is installed [Download the latest version](https://nodejs.org/en/download/)

Enable corepack for Node & install npx with the following commands

```
corepack enable
yarn install npx -g
```

[Install Playwright Test for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

Next Clone this repository </br>
Open the repository folder in VS Code  </br>
Open a Terminal in VS Code from the menu and run the following  </br>

```
yarn install
```

Next create a .env file inside the repository folder with the following properties and fill the values depending environment

```
BASE_URL=https://
USERNAME=
PASSWORD=
```

Run the example test that will generate the json for the authenticated state under storage-state/storageState.json

Record a test by following command and updating BASE_URL in the command below to the actual environment URL
```
npx playwright open --load-storage=storage-state/storageState.json https://BASE_URL
```
This will open a browser with the playwright inspector </br>
Once ready to start testing, press record and walkthrough the test case </br>
Once done, stop recording, copy the Playwright test </br>
Create a new test in the test folder by creating a copy of the example test, update the file name and test name to the test case and paste the recording below the following line 
```
await page.goto('/');
```
Re-run any recorded tests either in headless or with debug mode to follow along

Improve tests with [assertions](https://playwright.dev/docs/test-assertions) and choice of [selectors](https://playwright.dev/docs/selectors) for reducing maintaince burder
