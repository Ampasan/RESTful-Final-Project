import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import archetypeRoute from "./routes/archetypeRoute.js";
import cardRoute from "./routes/cardRoute.js";
import effectRoute from "./routes/effectRoute.js";
import rarityRoute from "./routes/rarityRoute.js";
import setRoute from "./routes/setRoute.js";

const app = express();
app.use(bodyParser.json());

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Database connected successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use("/api/archetypes", archetypeRoute);
app.use("/api/cards", cardRoute);
app.use("/api/effects", effectRoute);
app.use("/api/rarities", rarityRoute);
app.use("/api/sets", setRoute);