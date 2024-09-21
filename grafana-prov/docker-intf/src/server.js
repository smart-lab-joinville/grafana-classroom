import express from "express";
import helloWorld from "./routes/hello-world";

const app = express();

app.get("/", helloWorld);

app.listen(3861, () => console.log("Hello World!! ~ Server OK"));
