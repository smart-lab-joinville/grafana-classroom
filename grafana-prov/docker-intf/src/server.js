import express from "express";
import helloWorld from "./routes/hello-world";
import socket from "./socket/socket";

socket;

const app = express();

app.get("/", helloWorld);

app.listen(3861, () => console.log("Hello World!! ~ Server OK"));
