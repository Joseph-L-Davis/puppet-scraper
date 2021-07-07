import dotenv from 'dotenv';
dotenv.config();
import puppeteer from 'puppeteer';


const myEmail = process.env.username;
const myPass = process.env.password;

const marketplace = 'https://www.facebook.com/marketplace';




(async () => {
  const browser = await puppeteer.launch({ headless: false, defaultViewport: null });
  const page = await browser.newPage();
  await page.goto(marketplace);

  await page.waitForSelector('input[name=email]');

  page.evaluate(() => {
    // const email = document.querySelector('input[name=email]');
    const email = document.getElementsByName('email');
    // const password = document.getElementsByName('pass');
    return email.innerHTML;
    
  })
    .then(email => console.log(email));
  

//   await page.type(email, myEmail);
//   await page.type(password, myPass);
})();

