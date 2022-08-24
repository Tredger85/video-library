import * as puppeteer from 'puppeteer';

export class VideoPuppeteer {
  async puppet(title: string): Promise<void> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://en.wikipedia.org/wiki/Thor_(film)');
    const director = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('')).map(
        (x) => x.textContent,
      );
    });
    await page.screenshot({ path: title + '.png' });
    await browser.close();
  }
}
