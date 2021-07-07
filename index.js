import dotenv from 'dotenv';
dotenv.config();
import puppeteer from 'puppeteer';


const myEmail = process.env.username;
const myPass = process.env.password;

const marketplace = 'https://www.facebook.com/marketplace';




(async () => {
  try {
    
  //open browser and login
  const browser = await puppeteer.launch();
  //to see browser live copy into launch()
  // { headless: false, defaultViewport: null }
  
  const page = await browser.newPage();
  await page.goto(marketplace);

  await page.waitForSelector('input[name=email]');
  await page.waitForSelector('input[name=pass]');

  await page.type('input[name=email]', 'gabrielsimek@outlook.com')
  await page.type('input[name=pass]', myPass)

  await page.keyboard.press('Enter')


  //grab html elements
  //include sinceListed searchParam
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
  console.log(grabMarketPlaceEntries, grabMarketPlaceEntries.length); 
  await browser.close();

} catch (error) {
    console.error(error)
}
})();

