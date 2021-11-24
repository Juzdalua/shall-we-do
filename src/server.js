import express from "express";
import rootRouter from "./routers/rootRouter";


const PORT = 4000;
const app = express();

app.set("views", process.cwd()+"/src/views");
app.set('view engine', 'pug');
app.use("/public", express.static("public"));

app.use("/", rootRouter);

app.listen(PORT, () => {
    console.log(`✔️ Connect PORT: ${PORT}.`);    
});