import express from "express";
import notFoundHandler from "./not-found.js";

const globalRouter = express.Router();

globalRouter.all("*", notFoundHandler);

export default globalRouter;
