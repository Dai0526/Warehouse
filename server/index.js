// import packages
import express from 'express';
import mongoose  from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

// routes
app.use('/posts', postRoutes); // post routes will start with /posts

// set up
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// db connector
const DB_URL = 'mongodb+srv://tianhuaf:tianhuaf0526@cluster0.kwioq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
