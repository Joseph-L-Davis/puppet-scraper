import dotenv from 'dotenv';
dotenv.config();
import puppeteer from 'puppeteer';
import { JSDOM } from 'jsdom';
import fetch from 'node-fetch';
import ingest from './app.js';
import  fs  from 'fs';

const myEmail = process.env.username;
const myPass = process.env.password;

const marketplace = 'https://www.facebook.com/marketplace';




(async () => {
  const browser = await puppeteer.launch({ headless: false, defaultViewport: null });
  const page = await browser.newPage();
  await page.goto(marketplace);
  //   await page.evaluate(() => {
  //     const elements = document.getElementsByName('div');
  //   });
  const details = await ingest(marketplace);
  const dom = new JSDOM(details);
  const document = dom.window.document;
  const email = document.getElementsByName('email');
  const password = document.getElementsByName('pass');
  
  fs.writeFile(details);

//   await page.type(email, myEmail);
//   await page.type(password, myPass);
})();

