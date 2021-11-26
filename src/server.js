import "dotenv/config";
import express from "express";
import rootRouter from "./routers/rootRouter";
import { authenticateAccessToken } from "./middlewares";
import cookieParser from "cookie-parser";


const PORT = 4000;
const app = express();

app.set("views", process.cwd()+"/src/views");
app.set('view engine', 'pug');
app.use("/public", express.static("public"));

app.use(cookieParser());
app.use(express.urlencoded({extended:true}));

app.use(authenticateAccessToken);
app.use("/", rootRouter);

app.listen(PORT, () => {
    console.log(`✔️ Connect PORT: ${PORT}.`);    
});