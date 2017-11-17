import * as express from "express";
import { api } from "./api";

const app = express();

app.use(express.static("public"));

app.use("/api", api);

app.listen(9000, () => console.log("HTTP server up on port 9000"));
