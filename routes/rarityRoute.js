import express from "express";
import {
    createRarity,
    fetchRarities,
    updateRarity,
    deleteRarity,
    getRarityById,
    searchRarityByName,
    fetchRaritiesCount,
} from "../controller/rarityController.js";

const route = express.Router();

route.post("/create", createRarity);
route.get("/getall", fetchRarities);
route.put("/update/:id", updateRarity);
route.delete("/delete/:id", deleteRarity);
route.get("/get/:id", getRarityById);
route.get("/search", searchRarityByName);
route.get("/count", fetchRaritiesCount);

export default route;
