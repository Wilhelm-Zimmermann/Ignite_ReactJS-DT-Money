import express, { NextFunction, Response, Request } from "express";
import createConnection from "../typeorm/database";
import "reflect-metadata";
import "../../container"
import cors from "cors";
import { router } from "./index.routes";

createConnection();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api",router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    return res.status(500).json({ error: "Internal Server Error", message: err.message});
});

export { app }