import express from "express";
import { home, 
    getLogin } from "../controllers/rootController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/login", getLogin);

export default rootRouter;