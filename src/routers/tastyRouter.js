import express from "express";
import {getTastyList,
    getTastyWrite} from "../controllers/tastyController";

const tastyRouter = express.Router();

tastyRouter.route("/").get(getTastyList);
tastyRouter.route("/write").get(getTastyWrite);

export default tastyRouter;