const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, 'qa-output');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const VIEWPORTS = [
  { name: 'mobile-sm', width: 375, height: 812 },
  { name: 'mobile-lg', width: 430, height: 932 },
  { name: 'tablet',    width: 768, height: 1024 },
];

const PAGES = [
  { name: 'home',      path: '/' },
  { name: 'kurzy',     path: '/kurzy' },
  { name: 'exclusive', path: '/exclusive' },
  { name: 'cenik',     path: '/cenik' },
  { name: 'o-nas',     path: '/o-nas' },
  { name: 'studenti',  path: '/studenti' },
  { name: 'kontakt',   path: '/kontakt' },
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const report = { overflows: [], pages: [] };

  for (const pg of PAGES) {
    for (const vp of VIEWPORTS) {
      const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
      const page = await ctx.newPage();
      await page.goto(`http://localhost:3030${pg.path}`, { waitUntil: 'domcontentloaded', timeout: 20000 });
      await page.waitForTimeout(2000);

      // Full-page screenshot
      await page.screenshot({
        path: path.join(OUT, `${pg.name}-${vp.name}.png`),
        fullPage: true,
      });

      // Check real horizontal overflow
      const { scrollW, clientW } = await page.evaluate(() => ({
        scrollW: document.documentElement.scrollWidth,
        clientW: document.documentElement.clientWidth,
      }));
      const hasOverflow = scrollW > clientW + 1;
      if (hasOverflow) {
        report.overflows.push({ page: pg.path, viewport: vp.name, scrollWidth: scrollW, clientWidth: clientW });
      }

      // Font sizes
      const bodyFont = await page.$eval('body', el => window.getComputedStyle(el).fontSize);
      const h1Font   = await page.$eval('h1',  el => window.getComputedStyle(el).fontSize).catch(() => 'N/A');

      report.pages.push({ page: pg.path, ...vp, bodyFont, h1Font, scrollWidth: scrollW, clientWidth: clientW, overflow: hasOverflow });
      await ctx.close();
    }
  }

  fs.writeFileSync(path.join(OUT, 'mobile-report.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  await browser.close();
  process.exit(report.overflows.length > 0 ? 1 : 0);
})();
