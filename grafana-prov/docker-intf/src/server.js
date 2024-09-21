import express from "express";
import apiRouter from "./api/api.routes.js";

const app = express();

app.use(apiRouter);

app.listen(3861, () => console.log("Hello World!! ~ Server OK"));
