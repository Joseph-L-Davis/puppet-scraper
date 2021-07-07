import dotenv from 'dotenv';
dotenv.config();
import puppeteer from 'puppeteer';


const myEmail = process.env.username;
const myPass = process.env.password;

const marketplace = 'https://www.facebook.com/marketplace';




(async () => {
  //open browser and login
  const browser = await puppeteer.launch({ headless: false, defaultViewport: null });
  const page = await browser.newPage();
  await page.goto(marketplace);

  await page.waitForSelector('input[name=email]');
  await page.waitForSelector('input[name=pass]');

  await page.type('input[name=email]', 'gabrielsimek@outlook.com')
  await page.type('input[name=pass]', myPass)

  await page.keyboard.press('Enter')

 

  // await page.goto('http://www.facebook.com/marketplace', { waitUntil: 'networkidle0' });
  await page.waitForNavigation()

  //grab html elements
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

