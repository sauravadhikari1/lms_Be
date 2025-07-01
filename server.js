import express from 'express';

import cors from 'cors';
import morgan from 'morgan';
import {connectDB} from './src/config/dbConfig.js';

const app = express();
const PORT = process.env.PORT || 8000;



//DB connection
connectDB().then(() => {
  app.listen(PORT, error => {
  if (error) {
    console.error(`Error occurred: ${error.message}`);
  } else {
    console.log(`Server is running at http://localhost:${PORT}`);
  }
});
}).catch(error => {
  console.error(`Database connection error: ${error.message}`);
});

//Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


//api endpoinds
import authRoutes from './src/routes/authRoutes.js';


app.use('/api/v1/auth', authRoutes);



//Server status
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

