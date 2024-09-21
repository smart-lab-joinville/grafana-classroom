import express from "express";
import createImageHandler from "./create-image.js";

const imagesRouter = express.Router();

imagesRouter.route("/images")
  .post(createImageHandler);

export default imagesRouter;
