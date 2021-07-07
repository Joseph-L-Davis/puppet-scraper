import webScraper from '../utils/scraper.js';
import Post from '../models/Post.js';

export default class ScraperServices {
  static async loginAndGetDetails(){
    const data = await webScraper();

    await Promise.all(
      data.map(data =>  
        Post.insert(data.name, data.src)
      )
    );
    return data;
  }
}
