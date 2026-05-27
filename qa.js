const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, 'qa-output');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

(async () => {
  const browser = await chromium.launch({ headless: true });

  // Desktop
  const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const dPage = await desktop.newPage();
  const errors = [];
  dPage.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });

  await dPage.goto('http://localhost:3030', { waitUntil: 'domcontentloaded', timeout: 20000 });
  await dPage.waitForTimeout(1500);

  const h1Count = await dPage.$$eval('h1', els => els.length);
  const h1Text = await dPage.$eval('h1', el => el.innerText.trim()).catch(() => 'MISSING');
  const bodyFontSize = await dPage.$eval('body', el => window.getComputedStyle(el).fontSize);
  const h1FontSize = await dPage.$eval('h1', el => window.getComputedStyle(el).fontSize).catch(() => 'N/A');
  const ctaVisible = await dPage.locator('text=Chci začít jezdit').isVisible();
  const phoneVisible = await dPage.locator('text=728 492 692').first().isVisible();
  const navVisible = await dPage.locator('nav').first().isVisible();

  await dPage.screenshot({ path: path.join(OUT, 'desktop-full.png'), fullPage: true });
  await dPage.screenshot({ path: path.join(OUT, 'desktop-fold.png'), fullPage: false });

  await dPage.locator('#cenik').scrollIntoViewIfNeeded();
  await dPage.waitForTimeout(400);
  await dPage.screenshot({ path: path.join(OUT, 'desktop-pricing.png'), fullPage: false });

  await dPage.locator('#recenze').scrollIntoViewIfNeeded();
  await dPage.waitForTimeout(400);
  await dPage.screenshot({ path: path.join(OUT, 'desktop-testimonials.png'), fullPage: false });

  await dPage.locator('#faq').scrollIntoViewIfNeeded();
  await dPage.waitForTimeout(400);
  await dPage.screenshot({ path: path.join(OUT, 'desktop-faq.png'), fullPage: false });

  await dPage.locator('#kontakt').scrollIntoViewIfNeeded();
  await dPage.waitForTimeout(400);
  await dPage.screenshot({ path: path.join(OUT, 'desktop-contact.png'), fullPage: false });

  // Mobile
  const mobile = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mPage = await mobile.newPage();
  await mPage.goto('http://localhost:3030', { waitUntil: 'domcontentloaded', timeout: 20000 });
  await mPage.waitForTimeout(1500);

  const mobileFontSize = await mPage.$eval('body', el => window.getComputedStyle(el).fontSize);
  const mobileH1Size = await mPage.$eval('h1', el => window.getComputedStyle(el).fontSize).catch(() => 'N/A');
  const mobileCTA = await mPage.locator('text=Chci začít jezdit').isVisible();

  await mPage.screenshot({ path: path.join(OUT, 'mobile-fold.png'), fullPage: false });
  await mPage.screenshot({ path: path.join(OUT, 'mobile-full.png'), fullPage: true });

  const report = {
    desktop: { h1Count, h1Text, bodyFontSize, h1FontSize, ctaVisible, phoneVisible, navVisible },
    mobile: { mobileFontSize, mobileH1Size, mobileCTA },
    consoleErrors: errors,
  };
  fs.writeFileSync(path.join(OUT, 'report.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  await browser.close();
})();
