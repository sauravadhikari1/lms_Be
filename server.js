import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
const app = express();
const PORT = process.env.PORT || 8000;

//Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


//Server status
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, error => {
  if (error) {
    console.error(`Error occurred: ${error.message}`);
  } else {
    console.log(`Server is running at http://localhost:${PORT}`);
  }
});