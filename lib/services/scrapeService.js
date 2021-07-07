import webscraper from '../utils/scraper.js';
import Post from '../models/Post.js';

export default class ScraperServices {
  static async loginAndGetDetails(){
    const data = webscraper();

    const postedData = await Promise.all(
      data.map(data =>  
        Post.insert(data.name, data.src)
      )
    );
    return postedData;
  }
}
