import express from "express";
import { home, 
    getLogin, postLogin, getLogout,
    getJoin } from "../controllers/rootController";


const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.get("/logout", getLogout);
rootRouter.route("/join").get(getJoin);

export default rootRouter;