import express from "express";
import {
    createSet,
    fetchSets,
    updateSet,
    deleteSet,
    getSetById,
    searchSetByName,
    fetchSetsCount,
} from "../controller/setController.js";

const route = express.Router();

route.post("/create", createSet);
route.get("/getall", fetchSets);
route.put("/update/:id", updateSet);
route.delete("/delete/:id", deleteSet);
route.get("/get/:id", getSetById);
route.get("/search", searchSetByName);
route.get("/count", fetchSetsCount);

export default route;
