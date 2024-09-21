import express from "express";
import v1Router from "./v1/v1.routes.js";
import globalRouter from "./global/global.routes.js";

const apiRouter = express.Router();

apiRouter.use(
  "/api",
  v1Router,
);

apiRouter.use(globalRouter);

export default apiRouter;
