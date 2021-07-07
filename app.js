import puppeteer from 'puppeteer';
(async () => {
  //opens actual chromium browser
  const browser = await puppeteer.launch({ headless: false });
  //opens a new page
  const page = await browser.newPage();

  await page.goto('http://www.facebook.com/marketplace', { waitUntil: 'networkidle0' });
  //try to get unique identifiers
  const grabMarketpalceEntries = await page.evaluate(() => {
    const titleTags = [...document.querySelectorAll('img')].map(element => element.alt);
    //  const titles = []
    //  titleTags.forEach((element) => {
    //    titles.push(element.innerHTML)
    //  })
    return titleTags;
  });
  console.log(grabMarketpalceEntries); 
  await browser.close();
})();
