import express, { json } from "express";
import dotenv from "dotenv";
import { config } from "serpapi";
import cors from "cors";
import {getResults, search } from './search.js';

dotenv.config();


const app = express();

app.use(json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
console.log(`Server listening on port ${PORT}\n-------------------------`);

app.get('/', function (req, res) {
    res.redirect('/search');
});

app.get("/search:q", getResults, search, (req, res) => {
  console.log(res.locals.result)
  res.status(200).json(res.locals.result);
});

});