import express from "express";

import {
    createArchetype,
    fetchArchetypes,
    updateArchetype,
    deleteArchetype,
    getArchetypeById,
    searchArchetypeByName,
    fetchArchetypesCount,
} from "../controller/archetypeController.js";

const route = express.Router();

route.post("/create", createArchetype);
route.get("/getall", fetchArchetypes);
route.put("/update/:id", updateArchetype);
route.delete("/delete/:id", deleteArchetype);
route.get("/get/:id", getArchetypeById);
route.get("/search/?name={name}", searchArchetypeByName);
route.get("/count", fetchArchetypesCount);

export default route;
