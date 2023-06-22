//const express = require('express');
/*
const mongoose = require('mongoose');
const cors = require('cors');
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";*/
import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";
import dotenv from "dotenv";
//import MONGO_URL from "./env";
//console.log("Hello world");
const MONGODB_URL = process.env.MONGODB_URL;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/user', router);
app.use('/api/blog', blogRouter);
mongoose.connect('mongodb+srv://raunakroybarman:N6VSZOIqg9FMZiab@cluster0.w77qzgd.mongodb.net/Blog?retryWrites=true&w=majority')
    .then(() => app.listen(5000))
    .then(() => {
        console.log("App got connected to database and listening to localhost 5000");
    }).catch(err => console.log(err));