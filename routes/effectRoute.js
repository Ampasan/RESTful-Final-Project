import express from "express";
import {
    createEffect,
    fetchEffects,
    updateEffect,
    deleteEffect,
    getEffectById,
    searchEffectByName,
    fetchEffectsCount,
} from "../controller/effectController.js";

const route = express.Router();

route.post("/create", createEffect);
route.get("/getall", fetchEffects);
route.put("/update/:id", updateEffect);
route.delete("/delete/:id", deleteEffect);
route.get("/get/:id", getEffectById);
route.get("/search", searchEffectByName);
route.get("/count", fetchEffectsCount); 

export default route;
