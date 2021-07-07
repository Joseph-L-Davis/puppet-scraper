import { Router } from 'express';
// import Post from '../models/Post.js';
import ScraperServices from '../services/scrapeService.js';

export default Router()

  .get('/api/v1/posts', async (req, res, next) => {
    ScraperServices.loginAndGetDetails()
      .then(data => res.send(data))
      .catch(next);
  });
