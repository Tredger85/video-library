import * as puppeteer from 'puppeteer';
import { PuppetVideoDto } from '../dto/puppet-video.dto';

export class VideoPuppeteer {
  async puppet(title: string): Promise<PuppetVideoDto> {
    //because the title is passed to the url, no spaces are available
    title = title.replace(' ', '_');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    //try catch should be added here as some films do not have film ending and some do
    //try film first and then if return of 200? try without
    await page.goto('https://en.wikipedia.org/wiki/' + title + '_(film)');
    const director = await page.evaluate(() => {
      return Array.from(
        document.querySelectorAll(
          // eslint-disable-next-line prettier/prettier
          "#mw-content-text > div.mw-parser-output > table.infobox.vevent > tbody > tr:nth-child(3) > td > a"))
        .map((x) => x.textContent);
    });
    const stars = await page.evaluate(() => {
      return Array.from(
        document.querySelectorAll(
          // eslint-disable-next-line prettier/prettier
          "#mw-content-text > div.mw-parser-output > table.infobox.vevent > tbody > tr:nth-child(8) > td > div > ul"))
        .map((x) => x.textContent);
    });
    await browser.close();
    return { director, stars };
  }
}
