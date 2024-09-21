import express from "express";
import containersRouter from "./routes/containers/.containers.routes.js";
import imagesRouter from "./routes/images/.images.routes.js";

const v1Router = express.Router();

v1Router.use(
  "/v1",
  containersRouter,
  imagesRouter,
);

export default v1Router;
