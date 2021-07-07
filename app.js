import puppeteer from 'puppeteer';
(async () => {
  //opens actual chromium browser
  const browser = await puppeteer.launch({ headless: false });
  //opens a new page
  const page = await browser.newPage();

  await page.goto('http://www.facebook.com/marketplace', { waitUntil: 'networkidle0' });

  const grabMarketPlaceEntries = await page.evaluate(() => {
    const titleTags = [...document.querySelectorAll('img')].map(element => {
     return { 
       name: element.alt,
       src: element.src
    }
    //filter for price?
    });

    return titleTags;
  });
  console.log(grabMarketPlaceEntries); 
  await browser.close();
})();
