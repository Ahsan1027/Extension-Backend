import express from 'express';

import ScrapeFriends from './scrape-friends';

const router = express.Router();

router.use('/scrape-friends',ScrapeFriends);

export default router;