const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  const filePath = 'file://' + path.resolve(__dirname, 'index.html');
  await page.goto(filePath, { waitUntil: 'networkidle0' });

  await page.screenshot({
    path: 'screenshot.png',
    fullPage: true
  });

  await browser.close();
  console.log('Screenshot saved as screenshot.png');
})();
