import express from "express";
import {getTastyList} from "../controllers/tastyController";

const tastyRouter = express.Router();

tastyRouter.route("/").get(getTastyList);

export default tastyRouter;