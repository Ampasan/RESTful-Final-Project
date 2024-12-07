import express from "express";

import {
    createCard,
    fetchCards,
    updateCard,
    deleteCard,
    getCardById,
    searchCardByName,
    fetchCardsCount,
} from "../controller/cardController.js";

const route = express.Router();

route.post("/create", createCard);
route.get("/getall", fetchCards);
route.put("/update/:id", updateCard);
route.delete("/delete/:id", deleteCard);
route.get("/get/:id", getCardById);
route.get("/search/?name={name}", searchCardByName);
route.get("/count", fetchCardsCount);

export default route;
