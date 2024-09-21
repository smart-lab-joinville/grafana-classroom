import express from "express";
import createContainerHandler from "./create-container.js";

const containersRouter = express.Router();

containersRouter.route("/containers")
  .post(createContainerHandler);

export default containersRouter;
