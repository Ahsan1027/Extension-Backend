import express from 'express';
import 'dotenv/config';

import routers from './routes';
import ApplyMiddlewares from './middlewares';
import './config/database';

const app = express();

ApplyMiddlewares(app);

app.use('/api', routers);

const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// import express from 'express';
// import cors from 'cors';

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.post('/api/scrape-friends/add-data', (req, res) => {
//   const receivedData = req.body;
  
//   console.log('Received data from frontend:', receivedData);
  
//   res.json({ success: true, message: 'Data received successfully.' });
// });

// const PORT = 3001;
// app.listen(PORT, () => {
//   console.log(`API Server is running on http://localhost:${PORT}`);
// });
