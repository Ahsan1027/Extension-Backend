import express from 'express';

import {
  AddData,
  GetData
} from '../controllers/scrape-friends'

const router = express.Router();

router.post('/add-data', AddData);
router.get('/get-data', GetData);

export default router;