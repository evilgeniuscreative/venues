import { getJson } from "serpapi";
import dotenv from "dotenv";
dotenv.config();
const API_KEY = process.env.SERPAPI_KEY;

export async function getResults(req, res, next) {
  req.params = req.query;
  next();
}

export async function search(req, res, next){
    const params ={}
    params.q=req.params.keyword;
    try{
        const data = await getJson("google", params);
        res.locals.result = data;
        res.status(200);
    }catch{
        res.status(400);
    }
    next();
}

