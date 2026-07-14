import express from "express";
import cors from "cors";

const app = express();

app.set("json spaces", 4);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

export default app;
