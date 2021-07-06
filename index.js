import dotenv from 'dotenv';
dotenv.config();
import puppeteer from 'puppeteer';
import { JSDOM } from 'jsdom';
import fetch from 'puppeteer-fetch';

const marketplace = 'https://www.facebook.com/marketplace';

(async () => {
  const browser = await puppeteer.launch({ headless: false, defaultViewport: null });
  const page = await browser.newPage();
  await page.goto(marketplace);
  
//   const 
//   const dom = new JSDOM();
//   const document = dom.window.document;
//   const email = dom.getElementsByName();
})();
