// import packages
import express from 'express';
import mongoose  from 'mongoose';
import cors from 'cors';


const app = express();

// set up
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());
