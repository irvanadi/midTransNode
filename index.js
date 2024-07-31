import express from "express";
import dotenv from "dotenv/config";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./route.js";

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); // support encoded bodies

app.use("/api", routes);

app.listen(process.env.PORT, () =>
	console.log(`App Listening to ${process.env.BASE_URL}`)
);
